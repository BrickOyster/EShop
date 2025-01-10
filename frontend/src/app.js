const express = require('express');
const cors = require('cors');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const port = 1337;

let pdhost = process.env.PRODUCTS_HOST || 'localhost';
let pdport = process.env.PRODUCTS_PORT || 13371;
let odhost = process.env.ORDERS_HOST   || 'localhost';
let odport = process.env.ORDERS_PORT   || 13373;
let kchost = process.env.AUTH_HOST   || 'localhost';
let kcport = process.env.AUTH_PORT   || 8182;

let pdurl = `http://${pdhost}:${pdport}/`;
let odurl = `http://${odhost}:${odport}/`;
let kcurl = `http://${kchost}:${kcport}/`;

function decodeJwt(jwtToken) {
    const base64Url = jwtToken.split('.')[1]; // Get the payload part of the JWT
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/'); // Replace Base64 URL encoding characters
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('')); // Decode Base64 and handle URI component encoding
  
    return JSON.parse(jsonPayload);
}

async function loginUser(getUsernameLogin, getPasswordLogin){
    try { 
        const headers = { "Content-Type": "application/x-www-form-urlencoded" };
        
        const body = new URLSearchParams({
            username: getUsernameLogin,
            password: getPasswordLogin,
            client_id: "eshop-client",
            client_secret: "EJaNPAqewKWZFxWxLNbXD1VpoY2AGrt8",
            grant_type: "password"
        }).toString();
    
        const response = await axios.post(kcurl+"realms/eshop/protocol/openid-connect/token", body, { headers }); 
        const token = response.data
        
        //store in localstorage username, email, role (customer, seller) and refresh_token
        const decodeToken = await decodeJwt(token.access_token)
        return {ret: true, tok: token, dec: decodeToken}
    } catch (error) { console.error("Error on login:", error.response ? error.response.data : error.message); return {ret: false, tok: null, dec: null}; }
}

async function refreshUser(getToken){
    try { 
        const headers = { "Content-Type": "application/x-www-form-urlencoded" };
        
        const body = new URLSearchParams({
            client_id: "eshop-client",
            client_secret: "EJaNPAqewKWZFxWxLNbXD1VpoY2AGrt8",
            grant_type: "refresh_token",
            refresh_token: getToken
        }).toString();
    
        const response = await axios.post(kcurl+"realms/eshop/protocol/openid-connect/token", body, { headers }); 
        const token = response.data
        
        //store in localstorage username, email, role (customer, seller) and refresh_token
        const decodeToken = await decodeJwt(token.access_token)
        return {ret: true, tok: token, dec: decodeToken}
    } catch (error) { console.error("Error on refresh:", error.response ? error.response.data : error.message); return {ret: false, tok: null, dec: null}; }
}

async function logoutUser(getToken){
    try { 
        const headers = { "Content-Type": "application/x-www-form-urlencoded" };
        
        const body = new URLSearchParams({
            client_id: "eshop-client",
            client_secret: "EJaNPAqewKWZFxWxLNbXD1VpoY2AGrt8",
            refresh_token: getToken
        }).toString();
        await axios.post(kcurl+"realms/eshop/protocol/openid-connect/logout", body, { headers }); 
        return true
    } catch (error) { console.error("Error on logout:", error.response ? error.response.data : error.message); return false; }
}

async function registerUser(getUsername, getEmail, getFirstName, getLastName, getPassword, getRole) {
    try {
        const fheaders = { "Content-Type": "application/x-www-form-urlencoded" };
        
        const fbody = new URLSearchParams({
            username: "admin",
            password: "admin",
            client_id: "admin-cli",
            grant_type: "client_credentials",
            client_secret: "EJaNPAqewKWZFxWxLNbXD1VpoY2AGrt8"
        }).toString();

        //get admin access token
        const first_response = await axios.post(kcurl+"realms/master/protocol/openid-connect/token", fbody, { fheaders })
        
        const token = first_response.data.access_token
        const refresh = first_response.data.refresh_token
        console.log("Got admin token. "+ token + " " + refresh);

        const sHeaders = { 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer '+ token};

        const sbody = new URLSearchParams({
            email: getEmail,
            enabled: true,
            username: getUsername,
            firstName: getFirstName,
            lastName: getLastName,
            attributes: {
                client_id: "eshop-client"
            },
            groups: [ getRole ],
            credentials: [
                {
                    type: "password",
                    value: getPassword,
                    temporary: false
                }
            ]
        }).toString(); console.log(sbody);

        const registerUser =  await axios.post(kcurl+"admin/realms/eshop/users", sbody, { sHeaders })
            
        if (response.status === 201) {
            alert('Register is ok')
            return true
        } else {
            const err = await registerUser.json()
            console.log(err)
            return false
        }
    } catch (error) { console.error("Error on register:", error.response ? error.response.data : error.message); return false; }
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '250kb' }));

app.get('/', async (req, res) => {
    // console.log("index");
    try {
        res.set('Content-Type', 'text/html');
        res.status(200).sendFile(path.join(__dirname, 'index.html'));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/login', async (req, res) => {
    const { getUsername, getPassword } = req.body;
    const { ret, tok, dec } = await loginUser(getUsername, getPassword);
    if(ret) {
        console.log("Login ok")
        res.status(200).json({token:tok, decoded:dec});
    } else {
        console.log("Login not ok")
        res.sendStatus(500);
    }
});

app.post('/refresh', async (req, res) => {
    const { getToken } = req.body;
    const { ret, tok, dec } = await refreshUser(getToken);
    if(ret) {
        console.log("Refresh ok")
        res.status(200).json({token:tok, decoded:dec});
    } else {
        console.log("Refresh not ok")
        res.sendStatus(500);
    }
});

app.post('/logout', async (req, res) => {
    const { getToken } = req.body;
    const responce = await logoutUser(getToken);
    if(responce) {
        console.log("Logout ok")
        res.sendStatus(200);
    } else {
        console.log("Logout not ok")
        res.sendStatus(500);
    }
});

app.post('/register', async (req, res) => {
    const { getUsername, getEmail, getFirstName, getLastName, getPassword, getRole } = req.body;
    try {
        const responce = await registerUser(getUsername, getEmail, getFirstName, getLastName, getPassword, getRole);
        if(responce) {
            const { ret, tok, dec } = await loginUser(getUsername, getPassword);
            if (ret) {
                res.status(200).json({token:tok, decoded:dec});
            } else { res.sendStatus(500); }
        } else { res.sendStatus(500); }
    } catch (err) {
        console.log("Connection Error.")
        console.log(err);
        res.sendStatus(500);
    }
});

app.post('/upload', async (req, res) => {
    const { title, image } = req.body;
    let imgPath = path.join(__dirname, `img/${title}`);
    try {
        fs.writeFile(imgPath, Buffer.from(image,'base64'), (err) => {});
        res.sendStatus(200);
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

// app.post('/rename', async (req, res) => {
//     const { title, new_title } = req.body;
//     let imgPath = path.join(__dirname, `img/${title}`);
//     let new_imgPath = path.join(__dirname, `img/${new_title}`);
//     try {
//         fs.rename(imgPath, new_imgPath, (err) => {});
//         res.sendStatus(200);
//     } catch (err) {
//         console.log(err);
//         res.sendStatus(500);
//     }
// });

app.post('/remove', async (req, res) => {
    const { title } = req.body;
    let imgPath = path.join(__dirname, `img/${title}`);
    // console.log(title+'\n'+imgPath+'\n'+image);
    try {
        fs.unlink(imgPath, (err) => {});
        res.sendStatus(200);
    } catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
});

app.post('/products', async (req, res) => {
    try {
        const response = await axios.post(pdurl, req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/products/add', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'add', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.delete('/products', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'delete', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/products/update', async (req, res) => {
    try {
        const response = await axios.post(pdurl+'update', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/orders', async (req, res) => {
    try {
        const response = await axios.post(odurl, req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.post('/orders/add', async (req, res) => {
    try {
        const response = await axios.post(odurl+'add', req.body, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching products');
    }
});

app.get('/*', async (req, res) => {
    // console.log(__dirname + "  " + req.path);
    try {
        res.status(200).sendFile(path.join(__dirname, req.path));
    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

app.listen(port, () => console.log(`Server has started on port: ${port}`));
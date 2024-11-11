let pdhost = 'localhost';
let pdport = 13371;
let odhost = 'localhost';
let odport = 13373;

let pdurl = `http://${pdhost}:${pdport}/`;
let odurl = `http://${odhost}:${odport}/`;

let shoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Shop stored Products
var globalShopProducts;
// Shop filter
var filter;

// Updates/Filters products page
let generateShop = () => {
  let searchRes = filter || "";
  let editable = new URLSearchParams(window.location.search).get('editable') || "";
  document.getElementById('search-box').value = filter || "";

  if(shop !== null) {
    if (editable === 'true') {
      return (shop.innerHTML = globalShopProducts
        .map((x) => {
          if (x === "Dummy") {
            return `
            <div id="add-product" class="item-card">
              <div class="dummy-image">
                <!-- uploaded pic shown here -->
                <img id="newImage" class="pic" src="img/error.png">
            
                <input class="uploadProfileInput" type="file" name="pic" id="newProfilePhoto" accept="image/*" onchange="document.getElementById('newImage').src = window.URL.createObjectURL(this.files[0])"/>
              </div>
              <div class="details">
                <h3 id="h3-0"><textarea type="text" id="add-title" autocomplete="off">Title</textarea></h3>
                <p id="p-0"><textarea type="text" rows="2" id="add-description" autocomplete="off">Description</textarea></p>
                <div class="price-quantity">
                  <h2 id="h2-0">$ <textarea type="text" id="add-price" autocomplete="off">00.00</textarea></h2>
                  <div class="buttons">
                    <i onclick="cancelEdit()" class="bi bi-bin-lg">
                      <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                    </i>
                    <i onclick="addProduct()" class="bi bi-edit-lg">
                      <svg width="16px" height="16px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      </svg>
                    </i>
                  </div>
                </div>
              </div>
            </div>
            `
          }
          let {id, title, image, description, price, quantity} = x;
          if (searchRes.substring(0, 1) === "$") { 
            if (parseFloat(price) > parseFloat(searchRes.substring(1))) return;
          } else if(title.search(searchRes) === -1 && description.search(searchRes) === -1) return;
          return `
          <div id=product-id-${id} class="item-card">
            <img id="image-${id}" src='img/${image}' alt="" onerror="this.src='img/error.png';"/>
            <div class="details">
              <h3 id="h3-${id}">${title}</h3>
              <p id="p-${id}">${description}</p>
              <div class="price-quantity">
                <h2 id="h2-${id}">$ ${price} </h2>
                <div class="buttons">
                  <i onclick="deleteProduct(${id})" class="bi bi-bin-lg" id="bin-${id}">
                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </i>
                  <i onclick="editProduct(${id})" class="bi bi-edit-lg" id="edit-${id}">
                    <svg width="16px" height="16px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 20.0002H21M3 20.0002H4.67454C5.16372 20.0002 5.40832 20.0002 5.63849 19.945C5.84256 19.896 6.03765 19.8152 6.2166 19.7055C6.41843 19.5818 6.59138 19.4089 6.93729 19.063L19.5 6.50023C20.3285 5.6718 20.3285 4.32865 19.5 3.50023C18.6716 2.6718 17.3285 2.6718 16.5 3.50023L3.93726 16.063C3.59136 16.4089 3.4184 16.5818 3.29472 16.7837C3.18506 16.9626 3.10425 17.1577 3.05526 17.3618C3 17.5919 3 17.8365 3 18.3257V20.0002Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
          `;
        }).join(""));
    } else {
      return (shop.innerHTML = globalShopProducts
        .map((x) => {
          if(x === "Dummy") return;
          let {id, title, image, description, price, quantity} = x;
          let search = basket.find((x) => x.id === id) || [];
          if (searchRes.substring(0, 1) === "$") { 
            if (parseFloat(price) > parseFloat(searchRes.substring(1))) return;
          } else if(title.search(searchRes) === -1 && description.search(searchRes) === -1) return;
          return `
          <div id=product-id-${id} class="item-card">
            <img src='img/${image}' alt="" onerror="this.src='img/error.png';"/>
            <div class="details">
              <h3>${title}</h3>
              <p>${description}</p>
              <div class="price-quantity">
                <h2>$ ${price} </h2>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg">-</i>
                  <div id=${id} class="quantity">
                    ${search.item === undefined ? 0 : search.item}
                  </div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg">+</i>
                </div>
              </div>
            </div>
          </div>
          `;
        }).join(""));
    }
  }
};

let displayCart = () => {
  if (basket.length !== 0) {
    if(shoppingCart !== null) {
      return (shoppingCart.innerHTML = basket
        .map((x) => {
          let {id, item} = x;
          let search = globalShopProducts.find((x) => x.id === id) || [];
          let {_, title, image, description, price, quantity} = search;
          return `
          <div class="cart-item">
            <img width="100" src='img/${image}' alt="" onerror="this.src='img/error.png';"/>
            <div class="details">
              <div class="title-price-x">
                <h4 class="title-price">
                  <p>${title}</p>
                </h4>
                <div class="buttons">
                  <i onclick="removeItem(${id})" class="bi bi-x-lg">x</i>
                </div>
              </div>
              <div class="cart-buttons">
                <h3>$ ${(item * price).toFixed(2)}</h3>
                <div class="buttons">
                  <i onclick="decrement(${id})" class="bi bi-dash-lg">-</i>
                  <div id=${id}_cart class="quantity">${item}</div>
                  <i onclick="increment(${id})" class="bi bi-plus-lg">+</i>
                </div>
              </div>
            </div>
          </div>
          `;
        }).join(""));
    }
  } else {
    shoppingCart.innerHTML = "";
    if(label !== null) {
      label.innerHTML = `
        <h2>Cart is Empty</h2>
      `;
    }
  }
};

let TotalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = globalShopProducts.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    if(label !== null) {
      return (label.innerHTML = `
      <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
      <button onclick="submitOrder()" class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    }
  } else return;
};

// Updates cart contents amount
let calculation = () => {
  let cartIcon = document.getElementById("cartContents");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

// Updates whole page fetching (retare === 1) or not (retake === 0) database data
let getShopItems = async (retake) => {
  if (retake) {
    try {
      const response = await fetch(pdurl);
      if(!response.ok){
        throw new Error("Could not fetch resource");
      }
      
      const data = await response.json();
      globalShopProducts = data;
      globalShopProducts.push("Dummy");
      console.log(globalShopProducts);
      console.log("Fetch successful.");
    } catch(error) {
      console.error(error);
    }
  }
  generateShop();
  displayCart();
  TotalAmount();
  calculation();
}; getShopItems(1);

let increment = (id) => {
    let search = basket.find((x) => x.id === id);
  
    if (search === undefined) {
        basket.push({
            id: id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
  
    localStorage.setItem("basket", JSON.stringify(basket));
    getShopItems(0);
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
      search.item -= 1;
  }
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("basket", JSON.stringify(basket));
  getShopItems(0);
};

let clearCart = () => {
  basket = [];
  localStorage.setItem("basket", JSON.stringify(basket));
  getShopItems(0);
};

let removeItem = (id) => {
  basket = basket.filter((x) => x.id !== id);
  localStorage.setItem("basket", JSON.stringify(basket));
  getShopItems(0);
};

let submitOrder = async () => {
  if (basket.length === 0) return;
  
  let products = basket.map((item) => {
      let product = globalShopProducts.find((p) => p.id === item.id);
      return {
          title: product.title,
          amount: item.item,
          product_id: product.id
      };
  });

  let totalPrice = products.reduce((acc, item) => {
      let product = globalShopProducts.find((p) => p.id === item.product_id);
      return acc + (item.amount * (product.price || 0));
  }, 0).toFixed(2);

  try {
    let response = await fetch(odurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({products: JSON.stringify(products), total_price: totalPrice})
    });
    if (response.ok) {
      clearCart();
    } else {
      console.error("Error placing order:", response.statusText);
    }
  } catch (error) {
    console.error("Error placing order:", error);
  }
}

let editProduct = (id) => {
  let cardTitle = document.getElementById(`h3-${id}`);
  let cardDescription = document.getElementById(`p-${id}`)
  let cardPrice = document.getElementById(`h2-${id}`);
  let cardEditButton = document.getElementById(`edit-${id}`);
  let cardBinButton = document.getElementById(`bin-${id}`);

  cardTitle.innerHTML = `<textarea type="text" id="edit-title-${id}" autocomplete="off">${cardTitle.textContent}</textarea>`;
  cardDescription.innerHTML = `<textarea type="text" rows="2" id="edit-description-${id}" autocomplete="off">${cardDescription.textContent}</textarea>`;
  cardPrice.innerHTML = `$ <textarea type="text" id="edit-price-${id}" autocomplete="off">${cardPrice.textContent.substring(2)}</textarea>`;
  cardBinButton.innerHTML = ``;
  cardBinButton.setAttribute("onClick", "javascript: cancelEdit();" );
  cardEditButton.innerHTML = ``;
  cardEditButton.setAttribute("onClick", `javascript: submitEdit(${id});` );
};

let submitEdit = async (id) => {
  // console.log({iid: id, title: document.getElementById(`edit-title-${id}`).value, image: document.getElementById(`edit-title-${id}`).value.replace(" ", '_').toLowerCase()+".png",  description: document.getElementById(`edit-description-${id}`).value, price: document.getElementById(`edit-price-${id}`).value, quantity: 100});
  await fetch(pdurl+"update",
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(
        {iid: id, 
         title: document.getElementById(`edit-title-${id}`).value, 
         image: document.getElementById(`edit-title-${id}`).value.replace(" ", '_').toLowerCase()+".png", 
         description: document.getElementById(`edit-description-${id}`).value, 
         price: document.getElementById(`edit-price-${id}`).value, 
         quantity: 100})
    });
  getShopItems(1);
}

let cancelEdit = () => {
  getShopItems(0);
}

let deleteProduct = async (id) => {
  await fetch(pdurl,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "DELETE",
      body: JSON.stringify({iid: id})
    });
  getShopItems(1);
};

let addProduct = async () => {
  // await fetch(appurl,
  //   {
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     method: "POST",
  //     body: JSON.stringify(
  //       {title: document.getElementById(`add-title`).value.replace(" ", '_').toLowerCase()+".png", 
  //        image: document.getElementById(`newProfilePhoto`)})
  //   });
  
  await fetch(pdurl,
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(
        {title: document.getElementById(`add-title`).value, 
         image: document.getElementById(`add-title`).value.replace(" ", '_').toLowerCase()+".png", 
         description: document.getElementById(`add-description`).value, 
         price: document.getElementById(`add-price`).value,  
         quantity: 100})
    });
  getShopItems(1);
}

$(document).ready(function(){
  $('#searchProduct').click(
    function() {
      filter = document.getElementById("search-box").value;
      generateShop(0)
    } 
  );

  $('#search-box').keyup(
    function(event) {
      filter = document.getElementById("search-box").value;
      generateShop(0)
    }
  );
});
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
                      <svg width="16px" height="16px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M704 288h-281.6l177.6-202.88a32 32 0 0 0-48.32-42.24l-224 256a30.08 30.08 0 0 0-2.24 3.84 32 32 0 0 0-2.88 4.16v1.92a32 32 0 0 0 0 5.12A32 32 0 0 0 320 320a32 32 0 0 0 0 4.8 32 32 0 0 0 0 5.12v1.92a32 32 0 0 0 2.88 4.16 30.08 30.08 0 0 0 2.24 3.84l224 256a32 32 0 1 0 48.32-42.24L422.4 352H704a224 224 0 0 1 224 224v128a224 224 0 0 1-224 224H320a232 232 0 0 1-28.16-1.6 32 32 0 0 0-35.84 27.84 32 32 0 0 0 27.84 35.52A295.04 295.04 0 0 0 320 992h384a288 288 0 0 0 288-288v-128a288 288 0 0 0-288-288zM103.04 760a32 32 0 0 0-62.08 16A289.92 289.92 0 0 0 140.16 928a32 32 0 0 0 40-49.92 225.6 225.6 0 0 1-77.12-118.08zM64 672a32 32 0 0 0 22.72-9.28 37.12 37.12 0 0 0 6.72-10.56A32 32 0 0 0 96 640a33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72 32 32 0 0 0-34.88 6.72A32 32 0 0 0 32 640a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56A32 32 0 0 0 64 672z" fill="#231815"></path></svg>
                    </i>
                    <i onclick="addProduct()" class="bi bi-edit-lg">
                      <svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path></svg>
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
          } else if(title.toLowerCase().search(searchRes.toLowerCase()) === -1 && description.toLowerCase().search(searchRes.toLowerCase()) === -1) return;
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
          } else if(title.toLowerCase().search(searchRes.toLowerCase()) === -1 && description.toLowerCase().search(searchRes.toLowerCase()) === -1) return;
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
      const response = await fetch('/products');
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
    let response = await fetch('/orders', {
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
  // let cardTitle = document.getElementById(`h3-${id}`);
  // cardTitle.innerHTML = `<textarea type="text" id="edit-title-${id}" autocomplete="off">${cardTitle.textContent}</textarea>`;
  
  let cardDescription = document.getElementById(`p-${id}`)
  cardDescription.innerHTML = `<textarea type="text" rows="2" id="edit-description-${id}" autocomplete="off">${cardDescription.textContent}</textarea>`;

  let cardPrice = document.getElementById(`h2-${id}`);
  cardPrice.innerHTML = `$ <textarea type="text" id="edit-price-${id}" autocomplete="off">${cardPrice.textContent.substring(2)}</textarea>`;

  let cardEditButton = document.getElementById(`edit-${id}`);
  cardEditButton.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" version="1.1" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><path d="m1.75 9.75 2.5 2.5m3.5-4 2.5-2.5m-4.5 4 2.5 2.5 6-6.5"></path></svg>`;
  cardEditButton.setAttribute("onClick", `javascript: submitEdit(${id});` );
  
  let cardBinButton = document.getElementById(`bin-${id}`);
  cardBinButton.innerHTML = `<svg width="16px" height="16px" viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><path d="M704 288h-281.6l177.6-202.88a32 32 0 0 0-48.32-42.24l-224 256a30.08 30.08 0 0 0-2.24 3.84 32 32 0 0 0-2.88 4.16v1.92a32 32 0 0 0 0 5.12A32 32 0 0 0 320 320a32 32 0 0 0 0 4.8 32 32 0 0 0 0 5.12v1.92a32 32 0 0 0 2.88 4.16 30.08 30.08 0 0 0 2.24 3.84l224 256a32 32 0 1 0 48.32-42.24L422.4 352H704a224 224 0 0 1 224 224v128a224 224 0 0 1-224 224H320a232 232 0 0 1-28.16-1.6 32 32 0 0 0-35.84 27.84 32 32 0 0 0 27.84 35.52A295.04 295.04 0 0 0 320 992h384a288 288 0 0 0 288-288v-128a288 288 0 0 0-288-288zM103.04 760a32 32 0 0 0-62.08 16A289.92 289.92 0 0 0 140.16 928a32 32 0 0 0 40-49.92 225.6 225.6 0 0 1-77.12-118.08zM64 672a32 32 0 0 0 22.72-9.28 37.12 37.12 0 0 0 6.72-10.56A32 32 0 0 0 96 640a33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72 32 32 0 0 0-34.88 6.72A32 32 0 0 0 32 640a32 32 0 0 0 2.56 12.16 37.12 37.12 0 0 0 6.72 10.56A32 32 0 0 0 64 672z" fill="#231815"></path></svg>`;
  cardBinButton.setAttribute("onClick", "javascript: cancelEdit();" );
};

let submitEdit = async (id) => {
  // console.log({iid: id, title: document.getElementById(`edit-title-${id}`).value, image: document.getElementById(`edit-title-${id}`).value.replace(" ", '_').toLowerCase()+".png",  description: document.getElementById(`edit-description-${id}`).value, price: document.getElementById(`edit-price-${id}`).value, quantity: 100});
  await fetch('/products/update',
    {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(
        {iid: id, 
        //  title: document.getElementById(`edit-title-${id}`).value, 
         title: document.getElementById(`h3-${id}`).textContent,
        //  image: document.getElementById(`edit-title-${id}`).value.replace(" ", '_').toLowerCase()+".png", 
         image: document.getElementById(`h3-${id}`).textContent.replace(" ", '_').toLowerCase()+".png", 
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
  await fetch('/remove', 
    {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({title: document.getElementById(`h3-${id}`).innerHTML.replace(" ", '_').toLowerCase()+".png"})
    }
  );
  await fetch('/products',
    {
      method: "DELETE",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({iid: id})
    });
  getShopItems(1);
};

let addProduct = async () => {
  const file = document.getElementById(`newProfilePhoto`).files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = async function(event) {
      const fileContent = event.target.result; // The file's content as text
      // console.log(document.getElementById(`add-title`).value.replace(" ", '_').toLowerCase()+".png"+"\n"+fileContent.split(',')[1]);
      await fetch('/upload',
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "POST",
          body: JSON.stringify(
            {title: document.getElementById(`add-title`).value.replace(" ", '_').toLowerCase()+".png", 
             image: fileContent.split(',')[1]})
        });
    };
    reader.readAsDataURL(file); 
  } else {
    console.log('No file selected');
  }
  
  
  await fetch('/products',
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
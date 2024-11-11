let pdhost = 'localhost';
let pdport = 13371;
let odhost = 'localhost';
let odport = 13373;
// process.env.PRODUCTS_HOST || 
// process.env.PRODUCTS_PORT || 
// process.env.ORDERS_HOST   || 
// process.env.ORDERS_PORT   || 
let pdurl = `http://${pdhost}:${pdport}/`;
let odurl = `http://${odhost}:${odport}/`;

let shoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("basket")) || [];

// Shop stored Products
var globalShopProducts;
// Shop stored Orders
var globalShopOrders;
// Shop filter
var filter;

// Updates/Filters products page
let generateShop = () => {
  let searchRes = filter || "";
  let editable = new URLSearchParams(window.location.search).get('editable') || "";
  document.getElementById('search-box').value = filter || "";

  if(orders !== null) {
    return (orders.innerHTML = globalShopOrders
      .map((x) => {
        return `
        <div class="order-card">
          <div class="order-contents">
            ${x.products.map((p) => {
              return `
              <div class="order-product">
                <h3>${p.title}</h3> <h4>${p.amount}</h4>
              </div>`;
            }).join("")}
          </div>
          <div class="status-price">
            <h3 class="status">${x.status}</h3>
            <h3 class="total_price">${x.total_price}</h3>
          </div>
        </div>
        `;
      }).join(""));
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
  if(retake === 2){
    try {
      const response = await fetch(pdurl);
      if(!response.ok){
        throw new Error("Could not fetch resource");
      }
      
      const data = await response.json();
      globalShopProducts = data;
      globalShopProducts.push("Dummy");
      console.log(globalShopProducts);
      const response2 = await fetch(odurl);
      if(!response2.ok){
        throw new Error("Could not fetch resource");
      }
      
      const data2 = await response2.json();
      globalShopOrders = data2;
      console.log(globalShopOrders);
      console.log("Fetch successful.");
    } catch(error) {
      console.error(error);
    }
  } else if (retake) {
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
}; getShopItems(2);

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

let submitOrder = () => { // To complete
  console.log("Order submited.");
  clearCart();
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
let pdurl = "http://localhost:13370/";
let odurl = "http://localhost:13371/";
let shoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("data")) || [];
// console.log(basket);

let getShopItems = async () => {
  try {
    const response = await fetch(`http://localhost:13371/`);
    if(!response.ok){
      throw new Error("Could not fetch resource");
    }
    
    const data = await response.json();
    console.log("Fetch successful.");
    return data;
  } catch(error) {
    console.error(error);
  }
};

var getProductsAgain = true;
var shopItemsData = null;

let generateShop = async () => {
  if (getProductsAgain) {
    shopItemsData = await getShopItems();
    getProductsAgain = false;
  }
  let searchRes = new URLSearchParams(window.location.search).get('search') || "";
  let editRes = new URLSearchParams(window.location.search).get('editable') || "";
  document.getElementById('search-box').value = searchRes;
  if(shop !== null) {
    if (editRes === 'true') {
      return (shop.innerHTML = shopItemsData
        .map((x) => {
          // console.log(x);
          let {id, title, image, description, price, quantity} = x;
          // console.log(id, " ", title, " ", price, " ", description, " ", image, " ", quantity)
          let search = basket.find((x) => x.id === id) || [];
          if(search[1] !== $ && title.search(searchRes) === -1 && desc.search(searchRes) === -1) return;
          // console.log('sss'+image);
          return `
          <div id=product-id-${id} class="item-card">
            <img src='img/${image}' alt="" onerror="this.src='img/error.png';"/>
            <div class="details">
              <h3>${title}</h3>
              <p>${description}</p>
              <div class="price-quantity">
                <h2>$ ${price} </h2>
                <div class="buttons">
                  <i onclick="" class="bi bi-edit-lg">
                    <svg width="16px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 12L14 16M14 12L10 16M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                  </i>
                  <i onclick="" class="bi bi-bin-lg">
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
      return (shop.innerHTML = shopItemsData
        .map((x) => {
          // console.log(x);
          let {id, title, image, description, price, quantity} = x;
          // console.log(id, " ", title, " ", price, " ", description, " ", image, " ", quantity)
          let search = basket.find((x) => x.id === id) || [];
          if(search[1] !== $ && title.search(searchRes) === -1 && description.search(searchRes) === -1) return;
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
}; generateShop();
// url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEXuAY2OFA6sAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC')

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
  
    // console.log(basket);
    update(id);
    localStorage.setItem("data", JSON.stringify(basket));
    displayCart();
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
      search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
  displayCart();
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calculation();
};
  
let calculation = () => {
  let cartIcon = document.getElementById("cartContents");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
}; calculation();

let TotalAmount = (data) => {
  let shopItemsData = data;
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { id, item } = x;
        let filterData = shopItemsData.find((x) => x.id === id);
        return filterData.price * item;
      })
      .reduce((x, y) => x + y, 0);

    if(label !== null) {
      return (label.innerHTML = `
      <h2>Total Bill : $ ${amount.toFixed(2)}</h2>
      <button onclick="addOrder()" class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    }
  } else return;
};

let displayCart = async () => {
  if (getProductsAgain) {
    shopItemsData = await getShopItems();
    getProductsAgain = false;
  }
  TotalAmount(shopItemsData);
  if (basket.length !== 0) {
    if(shoppingCart !== null) {
      return (shoppingCart.innerHTML = basket
        .map((x) => {
          let {id, item} = x;
          let search = shopItemsData.find((x) => x.id === id) || [];
          // console.log(search);
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
}; displayCart();

let clearCart = () => {
  basket = [];
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop();
  calculation();
  displayCart();
};

let removeItem = (id) => {
  basket = basket.filter((x) => x.id !== id);
  localStorage.setItem("data", JSON.stringify(basket));
  generateShop();
  calculation();
  displayCart();
};

let addOrder = () => {
  console.log("Order submited.");
  clearCart();
}
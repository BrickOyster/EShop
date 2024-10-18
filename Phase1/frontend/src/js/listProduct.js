let shop = document.getElementById("shop");
let shoppingCart = document.getElementById("shopping-cart");
let label = document.getElementById("label");
let basket = JSON.parse(localStorage.getItem("data")) || [];
console.log(basket);

let generateShop = () => {
  if(shop !== null) {
    return (shop.innerHTML = shopItemsData
        .map((x) => {
            let {id, name, price, desc, img} = x;
            let search = basket.find((x) => x.id == id) || [];
            return `
            <div id=product-id-${id} class="item-card">
              <img src=${img} alt="" onerror="this.src='img/error.png';"/>
              <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
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
};
generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
        basket.push({
            id: selectedItem.id,
            item: 1,
        });
    } else {
        search.item += 1;
    }
  
    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
    displayCart();
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem.id);
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
};
calculation();

let TotalAmount = () => {
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
      <h2>Total Bill : $ ${amount}</h2>
      <button class="checkout">Checkout</button>
      <button onclick="clearCart()" class="removeAll">Clear Cart</button>
      `);
    }
  } else return;
};
TotalAmount();

let displayCart = () => {
  TotalAmount();
  if (basket.length !== 0) {
    if(shoppingCart !== null) {
      return (shoppingCart.innerHTML = basket
        .map((x) => {
          let {id, item} = x;
          let search = shopItemsData.find((x) => x.id == id) || [];
          let { img, price, name } = search;
          return `
          <div class="cart-item">
            <img width="100" src=${img} alt="" onerror="this.src='img/error.png';"/>
            <div class="details">
              <div class="title-price-x">
                <h4 class="title-price">
                  <p>${name}</p>
                </h4>
                <div class="buttons">
                  <i onclick="removeItem(${id})" class="bi bi-x-lg">x</i>
                </div>
              </div>
              <div class="cart-buttons">
                <h3>$ ${item * price}</h3>
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
displayCart();

let clearCart = () => {
  basket = [];
  generateShop();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  displayCart();
};

let removeItem = (id) => {
  let selectedItem = id;
  basket = basket.filter((x) => x.id !== selectedItem.id);
  generateShop();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
  displayCart();
};
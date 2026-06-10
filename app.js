const products = [
{
    id:1,
    name:"Milk",
    price:30,
    image:"https://picsum.photos/300/200?1"
},
{
    id:2,
    name:"Bread",
    price:40,
    image:"https://picsum.photos/300/200?2"
},
{
    id:3,
    name:"Eggs",
    price:70,
    image:"https://picsum.photos/300/200?3"
},
{
    id:4,
    name:"Rice 1kg",
    price:60,
    image:"https://picsum.photos/300/200?4"
},
{
    id:5,
    name:"Sugar 1kg",
    price:50,
    image:"https://picsum.photos/300/200?5"
},
{
    id:6,
    name:"Tea Powder",
    price:120,
    image:"https://picsum.photos/300/200?6"
}
];

let cart = [];

function loadProducts(list = products){

    const container =
        document.getElementById("products");

    container.innerHTML = "";

    list.forEach(product => {

        container.innerHTML += `
        <div class="card">

            <img src="${product.image}">

            <div class="card-content">

                <h3>${product.name}</h3>

                <div class="price">
                    ₹${product.price}
                </div>

                <button
                  onclick="addToCart(${product.id})"
                >
                    Add To Cart
                </button>

            </div>

        </div>`;
    });
}

function addToCart(id){

    const product =
        products.find(p => p.id === id);

    cart.push(product);

    renderCart();
}

function renderCart(){

    const cartItems =
        document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
        </div>`;
    });

    document.getElementById("total")
        .innerText = total;
}

function placeOrder(){

    if(cart.length === 0){

        alert("Cart is empty");
        return;
    }

    alert(
      "Order placed successfully!\nTotal ₹" +
      document.getElementById("total").innerText
    );

    cart = [];

    renderCart();
}

function searchProducts(){

    const keyword =
      document
      .getElementById("searchInput")
      .value
      .toLowerCase();

    const filtered =
      products.filter(product =>
        product.name
          .toLowerCase()
          .includes(keyword)
      );

    loadProducts(filtered);
}

loadProducts();

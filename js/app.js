// =======================
// PRODUCTS
// =======================

const products = [

{
id:1,
name:"Amul Milk",
category:"Milk",
price:30,
unit:"500 ml",
image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?w=500"
},

{
id:2,
name:"Brown Bread",
category:"Bakery",
price:40,
unit:"400 g",
image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500"
},

{
id:3,
name:"Apple",
category:"Fruits",
price:120,
unit:"1 kg",
image:"https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=500"
},

{
id:4,
name:"Banana",
category:"Fruits",
price:60,
unit:"1 dozen",
image:"https://images.unsplash.com/photo-1574226516831-e1dff420e37f?w=500"
},

{
id:5,
name:"Tomato",
category:"Vegetables",
price:35,
unit:"500 g",
image:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500"
},

{
id:6,
name:"Potato",
category:"Vegetables",
price:25,
unit:"1 kg",
image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=500"
},

{
id:7,
name:"Tea Powder",
category:"Drinks",
price:180,
unit:"500 g",
image:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500"
},

{
id:8,
name:"Orange Juice",
category:"Drinks",
price:90,
unit:"1 L",
image:"https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=500"
}
];

// =======================
// STORAGE
// =======================

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

let selectedCategory = "All";

// =======================
// RENDER PRODUCTS
// =======================

function renderProducts(list = products){

const container =
document.getElementById("products");

container.innerHTML = "";

list.forEach(product=>{

const qty =
getProductQty(product.id);

container.innerHTML += `

<div class="product-card">

<img
class="product-image"
src="${product.image}"
alt="${product.name}"
>

<div class="product-body">

<div class="product-title">
${product.name}
</div>

<div class="product-unit">
${product.unit}
</div>

<div class="product-price">
₹${product.price}
</div>

<div class="qty-box">

<button
class="qty-btn"
onclick="decreaseQty(${product.id})">
-
</button>

<div class="qty-count">
${qty}
</div>

<button
class="qty-btn"
onclick="increaseQty(${product.id})">
+
</button>

</div>

</div>

</div>

`;
});

updateCartBar();
}

// =======================
// CART
// =======================

function getProductQty(id){

return cart.filter(
item => item.id === id
).length;
}

function increaseQty(id){

const product =
products.find(
p => p.id === id
);

cart.push(product);

saveCart();

renderProducts(
getFilteredProducts()
);

showToast(
`${product.name} added`
);
}

function decreaseQty(id){

const index =
cart.findIndex(
item => item.id === id
);

if(index > -1){

cart.splice(index,1);

saveCart();

renderProducts(
getFilteredProducts()
);
}
}

function saveCart(){

localStorage.setItem(
"cart",
JSON.stringify(cart)
);
}

function updateCartBar(){

const count =
cart.length;

const total =
cart.reduce(
(sum,item)=>
sum + item.price,
0
);

document.getElementById(
"cartCount"
).innerHTML =
`${count} Items`;

document.getElementById(
"cartTotal"
).innerHTML =
`₹${total}`;
}

// =======================
// SEARCH
// =======================

function searchProducts(){

renderProducts(
getFilteredProducts()
);
}

function getFilteredProducts(){

const keyword =
document
.getElementById(
"searchInput"
)
.value
.toLowerCase();

return products.filter(product=>{

const searchMatch =
product.name
.toLowerCase()
.includes(keyword);

const categoryMatch =
selectedCategory === "All"
||
product.category === selectedCategory;

return searchMatch &&
categoryMatch;

});
}

// =======================
// CATEGORY FILTER
// =======================

document
.querySelectorAll(".category")
.forEach(category=>{

category.addEventListener(
"click",
()=>{

document
.querySelectorAll(".category")
.forEach(c=>
c.classList.remove("active")
);

category.classList.add(
"active"
);

selectedCategory =
category.innerText
.replace(/[^\w]/g,"")
.trim();

if(
selectedCategory === ""
){
selectedCategory = "All";
}

renderProducts(
getFilteredProducts()
);

});
});

// =======================
// TOAST
// =======================

function showToast(message){

const toast =
document.getElementById(
"toast"
);

toast.innerHTML = message;

toast.classList.add(
"show"
);

setTimeout(()=>{

toast.classList.remove(
"show"
);

},2000);
}

// =======================
// DARK MODE
// =======================

const themeToggle =
document.getElementById(
"themeToggle"
);

if(
localStorage.getItem(
"theme"
) === "dark"
){

document.body.classList.add(
"dark"
);
}

themeToggle.addEventListener(
"click",
()=>{

document.body.classList.toggle(
"dark"
);

if(
document.body.classList.contains(
"dark"
)
){

localStorage.setItem(
"theme",
"dark"
);

themeToggle.innerHTML = "☀️";

}else{

localStorage.setItem(
"theme",
"light"
);

themeToggle.innerHTML = "🌙";
}

});
    
// =======================
// VIEW CART
// =======================

function openCart(){

window.location =
"cart.html";
}

// =======================
// INITIAL LOAD
// =======================

renderProducts();

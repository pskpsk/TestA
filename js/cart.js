const cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

const container =
document.getElementById(
"cartItems"
);

function renderCart(){

container.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

container.innerHTML += `

<div class="cart-item">

<img
src="${item.image}"
alt="${item.name}"
>

<div class="cart-info">

<div class="cart-title">
${item.name}
</div>

<div>
${item.unit}
</div>

<div class="cart-price">
₹${item.price}
</div>

</div>

<button
onclick="removeItem(${index})">

❌

</button>

</div>

`;

});

document.getElementById(
"itemTotal"
).innerHTML =
`₹${total}`;

document.getElementById(
"grandTotal"
).innerHTML =
`₹${total + 20}`;
}

function removeItem(index){

cart.splice(index,1);

localStorage.setItem(
"cart",
JSON.stringify(cart)
);

renderCart();
}

function placeOrder(){

if(cart.length === 0){

alert(
"Cart is empty"
);

return;
}

const orders =
JSON.parse(
localStorage.getItem(
"orders"
)
) || [];

const order = {

id:
Date.now(),

items:cart,

status:"Placed",

total:
cart.reduce(
(sum,item)=>
sum + item.price,
0
),

createdAt:
new Date()
.toLocaleString()

};

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

localStorage.removeItem(
"cart"
);

showToast(
"Order Placed Successfully"
);

setTimeout(()=>{

window.location =
"orders.html";

},1500);
}

function showToast(message){

const toast =
document.getElementById(
"toast"
);

toast.innerHTML =
message;

toast.classList.add(
"show"
);

setTimeout(()=>{

toast.classList.remove(
"show"
);

},2000);
}

renderCart();

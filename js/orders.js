const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

const container =
document.getElementById(
"ordersContainer"
);

function renderOrders(){

if(orders.length === 0){

container.innerHTML = `

<div class="order-card">

<h3>No Orders Found</h3>

<p>
Start shopping now.
</p>

</div>

`;

return;
}

container.innerHTML = "";

orders
.reverse()
.forEach(order=>{

container.innerHTML += `

<div class="order-card">

<div class="order-header">

<div>

<div class="order-id">

Order #${order.id}

</div>

<div class="order-date">

${order.createdAt}

</div>

</div>

<div class="status placed">

${order.status}

</div>

</div>

<div>

Items:
${order.items.length}

</div>

<div class="order-total">

₹${order.total}

</div>

<div class="timeline">

<div class="timeline-step">

✅ Order Placed

</div>

<div class="timeline-step">

📦 Packing

</div>

<div class="timeline-step">

🚚 Out for Delivery

</div>

<div class="timeline-step">

🏠 Delivered

</div>

</div>

<div class="order-actions">

<button
class="order-btn track-btn"
onclick="trackOrder()">

Track

</button>

<button
class="order-btn reorder-btn"
onclick="reorder(${order.id})">

Reorder

</button>

</div>

</div>

`;

});
}

function trackOrder(){

alert(
"Your order is being prepared."
);
}

function reorder(id){

const order =
orders.find(
o => o.id === id
);

if(!order) return;

localStorage.setItem(
"cart",
JSON.stringify(order.items)
);

alert(
"Items added to cart"
);

window.location =
"cart.html";
}

renderOrders();

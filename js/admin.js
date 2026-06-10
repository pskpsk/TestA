const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

const profile =
JSON.parse(
localStorage.getItem("profile")
) || {};

document.getElementById(
"totalOrders"
).innerText =
orders.length;

const revenue =
orders.reduce(
(sum,order)=>
sum + order.total,
0
);

document.getElementById(
"revenue"
).innerText =
"₹" + revenue;

document.getElementById(
"customers"
).innerText =
profile.name ? 1 : 0;

document.getElementById(
"productsCount"
).innerText = 8;

const recentOrders =
document.getElementById(
"recentOrders"
);

if(orders.length === 0){

recentOrders.innerHTML = `

<div class="recent-order">

<h4>No Orders Yet</h4>

<p>
Orders will appear here.
</p>

</div>

`;

}else{

orders
.slice()
.reverse()
.slice(0,5)
.forEach(order=>{

recentOrders.innerHTML += `

<div class="recent-order">

<h4>
Order #${order.id}
</h4>

<p>
${order.createdAt}
</p>

<p>
₹${order.total}
</p>

</div>

`;

});
}

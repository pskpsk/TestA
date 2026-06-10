const wishlist =
JSON.parse(
localStorage.getItem("wishlist")
) || [];

const container =
document.getElementById(
"wishlistContainer"
);

function renderWishlist(){

if(wishlist.length === 0){

container.innerHTML = `

<div class="order-card">

<h3>No Wishlist Items</h3>

<p>
Add products to wishlist.
</p>

</div>

`;

return;
}

container.innerHTML = "";

wishlist.forEach((item,index)=>{

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
onclick="removeWishlist(${index})">

❌

</button>

</div>

`;

});
}

function removeWishlist(index){

wishlist.splice(index,1);

localStorage.setItem(
"wishlist",
JSON.stringify(wishlist)
);

renderWishlist();
}

renderWishlist();

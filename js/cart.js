
const cart=JSON.parse(localStorage.getItem('cart')||'[]');
document.getElementById('cart').innerHTML=cart.map(i=>`<div>${i.name} ₹${i.price}</div>`).join('');

let cart=getCart();
function draw(){let t=0;const el=document.getElementById('cartItems');el.innerHTML='';
cart.forEach(i=>{t+=i.price;el.innerHTML+=`<div>${i.name} - ₹${i.price}</div>`;});
document.getElementById('total').innerText=t;}
function placeOrder(){if(!cart.length){alert('Cart empty');return;}
let orders=getOrders(); orders.push({id:Date.now(),total:cart.reduce((a,b)=>a+b.price,0),status:'Placed'});
saveOrders(orders); saveCart([]); alert('Order placed'); location.reload();}
draw();
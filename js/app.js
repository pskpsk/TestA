const products=[
{id:1,name:'Milk',price:30},{id:2,name:'Bread',price:40},{id:3,name:'Eggs',price:70},
{id:4,name:'Rice',price:60},{id:5,name:'Sugar',price:50},{id:6,name:'Tea',price:120}];
function render(list=products){const p=document.getElementById('products');p.innerHTML='';
list.forEach(x=>p.innerHTML+=`<div class='card'><h3>${x.name}</h3><p>₹${x.price}</p>
<button onclick='add(${x.id})'>Add</button></div>`);}
function add(id){let c=getCart();c.push(products.find(x=>x.id===id));saveCart(c);alert('Added');}
function searchProducts(){const q=document.getElementById('search').value.toLowerCase();
render(products.filter(p=>p.name.toLowerCase().includes(q)));}
render();
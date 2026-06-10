
const products=[
{id:1,name:'Milk',price:30},
{id:2,name:'Bread',price:40},
{id:3,name:'Eggs',price:70}
];
let cart=JSON.parse(localStorage.getItem('cart')||'[]');
function add(id){cart.push(products.find(p=>p.id===id));localStorage.setItem('cart',JSON.stringify(cart));update();}
function update(){document.getElementById('count').innerText=cart.length;document.getElementById('total').innerText=cart.reduce((a,b)=>a+b.price,0);}
function render(){
let q=document.getElementById('search').value.toLowerCase();
let list=products.filter(p=>p.name.toLowerCase().includes(q));
document.getElementById('products').innerHTML=list.map(p=>`<div class="card"><h3>${p.name}</h3><p>₹${p.price}</p><button onclick="add(${p.id})">Add</button></div>`).join('');
update();
}
render();

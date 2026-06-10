function getCart(){return JSON.parse(localStorage.getItem('cart')||'[]');}
function saveCart(c){localStorage.setItem('cart',JSON.stringify(c));}
function getOrders(){return JSON.parse(localStorage.getItem('orders')||'[]');}
function saveOrders(o){localStorage.setItem('orders',JSON.stringify(o));}
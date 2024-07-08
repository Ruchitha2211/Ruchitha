document.addEventListener('DOMContentLoaded', function() {
    const shopLink = document.getElementById('shopLink');
    const cartLink = document.getElementById('cartLink');
    const ordersLink = document.getElementById('ordersLink');
    const shopSection = document.getElementById('shop');
    const cartSection = document.getElementById('cart');
    const ordersSection = document.getElementById('orders');
    const cartItems = document.getElementById('cartItems');
    const orderItems = document.getElementById('orderItems');
    const checkoutButton = document.getElementById('checkoutButton');

    const cart = [];

    shopLink.addEventListener('click', function() {
        shopSection.style.display = 'block';
        cartSection.style.display = 'none';
        ordersSection.style.display = 'none';
    });

    cartLink.addEventListener('click', function() {
        shopSection.style.display = 'none';
        cartSection.style.display = 'block';
        ordersSection.style.display = 'none';
    });

    ordersLink.addEventListener('click', function() {
        shopSection.style.display = 'none';
        cartSection.style.display = 'none';
        ordersSection.style.display = 'block';
    });

    document.querySelectorAll('.product button').forEach(function(button) {
        button.addEventListener('click', function() {
            const product = button.parentElement;
            const id = product.getAttribute('data-id');
            const name = product.querySelector('h3').textContent;
            const price = product.querySelector('p').textContent;

            const cartItem = {
                id: id,
                name: name,
                price: price
            };

            cart.push(cartItem);
            renderCart();
        });
    });

    checkoutButton.addEventListener('click', function() {
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }

        cart.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            orderItems.appendChild(li);
        });

        cart.length = 0;
        renderCart();
        shopLink.click();
        alert('Order placed successfully!');
    });

    function renderCart() {
        while (cartItems.firstChild) {
            cartItems.removeChild(cartItems.firstChild);
        }

        cart.forEach(function(item) {
            const li = document.createElement('li');
            li.textContent = `${item.name} - ${item.price}`;
            cartItems.appendChild(li);
        });
    }
});

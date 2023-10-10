// script.js
const products = [
    { id: 1, name: "Product 1", price: 19.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 29.99, image: "product2.jpg" },
    { id: 3, name: "Product 3", price: 39.99, image: "product3.jpg" }
];

const cart = [];

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");

// Populate the product list
products.forEach(product => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button class="add-to-cart">Add to Cart</button>
    `;

    const addToCartBtn = productCard.querySelector(".add-to-cart");
    addToCartBtn.addEventListener("click", () => {
        addToCart(product);
        updateCartUI();
    });

    productList.appendChild(productCard);
});

// Add a product to the cart
function addToCart(product) {
    cart.push(product);
}

// Update the cart UI
function updateCartUI() {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        const cartItem = document.createElement("li");
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
}

// Handle checkout
checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("Your cart is empty. Add some items before proceeding to checkout.");
    } else {
        alert("Mock payment successful! Thank you for your purchase.");
        cart.length = 0; // Clear the cart
        updateCartUI();
    }
});

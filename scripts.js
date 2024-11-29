let cart = [];

// Add product to cart
function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} added to cart!`);
    console.log(cart); // For debugging
}

// Display Cart (Example function for future integration)
function viewCart() {
    let cartSummary = cart.map(item => `${item.productName}: ₹${item.price}`).join("\n");
    alert("Cart Summary:\n" + cartSummary);
}

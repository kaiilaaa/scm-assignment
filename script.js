function calculateOrderTotal(subtotal, taxRate) {
    return subtotal + (subtotal * taxRate);
}

if (typeof window !== 'undefined') {
    window.addEventListener('load', () => {
        const total = calculateOrderTotal(15.00, 0.08);
        console.log(`Cafe order total: $${total}`);
    });
}

if (typeof module !== 'undefined') {
    module.exports = calculateOrderTotal;
}

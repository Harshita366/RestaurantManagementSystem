document.getElementById('orderForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const food = document.getElementById('food').value;
    const quantity = document.getElementById('quantity').value;
    document.getElementById('orderSummary').textContent = `You ordered ${quantity} ${food}(s). Thank you!`;
});

// Get DOM elements
let billInput = document.getElementById('bill');
let tipInput = document.getElementById('parcentage'); // tip as a raw number
let totalAmountInput = document.getElementById('totalamount');

// Calculate total amount on input
billInput.addEventListener('input', calculateTotal);
tipInput.addEventListener('input', calculateTotal);

function calculateTotal() {
  let bill = parseFloat(billInput.value) || 0;
  let tip = parseFloat(tipInput.value) || 0;

  let total = bill * tip;

  totalAmountInput.value = total.toFixed(2); // Display with 2 decimals
}


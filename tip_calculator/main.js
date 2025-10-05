const calculator = () => {
    const billInput = parseFloat(document.getElementById('bill').value);
    const tipInput = parseFloat(document.getElementById('parcentage').value);
    const totalRusalt = document.getElementById('result');
    const TipRusalt = document.getElementById('result1');

    if (isNaN(billInput) || isNaN(tipInput)) {
        totalRusalt.innerText = '⚠️ Please fill in both inputs with valid numbers.';
        return;
     }

    const tipParcentage = (billInput * tipInput) / 100;

    const totalAmount = billInput +  tipParcentage;

      TipRusalt.innerText = tipParcentage;
     totalRusalt.innerText = totalAmount ;
}


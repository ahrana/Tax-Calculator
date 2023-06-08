function appendValue(value) {
  var result = document.getElementById('result');
  if (result.value === '0') {
    result.value = value;
  } else {
    result.value += value;
  }
}

function calculate() {
  var result = document.getElementById('result');
  var expression = result.value;
  try {
    result.value = eval(expression);
  } catch (error) {
    result.value = 'Error';
  }
}

function clearResult() {
  document.getElementById('result').value = '0';
}

function calculateTax() {
  var taxAmountInput = document.getElementById('taxAmount');
  var taxResult = document.getElementById('taxResult');
  var taxAmount = parseFloat(taxAmountInput.value);
  var result = document.getElementById('result').value;
  var calculatedTax = parseFloat(result) * (taxAmount / 100);
  taxResult.textContent = 'Tax Amount: ' + calculatedTax.toFixed(2);
}

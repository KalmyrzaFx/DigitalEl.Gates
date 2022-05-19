document.getElementById('buttonId').addEventListener('click', logic);

function logic() {
  var elGate = document.getElementById('gate');
  var elV1 = document.getElementById('v1');
  var elV2 = document.getElementById('v2');

  var gateValue = elGate.value !== 'd' ? parseInt(elGate.value) : undefined;
  var v1Value = elV1.value === 'b1' ? false : elV1.value === 'b2' ? true : undefined;
  var v2Value = elV2.value === 'b1' ? false : elV2.value === 'b2' ? true : undefined;

  var result = 'Invalid result';

  if (v1Value !== undefined && v2Value !== undefined && gateValue !== undefined && gateValue > 0 && gateValue < 6) {
    switch (gateValue) {
      case 1:
        result = (v1Value && v2Value) ? 'True' : 'False';
        break;
      case 2:
        result = (v1Value || v2Value) ? 'True' : 'False';
        break;
      case 3:
        result = ((v1Value && !v2Value) || (!v1Value && v2Value)) ? 'True' : 'False';
        break;
      case 4:
        result = (!(v1Value && v2Value)) ? 'True' : 'False';
        break;
      case 5:
        result = (!(v1Value || v2Value)) ? 'True' : 'False';
        break;
      default:
        break;
    }
  }
  
  document.getElementById('result').value = result;
}

// function changeColor(color) {
//     document.body.style.#result.background = color;
// }
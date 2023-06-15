function convert() {
    var radioButtons = document.getElementsByName('converter');
    var inputValue = document.getElementById('value').value;
    var result = document.getElementById('result');
  
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        if (radioButtons[i].value === 'temp') {
          var convertedValue = (inputValue - 32) * 5 / 9;
          result.textContent = "Converted Value: " + convertedValue.toFixed(2) + " °C";
        } else if (radioButtons[i].value === 'dist') {
          var convertedValue = inputValue * 0.621371;
          result.textContent = "Converted Value: " + convertedValue.toFixed(2) + " miles";
        } else if (radioButtons[i].value === 'length') {
          var convertedValue = inputValue * 3.28084;
          result.textContent = "Converted Value: " + convertedValue.toFixed(2) + " feet";
        }
      }
    }
  }
  
  function rollDice() {
  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;
  var sum = dice1 + dice2;

  var diceContainer = document.getElementById('dice');
  diceContainer.innerHTML = '';

  var dice1Image = document.createElement('img');
  dice1Image.src = `images/die${dice1}.png`;
  dice1Image.alt = `Dice ${dice1}`;

  var dice2Image = document.createElement('img');
  dice2Image.src = `images/die${dice2}.png`;
  dice2Image.alt = `Dice ${dice2}`;

  diceContainer.appendChild(dice1Image);
  diceContainer.appendChild(dice2Image);

  var result = document.getElementById('result');
  var rollButton = document.getElementById('rollButton');

  if (sum > 7) {
    result.textContent = "You win!";
    rollButton.disabled = true; 
  } else {
    result.textContent = "You lose!";
  }
}
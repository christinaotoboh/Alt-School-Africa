// script.js
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const historyList = document.getElementById('history-list');

let currentInput = '';
let history = [];

function updateDisplay(value) {
  display.textContent = value || '0';
}

function appendToHistory(expression, result) {
  const item = document.createElement('li');
  item.textContent = `${expression} = ${result}`;
  historyList.prepend(item);
}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const value = btn.textContent;

    if (btn.classList.contains('digit')) {
      currentInput += value;
    } else if (btn.classList.contains('operator')) {
      if (value === '×') currentInput += '*';
      else if (value === '÷') currentInput += '/';
      else if (value === '^') currentInput += '**';
      else currentInput += value;
    } else if (btn.classList.contains('clear')) {
      currentInput = '';
    } else if (btn.classList.contains('equals')) {
      try {
        const result = eval(currentInput);
        appendToHistory(currentInput, result);
        currentInput = result.toString();
      } catch (err) {
        currentInput = 'Error';
      }
    } else if (btn.classList.contains('backspace')) {
      currentInput = currentInput.slice(0, -1);
    }

    updateDisplay(currentInput);
  });
});

// Keyboard input
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if (!isNaN(key) || key === '.' || ['+', '-', '*', '/', '%'].includes(key)) {
    currentInput += key;
  } else if (key === 'Enter') {
    try {
      const result = eval(currentInput);
      appendToHistory(currentInput, result);
      currentInput = result.toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    currentInput = '';
  }

  updateDisplay(currentInput);
});

export const KEYS = [
  ['AC', '+/-', '%', '/'],
  ['7', '8', '9', 'x'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', /* ',', */ '='],
];

export const VALID_KEYS = [
  '0', '1', '2', '3', '4',
  '5', '6', '7', '8', '9',
  '+', '%', '/', 'x', 'Backspace',
  '*', '-', 'C', 'c'
];

export const OPERATIONS = {
  '+': (prevInput, currentInput) => prevInput + currentInput,
  '-': (prevInput, currentInput) => prevInput - currentInput,
  '/': (prevInput, currentInput) => prevInput / currentInput,
  'x': (prevInput, currentInput) => prevInput * currentInput,
  '*': (prevInput, currentInput) => prevInput * currentInput
}

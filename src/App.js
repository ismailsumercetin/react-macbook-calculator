import InputBar from "./InputBar";
import Keys from "./Keys";
import { useState } from 'react';
import { Calculator, Wrapper } from './style/styleCalculator';

function App() {
  const [inputState, setInputState] = useState({ prevInput: '0', finalInput: '', operator: '' });

  const handleKeyClick = (e) => {
    const pressedKey = e.target.innerText;
    const isNumber = !isNaN(parseInt(pressedKey));
    if (isNumber) {
      if (inputState.operator === '+/-' || inputState.operator === '%') {
        setDefaultState(pressedKey);
        return;
      }
      
      if (!inputState.finalInput && inputState.prevInput && (inputState.operator && inputState.operator !== '+/-' && inputState.operator !== '%')) {
        setInputState({ prevInput: pressedKey, finalInput: inputState.prevInput, operator: inputState.operator });
        return;
      }

      const handleFirstNum = inputState.prevInput === '0' ? pressedKey : inputState.prevInput + pressedKey;
      setInputState({ ...inputState, prevInput: handleFirstNum });
    } else {
      switch(pressedKey) {
        case 'AC':
        case 'C':
          setDefaultState();
          break;
        case '+/-':
          multiplyNegative();
          break;
        case '%':
          getPercent();
          break;
        case '+':
        case '-':
        case '/':
        case 'x':
          performOperation(pressedKey);
          break;
        default:
          return '';
      }
    }
  }

  const setDefaultState = (pressedKey = '0') => {
    setInputState({ prevInput: pressedKey, finalInput: '', operator: '' });
  }

  const multiplyNegative = () => {
    const multipliedNum = '' + (parseFloat(inputState.prevInput) * -1);
    setInputState({ prevInput: multipliedNum, operator: '+/-' });
  }

  const getPercent = () => {
    const percentNum = '' + (parseFloat(inputState.prevInput) /100);
    setInputState({ prevInput: percentNum, operator: '%' });
  }

  const setOperator = pressedKey => {
    setInputState({ ...inputState, operator: pressedKey });
  }

  const performOperation = pressedKey => {
    if (inputState.operator && inputState.finalInput && inputState.operator !== '+/-' && inputState.operator !== '%') {
      const currentInput = parseFloat(inputState.prevInput);
      const prevInput = parseFloat(inputState.finalInput);

      let calculatedVal;
      if(inputState.operator === '+') {
        calculatedVal = prevInput + currentInput;
      } else if(inputState.operator === '-') {
        calculatedVal = prevInput - currentInput;
      } else if(inputState.operator === '/') {
        calculatedVal = prevInput / currentInput;
      } else if(inputState.operator === 'x') {
        calculatedVal = prevInput * currentInput;
      }

      setInputState({ prevInput: '' + calculatedVal, finalInput: '', operator: pressedKey });
    } else {
      setOperator(pressedKey);
    }
  }

  return (
    <Wrapper>
      <InputBar {...inputState} />
      <Calculator>
        <Keys currentInput={inputState.prevInput} handleKeyClick={handleKeyClick} />
      </Calculator>
    </Wrapper>
  );
}

export default App;

import InputBar from "./InputBar";
import Keys from "./Keys";
import { useState, useEffect, useCallback } from 'react';
import { Calculator, Wrapper } from './style/styleCalculator';

function App() {
  const [inputState, setInputState] = useState({ prevInput: '0', finalInput: '', operator: '' });
  const VALID_KEYCODES = [8, 52, 53, 55, 88, 189];
  const OPERATIONS = {
    '+': (prevInput, currentInput) => prevInput + currentInput,
    '-': (prevInput, currentInput) => prevInput - currentInput,
    '/': (prevInput, currentInput) => prevInput / currentInput,
    'x': (prevInput, currentInput) => prevInput * currentInput
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyClick = useCallback((e) => {
    const pressedKey = getPressedKey(e);
    const isNumber = !isNaN(parseInt(pressedKey));
    if (isNumber) {
      if (inputState.operator === '+/-' || inputState.operator === '%') {
        setDefaultState(pressedKey);
        return;
      }
      
      // If any operator is selected and no finalInput, prevInput'll be final value
      if (!inputState.finalInput && inputState.prevInput && (inputState.operator && inputState.operator !== '+/-' && inputState.operator !== '%')) {
        setInputState({ prevInput: pressedKey, finalInput: inputState.prevInput, operator: inputState.operator });
        return;
      }

      setInputState({ ...inputState, prevInput: handleFirstNum(pressedKey) });
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
        case 'Backspace':
          deleteLast();
          break;
        default:
          return '';
      }
    }
  })

  const deleteLast = () => setInputState({ ...inputState, prevInput: inputState.prevInput.slice(0, -1).length === 0 ? '0' : inputState.prevInput.slice(0, -1)});

  // Check if number or any operator is pressed, get mouse clicks otherwise
  const getPressedKey = (e) => (e.keyCode >= 48 && e.keyCode <= 57) || (VALID_KEYCODES.indexOf(e.keyCode) >= 0) ? e.key : e.target.innerText;

  const setDefaultState = (pressedKey = '0') => setInputState({ prevInput: pressedKey, finalInput: '', operator: '' });

  const multiplyNegative = () => {
    const multipliedNum = '' + (parseFloat(inputState.prevInput) * -1);
    setInputState({ prevInput: multipliedNum, operator: '+/-' });
  }

  const getPercent = () => {
    const percentNum = '' + (parseFloat(inputState.prevInput) / 100);
    setInputState({ prevInput: percentNum, operator: '%' });
  }

  const setOperator = pressedKey => setInputState({ ...inputState, operator: pressedKey });

  const performOperation = pressedKey => {
    if (inputState.operator && inputState.finalInput && inputState.operator !== '+/-' && inputState.operator !== '%') {
      const calculatedVal = OPERATIONS[inputState.operator](parseFloat(inputState.finalInput), parseFloat(inputState.prevInput));

      setInputState({ prevInput: '' + calculatedVal, finalInput: '', operator: pressedKey });
    } else {
      setOperator(pressedKey);
    }
  }

  const handleFirstNum = pressedNum => inputState.prevInput === '0' ? pressedNum : inputState.prevInput + pressedNum;

  useEffect(() => {
    document.addEventListener('keydown', handleKeyClick);

    return () => {
      document.removeEventListener('keydown', handleKeyClick);
    };
  }, [handleKeyClick]);

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

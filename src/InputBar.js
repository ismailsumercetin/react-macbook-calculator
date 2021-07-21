import { useEffect, useRef, useState } from 'react';
import { InputContainer, Input } from './style/styleInput';

let operator;

export default function InputBar({ clickedKey }) {
    const inputRef = useRef();
    // const [inputState, setInputState] = useState({ currentInput: '', finalInput: '', operator: '' });

    const handleNumber = () => {
        if (inputRef.current.value !== '0' && (operator === '%' || operator === '+/-') && clickedKey) {
            operator = '';
            inputRef.current.value = clickedKey;
        } else if (inputRef.current.value === '0' && clickedKey) {
            inputRef.current.value = clickedKey;
        } else {
            inputRef.current.value += clickedKey;
        }
    };

    const handleOperator = () => {
        if(clickedKey && clickedKey === 'AC') inputRef.current.value = '0';

        if(clickedKey && clickedKey === '+/-') inputRef.current.value = -1 * parseFloat(inputRef.current.value);

        if(clickedKey && clickedKey === '%') inputRef.current.value /= 100;
    };

    const validateKey = () => {
        const isNumber = !isNaN(parseInt(clickedKey));
        switch(isNumber) {
            case true:
                handleNumber();
                break;
            case false:
                operator = clickedKey;
                handleOperator();
                break;
            default:
                return '';
        }
    };

    useEffect(() => {
        validateKey();
    });

    return (
        <InputContainer>
            <Input ref={inputRef} type='text' disabled/>
        </InputContainer>
    )
};

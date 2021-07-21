import { useEffect, useRef } from 'react';
import { InputContainer, Input } from './style/styleInput';

export default function InputBar({clickedKey}) {
    const inputRef = useRef();

    const validateKey = () => {
        const isNumber = !isNaN(parseInt(clickedKey));
        switch(isNumber) {
            case true:
                inputRef.current.value += clickedKey;
                break;
            case false:
                console.log(clickedKey);
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

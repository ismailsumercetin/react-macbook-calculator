import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const InputDiv = styled.div`
    display: flex;
    width: 243px;
    height: 60px;
    border: 1px solid black;
    border-radius: 5px 5px 0px 0px;
    border-bottom: none;
    text-align: right;
    justify-content: flex-end;
    align-items: center;
    & input {
        color: black;
    }
`;

const Input = styled.input`
    outline: none;
    border: none;
    background-color: white;
    width: 100%;
    font-size: 40px;
    text-align: right;
`;

export default function InputBar({clickedKey}) {
    const inputRef = useRef();

    const validateKey = () => {
        const isNumber = !isNaN(parseInt(clickedKey));
        switch(isNumber) {
            case true:
                inputRef.current.value += clickedKey;
                break;
            case false:
                switch(clickedKey) {
                    case 'AC':
                    case '+/-':
                    case '%':
                    case '/':
                    case 'x':
                    case '-':
                    case '+':
                    case '=':
                    case ',':
                        console.log(clickedKey);
                        break;
                    default:
                        return '';
                }
                break;
            default:
                return '';
        }
    };

    useEffect(() => {
        validateKey();
    });

    return (
        <InputDiv>
            <Input ref={inputRef} type='text' disabled/>
        </InputDiv>
    )
};

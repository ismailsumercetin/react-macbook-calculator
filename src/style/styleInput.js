import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    width: 243px;
    height: 60px;
    border-radius: 5px 5px 0px 0px;
    background: #012c2e;
    text-align: right;
    align-items: center;
    justify-content: center;
    & input {
        color: white;
    }
`;

export const Input = styled.input`
    font-family: Roboto;
    outline: none;
    border: none;
    background: #012c2e;
    width: 95%;
    font-size: 40px;
    text-align: right;
`;
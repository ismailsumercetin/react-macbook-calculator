import { InputContainer, Input } from './style/styleInput';

export default function InputBar({ prevInput }) {
    return (
        <InputContainer>
            <Input value={prevInput} type='text' disabled />
        </InputContainer>
    )
};
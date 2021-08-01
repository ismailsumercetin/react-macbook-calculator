import { Row } from './style/styleRow';
import { useEffect, useRef } from 'react';

const KEYS = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
];

export default function Keys({ handleKeyClick, currentInput }) {
    const keyRef = useRef();
    const template_id = 'id_';
    
    useEffect(() => currentInput !== '0' ? keyRef.current.innerText = 'C' : keyRef.current.innerText = 'AC');

    const renderKeys = () => {
        let i = 0;
        return KEYS.map(keyArr => {
            const keys = keyArr.map(key => {
                i++;
                const attr = {
                    id: template_id+i,
                    className: 'key',
                };

                if (i === 1) attr.ref = keyRef;

                return (<div {...attr} onClick={(e) => handleKeyClick(e)}>{key}</div>);
            });

            return (<Row>{keys}</Row>);
        });
    }

    return (
        <>{renderKeys()}</>
    );
};
import { Row } from './style/styleRow';
import { useEffect, useRef } from 'react';
import { KEYS } from './constants';

export default function Keys({ currentOperator, currentInput, handleKeyClick }) {
    const keyRef = useRef();
    const template_id = 'id_';

    useEffect(() => currentInput !== '0' ? keyRef.current.innerText = 'C' : keyRef.current.innerText = 'AC');

    const KeyList = () => {
        let i = 0;
        return KEYS.map(keyArr => {
            const keys = keyArr.map(key => {
                i++;
                const attr = {
                    id: template_id+i,
                    className: 'key',
                    val: key
                };

                if (i === 1) attr.ref = keyRef;

                return (<div {...attr} onClick={(e) => handleKeyClick(e)}>{key}</div>);
            });

            return (<Row currentOperator={currentOperator}>{keys}</Row>);
        });
    }

    return <KeyList />;
};
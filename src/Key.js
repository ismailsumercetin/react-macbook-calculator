import styled from 'styled-components';

const KEYS = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
];

const Row = styled.div`
    display: flex;
    font-size: 30px;
    & .key {
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
        width: 60px;
        height: 60px;
    }
    &:last-child {
        justify-content: flex-end;
    }
    & #id_17 {
        flex-grow: 2;
    }
`;

function Key() {
    let i = 0;
    let template_id = 'id_';
    const renderKeys = () => {
        return KEYS.map(keyArr => {
            const keys = keyArr.map(key => <div id={template_id+(++i)} class='key'>{key}</div>)
            return (<Row>{keys}</Row>);
        })
    }

    return (
        <>
            {renderKeys()}
        </>
    );
};

export default Key;
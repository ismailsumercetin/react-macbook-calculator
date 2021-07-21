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
        border-right: none;
        border-bottom: none;
        width: 60px;
        height: 60px;
        &:last-child {
            border-right: 1px solid black;
        }
    }
    &:last-child {
        justify-content: flex-end;
        border-bottom: 1px solid black;
    }
    & #id_17 {
        flex-grow: 2;
    }
`;

export default function Keys({handleKeyClick}) {
    const template_id = 'id_';
    
    const Box = props => (<div 
        id={template_id+(props.index)} 
        className='key'
        onClick={(e) => handleKeyClick(e)}>{props.propKey}</div>);
    

    const renderKeys = () => {
        let i = 0;
        return KEYS.map(keyArr => {
            const keys = keyArr.map(key => {
                i++;
                return <Box propKey={key} index={i} />;
            });
            return (<Row>{keys}</Row>);
        });
    }

    return (
        <>
            {renderKeys()}
        </>
    );
};
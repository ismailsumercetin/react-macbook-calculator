import { Row } from './style/styleRow';

const KEYS = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', ',', '='],
];

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
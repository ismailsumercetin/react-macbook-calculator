import InputBar from "./InputBar";
import Keys from "./Keys";
import { useState } from 'react';
import { Calculator, Wrapper } from './style/styleCalculator';

function App() {
  const [clickedKey, setClickedKey] = useState({ num: '0', id: '' });

  const handleKeyClick = (e) => {
    const num = e.target.innerText;
    const id = e.target.id;
    setClickedKey({ num, id });
  }

  return (
    <Wrapper>
      <InputBar clickedKey={clickedKey.num} />
      <Calculator>
        <Keys handleKeyClick={handleKeyClick} />
      </Calculator>
    </Wrapper>
  );
}

export default App;

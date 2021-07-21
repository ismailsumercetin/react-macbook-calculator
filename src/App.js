import styled from "styled-components";
import InputBar from "./InputBar";
import Keys from "./Keys";
import { useState } from 'react';

const Calculator = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  const [clickedKey, setClickedKey] = useState({ num: '', id: '' });

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

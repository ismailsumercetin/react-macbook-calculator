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

  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
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

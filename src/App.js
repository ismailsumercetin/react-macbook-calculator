import styled from "styled-components";
import Key from "./Key";

const Calculator = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto', sans-serif;
`;

function App() {
  return (
    <Wrapper>
      <Calculator>
        <Key />
      </Calculator>
    </Wrapper>
  );
}

export default App;

import styled from "styled-components";
import Keys from "./Keys";

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
        <Keys />
      </Calculator>
    </Wrapper>
  );
}

export default App;

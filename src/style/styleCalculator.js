import styled from 'styled-components';

export const Calculator = styled.div`
  display: inline-flex;
  flex-direction: column;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  -webkit-box-shadow: -11px 11px 32px 13px rgba(0,0,0,0.3); 
  box-shadow: -11px 11px 32px 13px rgba(0,0,0,0.3);
`;

export const Wrapper = styled.div`
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
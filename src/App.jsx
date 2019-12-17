import React from 'react';
import styled from 'styled-components';
import Homepage from './views/Homepage';

const StyledApp = styled.div`
  h2 {
    font-size: 22px;
    margin: 0 0 10px 0;
  }

  .underTitle {
    color: rgba(51, 51, 51, 0.6)
  }
`

function App() {
  return (
    <StyledApp className="App">
      <Homepage />
    </StyledApp>
  );
}

export default App;

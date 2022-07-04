import AccountBox from "./components/signBox/AccountBox"
import styled from "styled-components";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  margin-top:10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
function App() {
  return(
  <AppContainer>
    <AccountBox/>
    </AppContainer>
  )
  
}

export default App;

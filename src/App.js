import "./App.css";
import styled from "styled-components";
import Home from "./pages/Home";


function App() {
  return (
    <AppContainer className="App">
      <Home />
    </AppContainer>
  );
}

export default App;

// Style

const AppContainer = styled.div`
 background: linear-gradient(217deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

`
import { useSelector } from "react-redux";
import styled from "styled-components";
import RegionDescription from "./regionDescription";

const CovidDataResult = () => {
  //State Redux
  const list = useSelector((state) => state.data.list);
  const status = useSelector((state) => state.data.status);
  const region = useSelector((state) => state.region.region);

  const data = () => {
    if (!list && !status) {
      return (
        <Container>
          <h3>Clicca su una Regione per gli aggiornamenti sul Covid19</h3>
        </Container>
      );
    }
    if (status === "loading") {
      return (
        <Container>
          <h3>Clicca su una Regione per gli aggiornamenti sul Covid19</h3>
          <h1>Loading</h1>
        </Container>
      );
    }
    if (status === "success") {
      const filtrato = list.filter((el) =>
        el.denominazione_regione.includes(region)
      );
      if (filtrato[0] !== undefined) {
        return <RegionDescription region={filtrato[0]} />;
      }
    }
    if (status === "failed") {
      return (
        <Container>
          <h3>Clicca su una Regione per gli aggiornamenti sul Covid19</h3>
          <p>Errore connessione Internet, connettiti e riprova</p>
        </Container>
      );
    }
  };

  return <div>{data()}</div>;
};

export default CovidDataResult;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 600px;
  background-color: white;
  border-radius: 8px;
  padding: 10px;
  margin: 10px;
  @media (min-width: 300px) {
    width: 310px;
    height: 200px;
  }
  @media (min-width: 641px) {
    width: 360px;
  }
  @media (min-width: 961px) {
    width: 500px;
    height: 600px;
  }
`;

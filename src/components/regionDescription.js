import styled from "styled-components";

const RegionDescription = ({ region }) => {
  //props data da CovidDataResult
  const {
    denominazione_regione,
    ingressi_terapia_intensiva,
    nuovi_positivi,
    isolamento_domiciliare,
    ricoverati_con_sintomi,
    totale_positivi,
    deceduti,
    data,
  } = region;

  return (
    <Container>
      <h3>Clicca su una Regione per gli aggiornamenti sul Covid19</h3>
      <h3>{data.slice(0, 10)}</h3>
      <Title>{denominazione_regione}</Title>
      <ContainerData>
        <ItemContainer>
          <DescriptionData>Terapia Intensiva</DescriptionData>
          <NumberData>+{ingressi_terapia_intensiva}</NumberData>
        </ItemContainer>
        <ItemContainer>
          <DescriptionData>Nuovi Positivi</DescriptionData>
          <NumberData>+{nuovi_positivi}</NumberData>
        </ItemContainer>
        <ItemContainer>
          <DescriptionData>Ricoverati</DescriptionData>
          <NumberData>{ricoverati_con_sintomi}</NumberData>
        </ItemContainer>
        <ItemContainer>
          <DescriptionData>Isolamento Domiciliare</DescriptionData>
          <NumberData>{isolamento_domiciliare}</NumberData>
        </ItemContainer>
        <ItemContainer>
          <DescriptionData>Totale Positivi</DescriptionData>
          <NumberData>{totale_positivi}</NumberData>
        </ItemContainer>
        <ItemContainer>
          <DescriptionData>Deceduti</DescriptionData>
          <NumberData>{deceduti}</NumberData>
        </ItemContainer>
      </ContainerData>
    </Container>
  );
};

export default RegionDescription;

const Container = styled.div`
  box-shadow: 7px 7px 3px #dedede;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  @media (min-width: 300px) {
    width: 310px;
    height: auto;
  }
  @media (min-width: 641px) {
    width: 390px;
  }
  @media (min-width: 961px) {
    width: 500px;
    height: 650px;
  }
`;
const ContainerData = styled.div`
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 5px;
  margin: 3px;
  padding: 10px;
  width: 150px;
  height: 100px;
  background-color: #d1d1d1;
`;
const Title = styled.h1`
  color: #648dae;
`;
const NumberData = styled.p`
  font-size: 20px;
  font-weight: bold;
`;
const DescriptionData = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

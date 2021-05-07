import CovidDataResult from "../components/CovidDataResult";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MapItaly from "../components/MapItaly";
import styled from "styled-components";
import "./style.css";
import { useEffect, useState } from "react";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
const Home = () => {
  const [open, setOpen] = useState(false);
  const alertOpen = () => {
    setOpen(true);
  };
  // funzione per chiudere messaggio di benvenuto
  const handleClose = () => {
    setOpen(false);
  };
  // mostare messaggio di benvenuto al render della pagina
  useEffect(() => {
    alertOpen();
  }, []);
  return (
    <div>
      <NavBar />
      <Container>
        <MapItaly />
        <CovidDataResult />
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity="info">
            Benvenuto/a clicca su una regione
          </Alert>
        </Snackbar>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

const Container = styled.div`
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
  }
`;

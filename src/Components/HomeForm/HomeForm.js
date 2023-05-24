import { useState } from "react";
import imageAvion from "../../assets/avion.webp";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  ButtonGroup,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";

import ModalDestinos from "./ModalDestinos";
const HomeForm = () => {
  const [value, setValue] = useState(null);
  const [dataPiker, setDataPiker] = useState(null);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);

  const handleOpenModal1 = () => {
    setModal1Open(true);
  };

  const handleCloseModal1 = () => {
    setModal1Open(false);
  };

  const handleOpenModal2 = () => {
    setModal2Open(true);
  };

  const handleCloseModal2 = () => {
    setModal2Open(false);
  };
  const handleOpenModal3 = () => {
    setModal3Open(true);
  };

  const handleCloseModal3 = () => {
    setModal3Open(false);
  };

  return (
    <section>
      <Figure></Figure>
      <Formulario>
        <Container maxWidth="sm">
          <Grid
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeigtht: "100vh" }}
          ></Grid>
          <Grid item>
            <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
              <Typography variant="h4">
                Busca un nuevo destino y comienza la aventura
              </Typography>
              <Typography variant="h6">
                Descubre vuelos al mejor precio y perfectos para cualquier lugar
              </Typography>

              <Box component="form">
                <TextField
                  onClick={handleOpenModal1}
                  label="Origen"
                  sx={{ m: 1, width: "25ch" }}
                />
                <ModalDestinos
                  open={modal1Open}
                  onClose={handleCloseModal1}
                  title="¿Dónde te encuentras?"
                  content="Contenido de la Ventana Modal 1"
                  buttonText="Cerrar Modal 1"
                />

                <TextField
                  onClick={handleOpenModal2}
                  label="Destino"
                  sx={{ m: 1, width: "25ch" }}
                />
                <ModalDestinos
                  open={modal2Open}
                  onClose={handleCloseModal2}
                  title=""
                  content="¿A dónde viajas?"
                  buttonText="Cerrar Modal 2"
                />
                <Labels>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Salida"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </LocalizationProvider>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label="Regreso"
                      value={dataPiker}
                      onChange={(newValue) => setDataPiker(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </LocalizationProvider>
                </Labels>
                <TextField
                  onClick={handleOpenModal3}
                  label="Pasajeros"
                  sx={{ m: 1, width: "25ch" }}
                />
                <ModalDestinos
                  open={modal3Open}
                  onClose={handleCloseModal3}
                  title="Título de la Ventana Modal 3"
                  content="Contenido de la Ventana Modal 3"
                  buttonText="Cerrar Modal 3"
                />

                <TextField
                  label="¿Tienes algun codigo de promocion?"
                  sx={{ m: 1, width: "30ch" }}
                />
                <StyledButton>
                  <Button fullWidth type="submit">
                    Buscar vuelos
                  </Button>
                </StyledButton>
              </Box>
            </Paper>
          </Grid>
        </Container>
      </Formulario>
    </section>
  );
};

export default HomeForm;

const StyledButton = styled.div`
  background-color: #80206a;
  border-radius: 25px;
`;

const Labels = styled.div`
  margin-top: 5px;
  width: 80%;
  display: flex;
  justify-content: space-around;
`;
const Figure = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${imageAvion});
  min-height: 100px;
  min-width: 100px;
  width: 100vh;
  height: 80vh;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  margin-left: 250px;
 
`;

const Formulario = styled.section`
  position: absolute;
  margin-top: -460px;
  margin-left: 50px;
`;

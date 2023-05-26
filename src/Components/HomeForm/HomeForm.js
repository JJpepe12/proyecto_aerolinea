import { useState } from "react";
import imageAvion from "../../assets/avion.webp";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import styled from "styled-components";
import PlaneIcon from "../../assets/icons/plane.svg";
import Search from "../../assets/icons/search.svg";
import ModalDestinos from "./ModalDestinos";
import axios from "axios";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  Icon,
  ButtonGroup,
} from "@mui/material";

const HomeForm = () => {
  const [value, setValue] = useState(null);
  const [dataPiker, setDataPiker] = useState(null);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [searchOrigen, setSearchOrigen] = useState("");
  const [searchDestino, setSearchDestino] = useState("");
  const [dataVuelosOrigen, setDataVuelosOrigen] = useState([]);
  const handleSearchOrigen = async (event) => {
    setSearchOrigen(event.target.value);
    console.log(searchOrigen);
    const response = await axios.get("http://localhost:3004/flights");
    console.log(response.data);
    const filterVuelos = response.data.filter((flight) =>
      flight.departure.airport
        .toLowerCase()
        .includes(searchOrigen.toLowerCase())
    );
    console.log(filterVuelos);
    setDataVuelosOrigen(dataVuelosOrigen);
  };

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
            <Paper sx={{ padding: "1em", borderRadius: "0.5em" }}>
              <Typography variant="h4" margin="10px">
                Busca un nuevo destino y comienza la aventura
              </Typography>
              <Typography variant="h6" margin="10px">
                Descubre vuelos al mejor precio y perfectos para cualquier lugar
              </Typography>
              <Viajes>
                <Box
                  border={1}
                  borderColor="gray"
                  p={0}
                  width={270}
                  height={30}
                  color="white"
                  borderRadius={2}
                >
                  <Button
                    color="primary"
                    sx={{
                      "&:hover": {
                        backgroundColor: "#80206a",
                        color: "white",
                      },
                      height: "30px",
                    }}
                  >
                    <TextDecorationButton>Viaje redondo</TextDecorationButton>
                  </Button>
                  <Button
                    color="secondary"
                    sx={{
                      "&:hover": {
                        backgroundColor: " #80206a",
                        color: "white",
                      },
                      height: "30px",
                    }}
                  >
                    <TextDecorationButton>Viaje sencillo</TextDecorationButton>
                  </Button>
                </Box>
              </Viajes>
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
                  content={
                    <>
                      <TextField
                        fullWidth
                        sx={{ mb: 2 }}
                        InputProps={{
                          startAdornment: (
                            <Icon>
                              <img src={Search} alt="Search Icon" />
                            </Icon>
                          ),
                        }}
                        value={searchOrigen}
                        onChange={handleSearchOrigen}
                        
                      />

                      <div>
                        {dataVuelosOrigen.length ? (
                          dataVuelosOrigen.map((item, index) => (
                            <span key={index}>{item.departure.airport}</span>
                          ))
                        ) : (
                          <span>sin coincidencias</span>
                        )}
                      </div>
                    </>
                  }
                />

                <TextField
                  onClick={handleOpenModal2}
                  label="Destino"
                  sx={{ m: 1, width: "25ch" }}
                />
                <ModalDestinos
                  open={modal2Open}
                  onClose={handleCloseModal2}
                  title="¿A dónde viajas?"
                  content={
                    <>
                      <TextField
                        fullWidth
                        sx={{ mb: 2 }}
                        InputProps={{
                          startAdornment: (
                            <Icon>
                              <img src={Search} alt="Search Icon" />
                            </Icon>
                          ),
                        }}
                        value={searchDestino}
                        onChange={handleSearchOrigen}
                      />

                      <div>
                        {dataVuelosOrigen.length ? (
                          dataVuelosOrigen.map((item, index) => (
                            <span key={index}>{item.departure.airport}</span>
                          ))
                        ) : (
                          <span>sin coincidencias</span>
                        )}
                      </div>
                    </>
                  }
                />
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box
                    sx={{ display: "flex", m: 0.5, width: "53ch", gap: "25px" }}
                  >
                    <DatePicker
                      label="Salida"
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                    <DatePicker
                      label="Regreso"
                      value={dataPiker}
                      onChange={(newValue) => setDataPiker(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </Box>
                </LocalizationProvider>
                <TextField
                  onClick={handleOpenModal3}
                  label="Pasajeros"
                  sx={{ m: 1, width: "25ch" }}
                />
                <ModalDestinos
                  open={modal3Open}
                  onClose={handleCloseModal3}
                  content={
                    <CantidadPasajeros>
                      <>
                       
                          <p>Adultos (13 + años)</p>
                         
                          <p>Niños (2 - 12 años)</p>
                          
                          <p>Bebes (5 - 28 meses)</p>
                         
                        
                      </>
                      <Pasajeros>
                        <ButtonGroup
                        color="secondary" aria-label="medium secondary button group"
                        >
                          <Adultos>
                            <Button>-</Button>
                            <Button>0</Button>
                            <Button>+</Button>
                          </Adultos>
                        </ButtonGroup>
                        <ButtonGroup
                          color="secondary" aria-label="medium secondary button group"
                        >
                          <Niños>
                            <Button>-</Button>
                            <Button>0</Button>
                            <Button>+</Button>
                          </Niños>
                        </ButtonGroup>
                        <ButtonGroup
                         color="secondary" aria-label="medium secondary button group"
                        >
                          <Bebes>
                            <Button>-</Button>
                            <Button>0</Button>
                            <Button>+</Button>
                          </Bebes>
                        </ButtonGroup>
                      </Pasajeros>
                    </CantidadPasajeros>
                  }
                />
                <TextField
                  label="¿Tienes algun codigo de promocion?"
                  sx={{ m: 1, width: "25ch" }}
                />
                <StyledButton>
                  <Button
                    fullWidth
                    type="submit"
                    startIcon={
                      <img
                        src={PlaneIcon}
                        alt="Plane Icon"
                        style={{ color: "blue" }}
                      />
                    }
                  >
                    <TextDecoration>Buscar vuelos</TextDecoration>
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
  width: 28rem;
  color: white;
`;

const Figure = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${imageAvion});
  min-height: 300px;
  min-width: 300px;
  width: 890px;
  height: 85vh;
  background-position: center;
  background-size: cover;
  border-radius: 30px;
  margin-left: 350px;
  margin-top: 70px;
`;

const Formulario = styled.section`
  position: absolute;
  margin-top: -535px;
  margin-left: 150px;
  width: 33rem;
`;

const Viajes = styled.div`
  margin-left: 11px;
`;
const TextDecoration = styled.div`
  color: white;
`;
const TextDecorationButton = styled.div`
  color: black;
`;
const Pasajeros = styled.div`
  flex-direction: column;
  display: flex;
  margin-left: 250px;
  margin-top: -150px;

`;
const Adultos = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  padding: 0;
`;
const Niños = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;
const Bebes = styled.div`
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
`;
const CantidadPasajeros = styled.p`
  white-space: pre;
 
::after {
  
  white-space: pre;
  
}
`;


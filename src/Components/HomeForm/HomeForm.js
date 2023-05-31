import { useState, useContext } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import PlaneIcon from "../../assets/icons/plane.svg";
import Search from "../../assets/icons/search.svg";
import ModalDestinos from "./ModalDestinos";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import { MyFormularioContext } from '../../pages/selectedFlights/FormularioContext';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Typography,
  Icon,
  ButtonGroup,
  // FormControl,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { StyledButton, Figure, Formulario, Viajes, TextDecorationButton, Pasajeros, Adultos, Niños, Bebes, TextDecoration  } from "./StyleHomeForm";
import Swal from 'sweetalert2';

const validationSchema = Yup.object().shape({
  origen: Yup.string().required("Este campo es obligatorio"),
  destino: Yup.string().required("Este campo es obligatorio"),
  salida: Yup.date().required("La fecha de salida es obligatoria"),
  regreso: Yup.date().required("La fecha de regreso es obligatoria"),
  pasajeros: Yup.string().required("Este campo es obligatorio"),
});
const HomeForm = () => {
 const [salida, setSalida] = useState(null);
  const [regreso, setRegreso] = useState(null);
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  const [modal3Open, setModal3Open] = useState(false);
  const [contadorNiños, setContadorNiños] = useState(0);
   const [contadorAdultos, setContadorAdultos] = useState(0);
 const [contadorBebes, setContadorBebes] = useState(0);
   const [searchOrigen, setSearchOrigen] = useState("");
  const [dataVuelosOrigen, setDataVuelosOrigen] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
   const [searchDestino, setSearchDestino] = useState("");
  const [dataVuelosDestino, setDataVuelosDestino] = useState([]);

  const handleSalidaChange = (date) => {
    setSalida(date);
  };

  const handleRegresoChange = (date) => {
    setRegreso(date);
  };

  const handleSearchOrigen = async (event) => {
    setSearchOrigen(event.target.value);
    console.log(searchOrigen);
    const response = await axios.get("http://localhost:3000/flights");
    console.log(response.data);
    const filterVuelos = response.data.filter((flight) =>
      flight.departure.airport
        .toLowerCase()
        .includes(searchOrigen.toLowerCase())
    );
    console.log(filterVuelos);
    setDataVuelosOrigen(filterVuelos);
  };
  const handleOptionClick = (option) => {
    // setSelectedValue(option);
    setDataVuelosOrigen([]);
    updateSearchInputValue(option);
  };

  const updateSearchInputValue = (value) => {
    setSearchOrigen(value);
  };
  const handleSearchDestino = async (event) => {
    setSearchDestino(event.target.value);
    console.log(searchDestino);
    const response = await axios.get("http://localhost:3000/flights");
    console.log(response.data);
    const filterVuelosDestinos = response.data.filter((flight) =>
      flight.arrival.airport.toLowerCase().includes(searchDestino.toLowerCase())
    );
    console.log(filterVuelosDestinos);
    setDataVuelosDestino(filterVuelosDestinos);
  };
  const handleOptionDestinoClick = (option) => {
    // setSelectedValue(option);
    setDataVuelosDestino([]);
    updateSearchInputValueDestino(option);
  };
  const updateSearchInputValueDestino = (value) => {
    setSearchDestino(value);
  };



  const sumarContador = (cantidad, tipo) => {
    switch (tipo) {
      case "niños":
        setContadorNiños(contadorNiños + cantidad);
        break;
      case "adultos":
        setContadorAdultos(contadorAdultos + cantidad);
        break;
      case "bebes":
        setContadorBebes(contadorBebes + cantidad);
        break;
      default:
        break;
    }
  };

  const restarContador = (cantidad, tipo) => {
    switch (tipo) {
      case "adultos":
        if (contadorAdultos > 0) {
          setContadorAdultos(contadorAdultos - cantidad);
        }
        break;
      case "niños":
        if (contadorNiños > 0) {
          setContadorNiños(contadorNiños - cantidad);
        }
        break;

      case "bebes":
        if (contadorBebes > 0) {
          setContadorBebes(contadorBebes - cantidad);
        }
        break;
      default:
        break;
    }
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
  const [optionDisabled, setOptionDisabled] = useState(false);

  const handleDisableOption = () => {
    setOptionDisabled(true);
  };

  const handleEnableOption = () => {
    setOptionDisabled(false);
  };

 
  const { actualizarValores } = useContext(MyFormularioContext);
  const navigate = useNavigate();

 
  const handleSubmit = () => {
    // Obtener los valores de cada componente
    const origen = searchOrigen;
    const destino = searchDestino;
    const salida = setSalida;
    const regreso = setRegreso;
    const niños = contadorNiños;
    const adultos = contadorAdultos;
    const bebes = contadorBebes;
   
  
    // Realizar alguna acción con los valores obtenidos, como enviarlos a un servidor o imprimirlos en la consola
    console.log("Origen:", origen);
    console.log("Destino:", destino);
    console.log("Salida:", salida);
    console.log("Regreso:", regreso);
    console.log("Niños:", niños);
    console.log("Adultos:", adultos);
    console.log("Bebes:", bebes);

    if (origen && destino && salida && regreso && (niños || adultos || bebes)) {
      Swal.fire(
        'Perfecto!',
        'En la siguiente pagina te mostraremos toda la informacion del vuelo que seleccionaste!',
        'success'
      )
      // Redireccionar a otra página con los datos
      navigate('/proyecto_aerolinea/flights', {
        state: {
          origen,
          destino,
          salida,
          regreso,
          niños,
          adultos,
          bebes,
        },
       
      });
    } else {
      // Mostrar un mensaje de error o realizar alguna acción en caso de que los campos requeridos no estén llenos
      Swal.fire(
        'Oops!',
        'No has completado todos los datos!',
        'error'
      )
    }
   
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
            sx={{ minHeighth: "100vh" }}
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
                  width={260}
                  height={30}
                  color="white"
                  borderRadius={2}
                >
                  <Button
                    onClick={handleEnableOption}
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
                    onClick={handleDisableOption}
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

              <Formik
                initialValues={{
                  origen: "",
                  destino: "",
                  salida: null,
                  regreso: null,
                  pasajeros: "",
                }}
                validationSchema={validationSchema}
              //  onSubmit={handleSubmit}
              >
                
                <Form >
                  <Box display="flex" flexDirection="row">
                    <Box mr={1}>
                      <Field name="origen">
                        {({ field, form }) => (
                          <>
                            <TextField
                              {...field}
                              onClick={handleOpenModal1}
                              label="Origen"
                              sx={{ m: 1, width: "25ch" }}
                              value={searchOrigen}
                              onChange={(event) => {
                                setSearchOrigen(event.target.value);
                              }}
                              onFocus={() => form.setFieldError(field.name, '')} // Agrega esta línea
                            />
                            <ErrorMessage name="origen" component="div" />
                          </>
                        )}
                      </Field>
                    </Box>

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
                                <li>
                                  <ul
                                    key={index}
                                    onClick={() =>
                                      handleOptionClick(item.departure.airport)
                                    }
                                  >
                                    {item.departure.airport}
                                  </ul>
                                </li>
                              ))
                            ) : (
                              <span>sin coincidencias</span>
                            )}
                          </div>
                        </>
                      }
                    />
                    <Box mr={1}>
                      <Field name="destino">
                        {({ field, form }) => (
                          <>
                            <TextField
                              {...field}
                              onClick={handleOpenModal2}
                              label="Destino"
                              sx={{ m: 1, width: "25ch" }}
                              value={searchDestino}
                              onChange={(event) => {
                                setSearchDestino(event.target.value);
                            
                              }}
                               onFocus={() => form.setFieldError(field.name, '')} // Agrega esta línea
                            />
                            <ErrorMessage name="destino" component="div" />
                          </>
                        )}
                      </Field>
                    </Box>
                  </Box>
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
                          onChange={handleSearchDestino}
                        />

                        <div>
                          {dataVuelosDestino.length ? (
                            dataVuelosDestino.map((item, index) => (
                              <li>
                                <ul
                                  key={index}
                                  onClick={() =>
                                    handleOptionDestinoClick(
                                      item.arrival.airport
                                    )
                                  }
                                >
                                  {item.arrival.airport}
                                </ul>
                              </li>
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
                      sx={{
                        display: "flex",
                        m: 1,
                        width: "53ch",
                        gap: "25px",
                      }}
                    >
                      <Box>
                        <Field name="salida">
                          {({ field, form }) => (
                            <>
                              <DatePicker
                                {...field}
                                label="Salida"
                                value={salida ? new Date(salida) : null}
                                // selected={salida}
                                onChange={(date) => {
                                  form.setFieldValue(field.name, date);
                                  handleSalidaChange(date);
                                  // Actualiza el valor del campo en Formik
                                }}
                                renderInput={(props) => (
                                  <TextField {...props} />
                                )}
                              />
                              <ErrorMessage name="salida" component="div" />
   
                            </>
                          )}
                        </Field>
                      </Box>
                      <Box>
                        <Field name="regreso">
                          {({ field, form }) => (
                            <>
                              <DatePicker
                                {...field}
                                disabled={optionDisabled}
                                label="Regreso"
                                value={regreso ? new Date(regreso) : null}
                                selected={salida}
                                onChange={(date) => {
                                  form.setFieldValue(field.name,date); 
                                  handleRegresoChange(date);
                                  // Actualiza el valor del campo en Formik
                                }}
                                renderInput={(props) => (
                                  <TextField {...props} />
                                )}
                              />
                              {optionDisabled
                                ? null
                                : form.errors.regreso &&
                                  form.touched.regreso && (
                                    <div>{form.errors.regreso}</div>
                                  )}
                            </>
                          )}
                        </Field>
                      </Box>
                    </Box>
                  </LocalizationProvider>

                  <Field
                    component={TextField}
                    onClick={handleOpenModal3}
                    label="Pasajeros"
                    sx={{ m: 1, width: "25ch", }}
                    value={`Adultos: ${contadorNiños} | Niños: ${contadorAdultos} | Bebés: ${contadorBebes}`}
                    name="pasajeros"
                  />
                  <ModalDestinos
                    open={modal3Open}
                    onClose={handleCloseModal3}
                    content={
                      <Pasajeros>
                        <ButtonGroup
                          color="secondary"
                          aria-label="medium secondary button group"
                        >
                          <Adultos>
                            <Button onClick={() => restarContador(1, "niños")}>
                              -
                            </Button>
                            <Button disabled>{contadorNiños}</Button>
                            <Button onClick={() => sumarContador(1, "niños")}>
                              +
                            </Button>
                          </Adultos>
                          <span class="centered-text">Adultos (13 + años)</span>
                        </ButtonGroup>
                        <ButtonGroup
                          color="secondary"
                          aria-label="medium secondary button group"
                        >
                          <Niños>
                            <Button
                              onClick={() => restarContador(1, "adultos")}
                            >
                              -
                            </Button>
                            <Button disabled>{contadorAdultos}</Button>
                            <Button onClick={() => sumarContador(1, "adultos")}>
                              +
                            </Button>
                          </Niños>
                          <span class="centered-text">Niños (2 - 12 años){" "}</span>
                        </ButtonGroup>
                        <ButtonGroup
                          color="secondary"
                          aria-label="medium secondary button group"
                        >
                          <Bebes>
                            <Button onClick={() => restarContador(1, "bebes")}>
                              -
                            </Button>
                            <Button disabled>{contadorBebes}</Button>
                            <Button onClick={() => sumarContador(1, "bebes")}>
                              +
                            </Button>
                          </Bebes>
                          <span class="centered-text">Bebés (0 - 23 meses){" "}</span>
                        </ButtonGroup>
                      </Pasajeros>
                    }
                  />
                  <TextField
                    label ="¿Tienes algún código promocional?"
                    sx={{ my: 1, mx: 2, width: "25ch", 
                    '& .MuiInputLabel-root': { fontSize: '14px' } }}
                  />
                  <StyledButton>
                    <Button
                      fullWidth
                      type="submit"
                      onClick={handleSubmit}
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
                </Form>
              </Formik>
            </Paper>
          </Grid>
        </Container>
      </Formulario>
    </section>
  );
};

export default HomeForm;


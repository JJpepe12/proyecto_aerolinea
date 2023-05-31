import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
    Date,
    Title,
    Marks,
    Button,
    Heading,
    Text,
    Column,
    Column2,
    Row,
    SeatSelect,
} from "./StylesSeatsDeparture";

const DepartureSeats = () => {
    const navigate = useNavigate();

    const [selectedSeat, setSelectedSeat] = useState("");

    const handleSeatSelection = (seat) => {
        setSelectedSeat(seat);
        console.log(`La silla seleccionada fue la: ${seat}`);
    };

    return (
        <>
            <Date>
                <Title>
                    <h1>Vuelo de salida</h1>
                    <button className="btn__change" onClick={() => navigate('/proyecto_aerolinea')}>Cambiar vuelo</button>
                </Title>
                <h2>Martes 30 nov 2021</h2>
                <h4>Cd. Mex (AICM) a Culiacán </h4>
                <p>Selecciona tus asientos</p>
            </Date>

            <Heading>
            <Column>
                <Row>
                <Marks>A</Marks>
                <Marks>B</Marks>
                <Marks>C</Marks>
                </Row>
            </Column>
            <Column>
                <Marks id="void"></Marks>
            </Column>
            <Column>
                <Row>
                <Marks>D</Marks>
                <Marks>E</Marks>
                <Marks>F</Marks>
                </Row>
            </Column>
            </Heading>
            <Text>
            <h5>Salida Segura</h5>
            </Text>
            
            <SeatSelect>
            <Column>
                    <Row>
                        <Button onClick={() => handleSeatSelection("1A")}>1A</Button>
                        <Button onClick={() => handleSeatSelection("1B")}>1B</Button>
                        <Button onClick={() => handleSeatSelection("1C")}>1C</Button>
                    </Row>
                    <Row>
                        <Button onClick={() => handleSeatSelection("2A")}>2A</Button>
                        <Button onClick={() => handleSeatSelection("2B")}>2B</Button>
                        <Button onClick={() => handleSeatSelection("2C")}>2C</Button>
                    </Row>
                    <Row>
                        <Button onClick={() => handleSeatSelection("3A")}>3A</Button>
                        <Button onClick={() => handleSeatSelection("3B")}>3B</Button>
                        <Button onClick={() => handleSeatSelection("3C")}>3C</Button>
                    </Row>
                <Row>
                <Button className="occupied">4A</Button>
                <Button className="occupied">4B</Button>
                <Button onClick={() => handleSeatSelection("4C")}>4C</Button>
                </Row>
                <Row>
                <Button>5A</Button>
                <Button>5B</Button>
                <Button>5C</Button>
                </Row>
            </Column>
            <Column2>
                <Marks>1</Marks>
                <Marks>2</Marks>
                <Marks>3</Marks>
                <Marks>4</Marks>
                <Marks>5</Marks>
            </Column2>
            <Column>
                <Row>
                <Button className="occupied">1D</Button>
                <Button className="occupied">1E</Button>
                <Button>1F</Button>
                </Row>
                <Row>
                <Button>2D</Button>
                <Button>2E</Button>
                <Button>2F</Button>
                </Row>
                <Row>
                <Button className="occupied">3D</Button>
                <Button>3E</Button>
                <Button>3F</Button>
                </Row>
                <Row>
                <Button>4D</Button>
                <Button>4E</Button>
                <Button>4F</Button>
                </Row>
                <Row>
                <Button>5D</Button>
                <Button>5E</Button>
                <Button>5F</Button>
                </Row>
            </Column>
            </SeatSelect>
            <Text>
            <h5>Estándar</h5>
            </Text>
            <SeatSelect>
            <Column>
                <Row>
                <Button>6A</Button>
                <Button>6B</Button>
                <Button>6C</Button>
                </Row>
                <Row>
                <Button>7A</Button>
                <Button>7B</Button>
                <Button>7C</Button>
                </Row>
                <Row>
                <Button className="occupied">8A</Button>
                <Button>8B</Button>
                <Button className="occupied">8C</Button>
                </Row>
                <Row>
                <Button>9A</Button>
                <Button>9B</Button>
                <Button>9C</Button>
                </Row>
                <Row>
                <Button>10A</Button>
                <Button>10B</Button>
                <Button>10C</Button>
                </Row>
            </Column>
            <Column2>
                <Marks>6</Marks>
                <Marks>7</Marks>
                <Marks>8</Marks>
                <Marks>9</Marks>
                <Marks>10</Marks>
            </Column2>
            <Column>
                <Row>
                <Button>6D</Button>
                <Button>6E</Button>
                <Button>6F</Button>
                </Row>
                <Row>
                <Button>7D</Button>
                <Button>7E</Button>
                <Button>7F</Button>
                </Row>
                <Row>
                <Button>8D</Button>
                <Button className="occupied">8E</Button>
                <Button>8F</Button>
                </Row>
                <Row>
                <Button>9D</Button>
                <Button>9E</Button>
                <Button>9F</Button>
                </Row>
                <Row>
                <Button>10D</Button>
                <Button>10E</Button>
                <Button>10F</Button>
                </Row>
            </Column>
            </SeatSelect>
        </>
    );
};

export default DepartureSeats;

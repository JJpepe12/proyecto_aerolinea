import React from "react";

import {
    Date,
    Title,


    Marks,
    Button,
    Column,
    Column2,
    ReferenSeat,
    Row,
    SeatSelect,
    Subtittle,
} from "./StylesSeatsDeparture";

const DepartureSeats = () => {
    return (
        <>
            <Date>
                <Title>
                <h1>Vuelo de salida</h1>
                <button className="btn__change">Cambiar vuelo</button>
                </Title>
                <h2>Martes 30 nov 2021</h2>
                <h4>Cd. Mex (AICM) a Culiacán </h4>
                <p>Selecciona tus asientos</p>
            </Date>

            <ReferenSeat>
            <Column>
                <Row>
                <Marks>A</Marks>
                <Marks>B</Marks>
                <Marks>C</Marks>
                </Row>
            </Column>
            <Column>
                <Marks></Marks>
            </Column>
            <Column>
                <Row>
                <Marks>D</Marks>
                <Marks>E</Marks>
                <Marks>F</Marks>
                </Row>
            </Column>
            </ReferenSeat>
            <Subtittle>
            <h5>Salida Segura</h5>
            </Subtittle>
            <SeatSelect>
            <Column>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
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
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
            </Column>
            </SeatSelect>
            <Subtittle>
            <h5>Estándar</h5>
            </Subtittle>
            <SeatSelect>
            <Column>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
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
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
                <Row>
                <Button></Button>
                <Button></Button>
                <Button></Button>
                </Row>
            </Column>
            </SeatSelect>
        </>
    );
};

export default DepartureSeats;

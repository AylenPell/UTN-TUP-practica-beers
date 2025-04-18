import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

const NewBeer = ({ onAddBeer }) => {

    const [newBeerName, setNewBeerName] = useState("");
    const [newBeerStyle, setNewBeerStyle] = useState("");
    const [newBeerPrice, setNewBeerPrice] = useState("");
    const [newBeerRating, setNewBeerRating] = useState("");
    const [newBeerImg, setNewBeerImg] = useState("");
    const [newBeerAvailable, setNewBeerAvailable] = useState(false);


    const handleChangeName = (event) => {
        setNewBeerName(event.target.value)
    }
    const handleChangeStyle = (event) => {
        setNewBeerStyle(event.target.value)
    }
    const handleNewBeerPrice = (event) => {
        setNewBeerPrice(event.target.value)
    }
    const handleNewBeerRating = (event) => {
        setNewBeerRating(event.target.value)
    }
    const handleNewBeerImg = (event) => {
        setNewBeerImg(event.target.value)
    }
    const handleNewBeerAvailable = (event) => {
        setNewBeerAvailable(event.target.checked)
    }

    const handleAddBeer = (event) => {
        event.preventDefault();
        const toTitleCase = (str) => {
            return str
              .toLowerCase()                     // 1. Pasa todo a minúsculas
              .split(' ')                        // 2. Divide el string por espacios (palabras)
              .map(word =>                       // 3. A cada palabra...
                word.charAt(0).toUpperCase() +  //    ...pone la primera letra en mayúscula
                word.slice(1)                   //    ...y el resto queda en minúscula
              )
              .join(' ');                        // 4. Vuelve a juntar todo con espacios
        };
        const newBeerData = {
            beerName: toTitleCase(newBeerName),
            beerStyle: newBeerStyle.toUpperCase(),
            price: parseFloat(newBeerPrice),
            rating: parseInt(newBeerRating, 10),
            available: newBeerAvailable,
            image: newBeerImg
        }
        console.log(newBeerData);
        onAddBeer(newBeerData);
        setNewBeerName("")
        setNewBeerStyle("")
        setNewBeerPrice("")
        setNewBeerRating("")
        setNewBeerImg("")
        setNewBeerAvailable(false)
    }

    return (
        <Card className="m-4 w-50" bg="black">
            <Card.Body>
                <Form className="text-white" onSubmit={handleAddBeer}>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="name">
                                <Form.Label>Cerveza</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={newBeerName}
                                    placeholder="Ingresar nombre"
                                    onChange={handleChangeName}    
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="style">
                                <Form.Label>Style</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    value={newBeerStyle}
                                    placeholder="Ingresar estilo" 
                                    onChange={handleChangeStyle}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="price">
                                <Form.Label>Precio</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newBeerPrice}
                                    placeholder="Ingresar precio"
                                    max={5}
                                    min={0}
                                    onChange={handleNewBeerPrice}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="rating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control
                                    type="number"
                                    value={newBeerRating}
                                    placeholder="Ingresar puntaje"
                                    max={5}
                                    min={0}
                                    onChange={handleNewBeerRating}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Form.Group className="mb-3" controlId="imageUrl">
                            <Form.Label>URL de imagen</Form.Label>
                            <Form.Control 
                            type="text" 
                            value={newBeerImg}
                            placeholder="Ingresar url de imagen" 
                            onChange={handleNewBeerImg}
                            />
                        </Form.Group>
                    </Row>
                    <Row className="justify-content-end">
                        <Col md={3} className="d-flex flex-column justify-content-end align-items-end">
                            <Form.Check
                                type="switch"
                                id="available"
                                checked={newBeerAvailable}
                                className="mb-3"
                                label="¿Disponible?"
                                onChange={handleNewBeerAvailable}
                            />
                            <Button variant="warning" type="submit">
                                Agregar!
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};


export default NewBeer;
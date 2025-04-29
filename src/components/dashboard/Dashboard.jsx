import { useState } from "react";
import { beersData } from "../../data/beersData";
import BeerList from "../brewery/beerList/BeerList";
import NewBeer from "../brewery/newBeer/NewBeer";
import { Col, Container, Row, Button } from "react-bootstrap";

export const Dashboard = ({ onLogout }) => {
    const [beers, setBeers] = useState(beersData);
    const [showBeerForm, setShowBeerForm] = useState(false);

    const handleShowBeerForm = () => {
        setShowBeerForm(prev => !prev);
    }


    const handleAddBeer = (enteredBeer) => {
        const lastId = beers.reduce((maxId, beer) => Math.max(maxId, beer.id), 0); // Obtener el ID más alto de las cervezas actuales
        const newBeer = {
            ...enteredBeer,
            id: lastId + 1
        }
        setBeers(prevBeers => [newBeer, ...prevBeers]);
        setShowBeerForm(false)
        console.log(newBeer)
    }

    const handleDeleteBeer = (beerId) => {
        setBeers(prevBeers => {
            console.log("beerId a eliminar:", beerId);
            const updatedBeers = prevBeers.filter(beer => beer.id !== Number(beerId));
            console.log(updatedBeers);
            return updatedBeers;
          });
    };

    return (
        <>
        <Container>
            <Row className="d-flex justify-content-end mb-3">
                <Col xs={5} className="d-flex justify-content-end align-items-start">
                    <Button
                        className="mx-2" 
                        variant="outline-dark" 
                        size="sm"
                        onClick={handleShowBeerForm}>
                            {showBeerForm ? "Cancelar" : "Agregar cerveza"}
                    </Button>
                    <Button 
                        variant="outline-dark" 
                        size="sm"
                        onClick={onLogout}>
                            Cerrar sesión
                    </Button>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center align-items-start">
                <h1 className="appTitle">- BREWERY -</h1>
            </Row>
        </Container>
        
        <p className='comments-p'>Quiero tomar una rica cerveza!</p>

        {showBeerForm && <NewBeer onAddBeer={handleAddBeer}/>}
        <BeerList beersData={beers} onDeleteBeer={handleDeleteBeer}/>
        
        </>
    );
};

export default Dashboard;

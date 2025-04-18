import React, { useState } from 'react'
import { Badge, Card, Button } from 'react-bootstrap';
import { FaStar, FaRegStar } from 'react-icons/fa';

const BeerItem = ({beerId, beerName, beerPrice, beerStyle, beerRating, beerStock, beerPic, onBeerDrinked}) => {
    const dollarPrice = 1320;
    const [newTitle, setNewTitle] = useState(beerName)

    const handleYum = () => {
        if (newTitle === beerName) {
            setNewTitle('Mmm... Yum!');
            onBeerDrinked(beerName);
        } else {
            setNewTitle(beerName);
            onBeerDrinked("");
        }
        console.log('Burp!');
    };

    const starsRating = (rating) => {
        const totalStars = 5;  
        const stars = [];
      
        // Estrellas llenas
        for (let i = 0; i < rating; i++) {
          stars.push(<FaStar key={`full-${i}`} color="black" style={{ marginRight: '2px' }} />);
        }
      
        // Estrellas vacías
        for (let i = 0; i < totalStars - rating; i++) {
          stars.push(<FaRegStar key={`empty-${i}`} color="black" style={{ marginRight: '2px' }} />);
        }
      
        return <div style={{ fontSize: '10px' }}>{stars}</div>;
      };

    return (
        <Card style={{width: "15rem"}} className = "m-3">
            <Card.Img
                style={{
                    width: '100%',
                    height: 'auto',  // Mantén la altura fija
                    objectFit: 'cover',  // Ajuste sin deformar (puede recortar)
                }}
                variant='top'
                src={beerPic !== "" ? beerPic : 'https://bit.ly/jokerbeer'} // si no esta la img reemplaza por una comodin
                alt={`${beerName} image`}
            />
            <Card.Body>
                <div className="d-flex justify-content-end mb-2">
                    {
                        beerStock ?
                        <Badge bg='success'>Disponible</Badge>
                        : <Badge bg='danger'>Sin stock</Badge>
                    }
                </div>            
                <Card.Title>{newTitle}</Card.Title>
                <Card.Subtitle>{beerStyle}</Card.Subtitle>
                <div>{starsRating(beerRating)}</div>
                <p>${(beerPrice*dollarPrice).toFixed(2)}</p>
                <Button 
                    className='btn btn-dark btn-sm' 
                    onClick={handleYum}>
                    Tomar cerveza!
                </Button>
            </Card.Body>  
        </Card>
    )
}

export default BeerItem

import { useState } from "react";
import { beersData } from "../../data/beersData";
import BeerList from "../brewery/beerList/BeerList";
import NewBeer from "../brewery/newBeer/NewBeer";

export const Dashboard = () => {
    const [beers, setBeers] = useState(beersData);

    const handleAddBeer = (enteredBeer) => {
        const lastId = beers.reduce((maxId, beer) => Math.max(maxId, beer.id), 0); // Obtener el ID más alto de las cervezas actuales
        const newBeer = {
            ...enteredBeer,
            id: lastId + 1
        }
        setBeers(prevBeers => [newBeer, ...prevBeers]);
        console.log(newBeer)
    }

    const handleDeleteBeer = (beerId) => {
        setBeers(prevBeers => prevBeers.filter(beer => beer.id !== Number(beerId)));
        console.log(beers)
    };

    return (
        <>
        <h1 className="appTitle">- BREWERY -</h1>
        <p className='comments-p'>Quiero tomar una rica cerveza!</p>
        <BeerList beersData={beers} onDeleteBeer={handleDeleteBeer}/>
        <NewBeer onAddBeer={handleAddBeer}/>
        </>
    );
};

export default Dashboard;

import { useState } from "react";
import { beersData } from "../../data/beersData";
import BeerList from "../beerList/BeerList";
import NewBeer from "../newBeer/NewBeer";

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

    return (
        <>
        <h1 className="appTitle">- CERVEZAS -</h1>
        <p className='comments-p'>Quiero tomar una rica cerveza!</p>
        <BeerList beersData={beers} />
        <NewBeer onAddBeer={handleAddBeer}/>
        </>
    );
};

export default Dashboard;

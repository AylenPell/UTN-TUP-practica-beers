import React, { use, useState } from 'react'
import BeerItem from '../beerItem/BeerItem'
import BeerSearch from '../beerSearch/BeerSearch'

const BeerList = ({ beersData }) => {
    const [beerDrinked, setBeerDrinked] = useState("");
    const [wantedBeer, setWantedBeer] = useState("");

    const handleBeerDrinked = (beerName) => {
        setBeerDrinked(beerName)
    }
    const handleBeerSearch = (value) => {
        setWantedBeer(value)
    }

    const beersMapped = beersData
        .filter(beer => beer.beerName?.toUpperCase().includes(wantedBeer.toUpperCase()))
        .map((beer) => {
            return (
                <BeerItem
                key={beer.id}
                beerPic={beer.image}
                beerName={beer.beerName}
                beerStyle={beer.beerStyle.toUpperCase()}
                beerPrice={beer.price}
                beerRating={beer.rating}
                beerStock={beer.available}
                onBeerDrinked={handleBeerDrinked}
                />
            )
        }); 

    return (
        <>
            <div className='comments-div'>
                {beerDrinked ? (
                    <p className='comments-p'>Tomaré una <b>{beerDrinked}!</b></p>
                ) : (
                    <p className='comments-p'>¿Cuál voy a elegir...?</p>
                )}
            </div>
            <div>
                <BeerSearch onSearch={handleBeerSearch} wantedBeer={wantedBeer}/>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
                    {beersMapped.length ?
                        beersMapped :
                        <p className='comments-p'>No se encontraron cervezas...</p>}
            </div>
        </>
    )
}

export default BeerList

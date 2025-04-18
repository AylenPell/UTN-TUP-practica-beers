import React, { use, useState } from 'react'
import BeerItem from '../beerItem/BeerItem'

const BeerList = ({ beersData }) => {
    const [beerDrinked, setBeerDrinked] = useState("")

    const handleBeerDrinked = (beerName) => {
        setBeerDrinked(beerName)
    }

    return (
        <>
        <div className='comments-div'>
            {beerDrinked ? (
                <p className='comments-p'>Tomaré una <b>{beerDrinked}!</b></p>
            ) : (
                <p className='comments-p'>¿Cuál voy a elegir...?</p>
            )}
        </div>
        <div className="d-flex justify-content-center flex-wrap">
            {beersData.map((beer) => {
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
            })}
        </div>
        </>
    )
}

export default BeerList

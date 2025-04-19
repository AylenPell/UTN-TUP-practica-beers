import { useState } from "react";
import { Form, FormControl, FormGroup } from "react-bootstrap";


const BeerSearch = ({onSearch, wantedBeer}) => {

    const handleBeerSearch = (event) => {
        onSearch(event.target.value)   
        console.log(wantedBeer)
    }

    return (
        <FormGroup className="mb-3" controlId="searchBeer">
            <FormControl 
                type="text"
                placeholder="Buscar cerveza..."  
                onChange={handleBeerSearch}  
                value={wantedBeer}
            />

        </FormGroup>
    )
}

export default BeerSearch;
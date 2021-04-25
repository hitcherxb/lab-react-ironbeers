import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Header from './Header'


function RandomBeer(props) {

    const [beer, setBeer] = useState([])
    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/`)
            .then(response => {
                setBeer(response.data[Math.floor(Math.random() * response.data.length)])
            })
    }, []);
    // console.log(beer)




    return (
        <div>
            <Header />
            <img src={beer.image_url} />
            <div>
                <b>Name: </b>
                {beer.name}
            </div>
            <div>
                <b>Tag Line: </b>
                {beer.tagline}
            </div>
            <div>
                <b>ABV: </b>
                {beer.abv}
            </div>
            <div>
                {beer.first_brewed}
            </div>
            <div>
                {beer.attenuation_level}
            </div>
            <div>
                {beer.description}
            </div>
            <div>
                {beer.contributed_by}
            </div>
        </div>
    );
}

export default RandomBeer;
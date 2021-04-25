import React, { useState, useEffect } from 'react';
import Header from './Header'
import axios from 'axios'
import { Link } from 'react-router-dom'



function AllBeer(props) {

    const [beer, setBeer] = useState([])

    useEffect(() => {
        console.log('test')
        axios
            .get('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => {
                setBeer(response.data)
            })
        return () => console.log('component unmounted')

    }, [])


    const newBeer = () => {
        return beer.map((beer, i) => {
            return (
                <Link key={i} to={`/beer/${beer._id}`}>
                    <div className="beerDiv">
                        <img className='beerpic' src={beer.image_url} />
                        <br></br>
                        {beer.name} <br></br>
                        {beer.tagline}
                    </div>
                </Link>
            )
        })
    }




    return (
        <div>
            <Header />
            {newBeer()}


        </div>
    );
}

export default AllBeer;
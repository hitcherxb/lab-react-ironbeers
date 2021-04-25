import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import allbeer from './assets/beers.png'
import newbeer from './assets/new-beer.png'
import randombeer from './assets/random-beer.png'
import axios from 'axios'


function Home(props) {

    const [beer, setBeer] = useState([])
    useEffect(() => {
        axios
            .get(`https://ih-beers-api2.herokuapp.com/beers/${props.match.params.beerid}`)
            .then(response => {
                setBeer(response.data)
            })
    }, []);

    const newBeer = () => {
        return beer.map((beer, i) => {
            return (
                <Link key={i} to={`/random/${Math.random() * (beer._id.length)}`}>
                    <div className="beerDiv">
                        <img className='beerpic' src={beer.image_url} />
                        {beer.name} <br></br>
                        {beer.tagline}
                    </div>
                </Link>
            )
        })
    }


    return (
        <div>
            <div>
                <img src={allbeer} />
                <div>
                    <Link to='/allbeer'>
                        <h1>All Beers</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt hic debitis, dolore ullam obcaecati! Rem sint voluptatem natus in itaque unde at quia, nemo, voluptates aperiam saepe nostrum ipsum!</p>
                </div>
            </div>
            <div>
                <img src={randombeer} />
                <div>
                    <Link to={`/random`}>
                        <h1>Random Beer</h1>
                    </Link>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt hic debitis, dolore ullam obcaecati! Rem sint voluptatem natus in itaque unde at quia, nemo, voluptates aperiam saepe nostrum ipsum!</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={newbeer} />
                </div>
                <Link to='/new'>
                    <h1>New Beer</h1>
                </Link>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt hic debitis, dolore ullam obcaecati! Rem sint voluptatem natus in itaque unde at quia, nemo, voluptates aperiam saepe nostrum ipsum!</p>
            </div>
        </div>

    );
}

export default Home;
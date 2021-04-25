import React, { useState } from 'react';
import axios from 'axios'
import Header from './Header'
import { useHistory } from 'react-router-dom'

function NewBeer(props) {
    const [newBeer, setNewBeer] = useState({})
    const history = useHistory()


    function onChange(event) {
        event.persist()
        newBeer[event.target.name] = event.target.value
        console.log(newBeer)
        setNewBeer(newBeer)
    }

    function submitForm(e) {
        e.preventDefault()
        axios
            .post('https://ih-beers-api2.herokuapp.com/beers/new', newBeer)
            .then(history.push('/allbeer'))
    }

    return (
        <form onSubmit={submitForm}>
            <Header />
            <h1>Add New Beer</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='name' placeholder="Name" onChange={onChange} />
                <label htmlFor="floatingInput">Name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='tagline' placeholder="Tagline" onChange={onChange} />
                <label htmlFor="floatingInput">Tagline</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='description' placeholder="Description" onChange={onChange} />
                <label htmlFor="floatingInput">Description</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='first_brewed' placeholder="First Brewed" onChange={onChange} />
                <label htmlFor="floatingInput">First Brewed</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='brewers_tips' placeholder="Brewer Tips" onChange={onChange} />
                <label htmlFor="floatingInput">Brewer Tips</label>
            </div>
            <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" name='attenuation_level' placeholder="Attenuation Level" onChange={onChange} />
                <label htmlFor="floatingInput">Attenuation Level</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" name='contributed_by' placeholder="Contributed By" onChange={onChange} />
                <label htmlFor="floatingInput"> Contributed By</label>
            </div>
            <input className="btn btn-primary" type="submit" value="Submit" ></input>

        </form>
    );
}

export default NewBeer;
import React, { useState } from 'react';
import axios from 'axios';
import { InputGroup, Input, Button } from "reactstrap";
import { useHistory } from "react-router-dom";



export default function AddMovie() {
    const history = useHistory();
    const [title, setMovieValue] = useState("");
    const [year, setYearValue] = useState("");
    const [poster, setPosterValue] = useState("");
    const [imdbId, setIdValue] = useState("");

    async function callADDapi() {
        axios
            .post(`http://localhost:5000/addMovie`, {
                title,
                year,
                poster,
                imdbId
            })
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
        alert(`${title} Movie is Inserted`)
    
    }
    
    return (
        <section className="search-section">
            <InputGroup>
                <Input
                    placeholder=" Enter movie name to ADD...."
                    onChange={title => setMovieValue(title.target.value)}
                />
                <Input
                    placeholder="Year"
                    onChange={year => setYearValue(year.target.value)}
                />
                <Input
                    placeholder="poster url"
                    onChange={poster => setPosterValue(poster.target.value)}
                />
                <Input
                    placeholder="imdbId"
                    onChange={imdbId => setIdValue(imdbId.target.value)}
                />

                <Button color="success" onClick={callADDapi} >
                    ADD movie
                </Button>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => history.goBack()}
                >
                    Go Back
                </button>
            </InputGroup>
        </section>
    );
}
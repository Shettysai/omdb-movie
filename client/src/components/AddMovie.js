import React, { useState } from 'react';
import { InputGroup, Input, Button } from "reactstrap";

async function callADDapi() {

  }

export default function AddMovie() {
    const [MovieValue, setMovieValue] = useState("");
    const [YearValue, setYearValue] = useState("");
    const [PosterValue, setPosterValue] = useState("");
    const [IdValue, setIdValue] = useState("");
    return (
        <section className="search-section">
            <InputGroup>
                <Input
                    placeholder=" Enter movie name to ADD...."
                    onChange={MovieValue => setMovieValue(MovieValue.target.value)}
                />
                <Input
                    placeholder="Year"
                    onChange={YearValue => setYearValue(YearValue.target.value)}
                />
                <Input
                    placeholder="poster url"
                    onChange={PosterValue => setPosterValue(PosterValue.target.value)}
                />
                <Input
                    placeholder="imdbId"
                    onChange={IdValue => setIdValue(IdValue.target.value)}
                />
                
                <Button color="success" onClick={callADDapi} >
                    ADD movie
      </Button>
            </InputGroup>
        </section>
    );
}
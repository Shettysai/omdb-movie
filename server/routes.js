const express = require("express");
const Movie = require("./models/Movie");

const router = express.Router();

module.exports = function(){
    router.get('/getMovies/:searchValue', async (req, res) => {
        const { searchValue } = req.params;
        console.log(searchValue);
        const moviesData = await Movie.find({title:searchValue});
        console.log(moviesData);
        return res.send(moviesData);
    });
    
    router.post('/addMovie', async(req,res) => {
        const {title,year,poster,imdbId} = req.body;
        console.log(req.body);
        const movie = new Movie({ 
            title,
            year,
            poster,
            imdbId
        });
       await movie.save();
       console.log(movie);
        res.json({message:"Movie added successfully"});
    });

    return router;
}
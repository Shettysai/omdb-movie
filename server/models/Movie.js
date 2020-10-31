const mongoose = require("mongoose");

const Movie = mongoose.model('Movie', {
     title: String,
     year : String,
     poster : String,
     imdbId : String  
});

module.exports = Movie;
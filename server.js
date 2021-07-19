const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const Movie = require('./models/Movie');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

mongoose.connect("mongodb+srv://ivo:pass123123@movieslibrary.htnha.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});

//app.get("/create", async (req, res) => {
//const movie = new Movie({ name: "Revenge", genres: ["Drama", "Thriller", "Mystery"], runtime: 60, premiered: "2011-09-21", officialSite: null, image: { medium: "https://static.tvmaze.com/uploads/images/medium_portrait/82/206879.jpg", original: "https://static.tvmaze.com/uploads/images/original_untouched/82/206879.jpg" }, summary: "<p>This is not a story about forgiveness; <b>Revenge</b> is a show about retribution. Meet Emily Thorne, the newest resident of The Hamptons. When she was a little girl (and known as Amanda Clarke) her father, David Clarke, was framed for a horrific crime and subsequently sent to prison. While serving his time, the conspirators plotted and murdered David in order to prevent the truth from coming out. Emily is now back with a new identity and ready to take vengeance on the people that murdered her father and stole her childhood.</p>"});

//try{
//await movie.save();
//}catch(err){
//console.log('err');
//}
//});

app.get('/api/movies', async (req, res) => {
  let movies = await Movie.find({});

  res.json(movies);

});

app.get('/api/movies/:movieId', async (req, res) => {
  let oneMovie = await Movie.findById(req.params.movieId);
  res.json(oneMovie);

});

app.post('/favorites', async (req, res) => {
  console.log(req.body);
  await Movie.findById(req.body.movieId, (err, updatedFavorite) => {
    updatedFavorite.favorite = updatedFavorite.favorite == true ? false : true;
    updatedFavorite.save();
    res.send("update");
  });
});

app.post('/notes', async (req, res) => {
  await Movie.findById(req.body.movieId, (err, updatedFavorite) => {
    updatedFavorite.note = req.body.note;
    updatedFavorite.save();
    res.send("update");
  });
});

app.post('/rating', async (req, res) => {
  await Movie.findById(req.body.movieId, (err, updatedFavorite) => {
    updatedFavorite.rating = req.body.rating;
    updatedFavorite.save();
    res.send("update");
  });
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
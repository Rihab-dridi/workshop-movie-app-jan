import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import AddMovie from "./Components/addMovie";
import Search from "./Components/search";
import Rating from "./Components/rating";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      movieName: "Into the Wild",
      Description:
        "Christopher McCandless, a young graduate, decides to renounce all his possessions and hitchhike across America. During his journey, he encounters several situations which change him as a person.",
      rating: 3,
      imgUrl:
        "https://fr.web.img4.acsta.net/medias/nmedia/18/64/47/78/18869162.jpg",
    },
    {
      id: 2,
      movieName: "300",
      Description:
        "In the ancient battle of Thermopylae, King Leonidas and 300 Spartans fight against Xerxes and his massive Persian army. They face insurmountable odds when they are betrayed by a Spartan reject.",
      rating: 4,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/5/5c/300poster.jpg",
    },
  ]);
const [search,setSearch]=useState('')
const [rate,setRate]=useState(1)
  return (
    <div className="App">
      <div className="toolbar">
        <Search setSearch={setSearch} />
        <Rating setRate={setRate}/>
        <AddMovie />
      </div>

      <MovieList movies={movies} setMovies={setMovies} search={search} rate={rate} />
    </div>
  );
}

export default App;
//search : 2steps 
//step1: read the input of the search and store it in a state (search)
//step2: filter the movielist before the map ( filter)
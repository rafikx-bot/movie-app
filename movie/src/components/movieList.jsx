import { useState,useEffect} from "react";
import MovieCard from "./movieCard"
import { Movies } from "./movies-data/data";

const MovieList=()=>{
    const [movieList, setMovieList] = useState([]);
    useEffect(()=>setMovieList(Movies),[]);
    {movieList.map((item)=>(
      <MovieCard key={item.id} imgSrc={item.img} title={item.title} rating={item.rating} description={item.description} />
    ))};
}
export default MovieList;

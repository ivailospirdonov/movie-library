import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { getSearchedMovies } from '../services/movieServices';

export default function SearchPage(props) {

    const [searchedMovies, setSearchedMovies] = useState([]);

    useEffect(() => {
        async function getCurrentSearchedMovies() {
            let result = await getSearchedMovies(props.location.state);
            setSearchedMovies(result);
        }
        getCurrentSearchedMovies();

    }, [props.location.state]);

    return (
        <div>
            Search Page

            {searchedMovies.map(movie =>
                <MovieCard
                    key={movie._id}
                    movieId={movie._id}
                    name={movie.name}
                    genres={movie.genres}
                    runtime={movie.runtime}
                    premiered={movie.premiered}
                    officialSite={movie.officialSite}
                    image={movie.image}
                    summary={movie.summary}
                    favorite={movie.favorite}
                    rating={movie.rating}
                    note={movie.note}
                />)}
        </div>
    )
}

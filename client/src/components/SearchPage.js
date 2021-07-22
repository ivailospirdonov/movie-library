import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import { Container } from 'react-bootstrap';
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
        <React.Fragment>
            <Container>
                <div>
                    <h1 className="text-center my-5">Search</h1>
                </div>
                <div className="row w-100 mx-auto d-flex">

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
            </Container>
        </React.Fragment>
    )
}

import React, { useEffect, useState } from 'react';
import { getFavoriteMovies } from '../services/movieServices';

export default function HomePage() {

    const [favoriteMovies, setFavoriteMovies] = useState([]);

    useEffect(() => {
        async function getCurrentFavoriteMovies() {
            let result = await getFavoriteMovies();
            setFavoriteMovies(result);
        }
        getCurrentFavoriteMovies();

    }, []);


    return (
        <div>
            Home Page

            {favoriteMovies.map(movie =>
                <p>{movie.name}</p>
            )}
        </div>
    )
}

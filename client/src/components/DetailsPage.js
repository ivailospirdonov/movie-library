import React, { useRef, useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import MovieCard from './MovieCard';

import { getOneMovie, updateNote, updateRating } from '../services/movieServices';

export default function DetailsPage({ match }) {

    const noteRef = useRef();
    const [movie, setMovie] = useState([]);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        async function getCurrentMovieDetails() {
            let result = await getOneMovie(match.params.movieId);
            setMovie(result);
            setRating(result.rating);
        }
        getCurrentMovieDetails();

    }, []);

    async function handleNoteChange() {
        try {
            await updateNote(match.params.movieId, noteRef.current.value);
        } catch (e) {
            console.log('Failed to update the note!');
        }

    }

    async function handleMovieRating(nextValue, prevValue, name) {
        setRating(nextValue);
        await updateRating(movie._id, nextValue);
    }


    return (
        <div>
            Details Page

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
            />

            <form>
                <h1>{movie.name}</h1>
                <StarRatingComponent
                    name="movieRating"
                    value={rating}
                    onStarClick={handleMovieRating}
                />
                <label>
                    Note:
                    <input type="text" ref={noteRef} defaultValue={movie.note} onChange={handleNoteChange} />
                </label>
            </form>

        </div>
    )
}

import React, { useRef, useState, useEffect } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import MovieCard from './MovieCard';
import { getOneMovie, updateNote, updateRating } from '../services/movieServices';
import { Container } from 'react-bootstrap';

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
        <React.Fragment>
            <Container className="py-5">

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
                <div>
                    <h2>Your Review</h2>
                    <div className="starRatingSection">
                        <StarRatingComponent
                            name="movieRating"
                            value={rating}
                            onStarClick={handleMovieRating}
                        />
                    </div>
                    <div>
                        <textarea className="detailsNoteArea"ref={noteRef} defaultValue={movie.note} placeholder="Your private notes and comments about the movie..." onChange={handleNoteChange} rows="6" cols="100"/>
                    </div>
                </div>
            </Container>
            <style jsx>{`
                .starRatingSection{
                    font-size: 50px;
                }

                .detailsNoteArea{
                    border-radius: 7px;
                    border-color: #ddd;
                }
            `}</style>S
        </React.Fragment>
    )
}

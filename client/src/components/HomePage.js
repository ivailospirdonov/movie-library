import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getFavoriteMovies } from '../services/movieServices';
import FavoriteMovieCard from './FavoriteMovieCard';

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
        <React.Fragment>
            <div>
                <div className="homeImgWrap">
                    <img
                        className="d-block w-100"
                        src="https://external-preview.redd.it/Z-mdOCdgw53wluJKQdklW2-WwJEcd3zXoER3YNl-euI.jpg?auto=webp&s=9da2a0406734c547c7bc489c5fa20b091c7ee86c"
                        alt="Third slide"
                    />
                    <div className="homeImgHeading">
                        <h3>Movies Collection</h3>
                        <p>The best movie collection ever made!</p>
                    </div>
                </div>

                <Container>
                    <div>
                        <h1 className="text-center my-4">Your Favorites</h1>
                    </div>
                    <div className="row w-100 mx-auto d-flex">

                        {favoriteMovies.map(movie =>
                            <FavoriteMovieCard
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
                        )}
                    </div>
                </Container>
            </div>
            <style jsx>{`
                .homeImgWrap{
                    display: block;
                    position: relative;
                    overflow: hidden;
                    background-color: #000;
                    content: '';
                    padding-top: calc( (2.5 / 9) * 100%);
                }

                .homeImgWrap img{
                    display: block;
                    width: 100%;
                    height: auto;
                    position: absolute;
                    transition: transform 1s;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    opacity: 0.5;
                }
                .homeImgHeading{
                    position: absolute;
                    top: 40%;
                    left: 10%;
                    color: #fff;
                }
            `}</style>
        </React.Fragment >
    )
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { updateFavorite } from '../services/movieServices';

export default function MovieCard({ movieId, name, genres, runtime, premiered, officialSite, image, summary, favorite, rating, note }) {


    const [favoriteButton, setFavoriteButton] = useState(favorite);

    async function handleMovieFavoriteClick() {
        await updateFavorite(movieId);
        if (favoriteButton == true) {
            setFavoriteButton(false);
        } else {
            setFavoriteButton(true);
        }
    };
console.log('alo da');
    return (
        <React.Fragment>
            <div className="movieSearchedCard d-flex w-100 mb-5">
                <div className="col-3">
                    <Link to={`/details/${movieId}`} className="movieSearchedCardInfoHeading">
                        <div className="movieCardImgWrap">
                            {image != undefined && <img src={image.original} className="movieSearchedCardImg" />}
                        </div>
                    </Link>
                </div>
                <div className="movieSearchedCardInfo">
                    <Link to={`/details/${movieId}`} className="movieSearchedCardInfoHeading">
                        {premiered != undefined && <h2>{name} ({premiered.slice(0, 4)})</h2>}
                    </Link>
                    {genres != undefined &&<p>{genres.join(', ')} | {runtime} minutes</p>}
                    <p className="movieSearchedCardInfoSummary">{summary}</p>
                    <p><a href={officialSite}>Visit official site</a></p>
                    {favoriteButton == true && <Button variant="outline-danger" onClick={handleMovieFavoriteClick}>Remove from favorites</Button>}
                    {favoriteButton == false && <Button variant="outline-success" onClick={handleMovieFavoriteClick}>Add to favorites</Button>}
                </div>
            </div>
            <style jsx>{`

                .movieSearchedCard{
                    max-height: 300px;
                    overflow: hidden;
                }

                .movieCardImgWrap{
                    display: block;
                    position: relative;
                    overflow: hidden;
                    content: '';
                    padding-top: calc( (11 / 8) * 100%);
                    border-bottom: 1px solid rgba(0,0,0,.125);
                }

                .movieSearchedCardImg{
                    display: block;
                    width: 100%;
                    height: auto;
                    position: absolute;
                    transition: transform 1s;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .movieSearchedCardInfo{
                    padding-left: 5%;
                }

                .movieSearchedCardInfoHeading{
                    text-decoration: none;
                    color: #000;
                }

                .movieSearchedCardInfoSummary{
                    max-height: 96px;
                    overflow: hidden;
                }
            `}</style>
        </React.Fragment>
    )
}


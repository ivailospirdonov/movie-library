import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export default function FavoriteMovieCard({ movieId, name, genres, runtime, premiered, officialSite, image, summary, favorite, rating, note }) {
    return (
        <React.Fragment>
            <Link to={`/details/${movieId}`} className="mb-4 movieCard">
                <Card>
                    <div className="movieCardImgWrap">
                        <Card.Img variant="top" src={image.original} className="movieCardImg" />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <button className="btn btn-outline-dark">Details</button>
                    </Card.Body>
                </Card>
            </Link>
            <style jsx>{`

                .movieCard{
                    width: 20%;
                    color: #000;
                }

                .movieCard:link{
                    text-decoration: none;
                }

                .movieCard:hover .card{
                    background-color: #cdcdcd;
                    color: #000;
                    transition: transform 1s;
                }

                .movieCard:hover .movieCardImg{
                    transition: transform 1s;
                    transform: translate(-50%, -50%) scale(1.1);
                }

                .movieCardImgWrap{
                    display: block;
                    position: relative;
                    overflow: hidden;
                    content: '';
                    padding-top: calc( (14 / 9) * 100%);
                    border-bottom: 1px solid rgba(0,0,0,.125);
                }

                .movieCardImg{
                    display: block;
                    width: auto;
                    height: 100%;
                    position: absolute;
                    transition: transform 1s;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .movieCard .btn{
                    background-color: #292929;
                    border-color: aliceblue;
                    color: aliceblue;
                }

                .movieCard:hover .btn{
                    background-color: #292929;
                    color: aliceblue;
                }
            `}</style>
        </React.Fragment>
    )
}

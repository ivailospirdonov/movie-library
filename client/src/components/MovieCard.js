import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { updateFavorite } from '../services/movieServices';
import DetailsPage from './DetailsPage';

export default function MovieCard( { movieId, name, genres, runtime, premiered, officialSite, image, summary, favorite, rating, note}) {
    

    const [favoriteButton, setFavoriteButton] = useState(favorite);

    async function handleMovieFavoriteClick() {
        await updateFavorite( movieId );
        if(favoriteButton == true){
            setFavoriteButton(false);
        }else{
            setFavoriteButton(true);
        }
    }
    
    return (
        <div>
                <div>
                    <div className="carCardImgWrap">
                        <p></p>
                    </div>
                    <div>
                        <Link to={`/details/${movieId}`}>{name}</Link>
                        {favoriteButton == true && <button className="" onClick={handleMovieFavoriteClick}>Remove from favorites</button>}
                        {favoriteButton == false && <button className="" onClick={handleMovieFavoriteClick}>Add to favorites</button>}
                    </div>
                </div>
        </div>
    )
}


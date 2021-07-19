export async function getSearchedMovies(searchData){
    console.log(searchData);
    const records = await fetch(`/api/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    const searchedMovies = await records.filter( rec => rec.name.toLowerCase().includes(searchData.toLowerCase()));
    return (searchedMovies);
}

export async function getOneMovie(movieId){
    const result = await fetch(`/api/movies/${movieId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    return (result);
}

export async function getFavoriteMovies(){
    const records = await fetch(`/api/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    const favoriteMovies = await records.filter( rec => rec.favorite == true);
    return (favoriteMovies);
}

export async function updateFavorite(movieId) {
    let movie = {
        movieId,
    }
    return await fetch(`/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
};

export async function updateNote(movieId, note) {
    let movie = {
        movieId,
        note
    }
    return await fetch(`/notes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
};

export async function updateRating(movieId, rating) {
    let movie = {
        movieId,
        rating
    }
    return await fetch(`/rating`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie)
    })
};
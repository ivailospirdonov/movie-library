export async function getSearchedMovies(searchData){
    console.log(searchData);
    const records = await fetch(`/api/movies`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    .then(res => res.json())
    console.log(records);
    const searchedMovies = await records.filter( rec => rec.name.toLowerCase().includes(searchData.toLowerCase()));
    console.log(searchedMovies);
    return (searchedMovies);
}
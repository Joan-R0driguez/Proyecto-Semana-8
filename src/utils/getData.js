const URI = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async (pokemon) => {

    let URL_SEARCH = `${URI}${pokemon}`;
    try{
        const response = await fetch(URL_SEARCH);
        const data = await response.json();
        console.log(data)
        return data;
    }
    catch(error) {
        console.error('Error get Data',error);
    } 
}

export default getData;
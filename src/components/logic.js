async function getData(key){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${key}`,{
        method:"GET"
    });
    const pokemon = await response.json();
    return pokemon;
}

async function getList(){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`,{
        method:"GET"
    });
    const pokelist = await response.json();
    return pokelist;
}

export {getData,getList};
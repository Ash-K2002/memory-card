import { useEffect, useState } from "react"
import { Deck } from "./deck"

async function getPokemon(item){
    const pokemon={};
    pokemon.name = item.name;
    try{
        const pokeData= await fetch(item.url);
        if(!pokeData.ok){
            throw new Error('Failed to fetch pokemon ');
        }
        const response = await pokeData.json();
        pokemon.sprites = response.sprites;
        pokemon.clicked=false;
    }  
    catch(error){
        throw new Error('An error occured', error);
    } 
    return pokemon;
}

async function createPokeArr(arr){
    const pokeArr=[];
   try{
    for(const index in arr){
        const pokemon = await getPokemon(arr[index]);
        if(pokemon){
            pokemon.id=index
            pokeArr.push(pokemon);
        }
        else{
            console.error('Failed to fetch data');
        }
    }
   }
   catch(error){
    console.error('An error occured', error);
    return false;
}
return pokeArr;
}


function App() {
    const [arr, setArr]=useState([]);
    const [gotData, setGotData]=useState(false);
    useEffect(
        ()=>{
            fetch('https://pokeapi.co/api/v2/pokemon?limit=20&offset=0').then(response=>response.json()).then(
                async (data)=>{
                    const pokeArr = await createPokeArr(data.results);
                    if(pokeArr){
                        console.log(pokeArr);
                        setArr(pokeArr);
                        setGotData(true);
                    }
                    else{
                        setGotData(false);
                    }
                }
            ).catch(
                error=>console.error('Error occured, ',error)
            )
        },
        []
    );

    
    if(gotData)
{
    return(
        <>
        <Deck pokeArr={arr}/>
        </>
    )
}
else{
    return <>
        <h1>Error fetching data</h1>
    </>
}
  
}

export default App

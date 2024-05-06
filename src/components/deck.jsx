import { Card } from "./card";
import '../styles/deck.css'
import { useState } from "react";

const pokemons = [
    { name: "Bulbasaur", id: 1,clicked:false },
    { name: "Charmander", id: 4,clicked:false },
    { name: "Squirtle", id: 7,clicked:false },
    { name: "Pikachu", id: 25,clicked:false },
    { name: "Jigglypuff", id: 39,clicked:false },
    { name: "Gengar", id: 94,clicked:false },
    { name: "Eevee", id: 133,clicked:false },
    { name: "Snorlax", id: 143,clicked:false },
    { name: "Mewtwo", id: 150,clicked:false },
    { name: "Mew", id: 151,clicked:false }
];

function yatesShuffle(arr){
    //Fisher yates shuffle
    for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
    return arr;
}

function Deck(){
    const [pokeArr, setPokeArr]= useState(pokemons);
    const [score, setScore]=useState(0);

    function handleClick(item){
        if(item.clicked===false){
            setScore(score+1);
        }
        else{
            setScore(0);
        }

        const index = pokeArr.findIndex((val)=>{
            return (val.id===item.id);
        });
        if(index!==-1){
            const newArr = [...pokeArr];
            newArr[index]={...item, clicked:true};
            
            setPokeArr(yatesShuffle([...newArr]));
        }
    }

    const arrCards = pokeArr.map(
        (pokemon)=>{
            return <Card item={pokemon} key={pokemon.id} handleClick={handleClick} />
        }
    );

    return (
        <>
        <h3>score: {score}</h3>
        <section className="deck">
            {arrCards}
        </section>
        </>
    )
}

export {Deck};
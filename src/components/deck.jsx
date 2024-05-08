import { useState } from 'react';
import '../styles/deck.css';
import { Card } from './card';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
}

const pokemonArray = [
    { id: 1, name: "Bulbasaur", clicked: false },
    { id: 2, name: "Ivysaur", clicked: false },
    { id: 3, name: "Venusaur", clicked: false },
    { id: 4, name: "Charmander", clicked: false },
    { id: 5, name: "Charmeleon", clicked: false },
    { id: 6, name: "Charizard", clicked: false },
    { id: 7, name: "Squirtle", clicked: false },
    { id: 8, name: "Wartortle", clicked: false },
    { id: 9, name: "Blastoise", clicked: false },
    // Add more Pokémon objects as needed
];

function Deck({pokeArr=pokemonArray}){

const [pokeDeck, setPokeDeck]= useState(pokeArr);

const [score, setScore]=useState(0);
const [highScore, setHighScore]= useState(score);

const arr = pokeDeck.map((item)=>{
    return(
        <Card item={item} handleClick={handleClick} key ={item.id}/>
    )
})

function handleClick(item){
    if(item.clicked){
        setScore(0);
        const newArr=[];
        for(const item of pokeDeck){
            newArr.push({...item, clicked:false});
        }
        setPokeDeck(shuffleArray(newArr));
        console.log('newArr: ',newArr)
        console.log('pokeArr: ',pokeDeck);
        return;
    }
    else{
        let val = score+1;
        setScore(val);
        if(val>highScore)
            setHighScore(val);
    }

    const index = pokeDeck.findIndex((element)=>{
        return element.id === item.id;
    });

    if(index!==-1){
        const newDeck = [...pokeDeck];
        newDeck[index]={...item, clicked:true};
        setPokeDeck(shuffleArray([...newDeck]));
    }
}

return(<>
<p className='press-start-2p-regular'>
    Score: {score}
</p>
<p className='press-start-2p-regular'>
    High Score: {highScore}
</p>
<section className='deck'>
{arr}
</section>
</>
)


}

export {Deck};
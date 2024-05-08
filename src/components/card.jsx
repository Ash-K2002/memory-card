import '../styles/card.css';


function Card({item,handleClick})
{
function onClick()
{
    handleClick(item);
    
}
return (
    <div className="card" onClick={onClick}>
        <h3 className='card-name press-start-2p-regular'>{item.name}</h3>
        <img className='card-icon' src={item.sprites.front_default} alt="item.name" />
    </div>
);
}

export {Card};
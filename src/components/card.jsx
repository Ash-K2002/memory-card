import '../styles/card.css'

function Card({item, handleClick}){

const onClick = ()=>{
handleClick(item);
}

return (<>
<div className="card" onClick={onClick}>
{item.name}
</div>
</>)
}

export {Card};
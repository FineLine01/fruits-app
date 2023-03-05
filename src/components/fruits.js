export default function Fruit(props){

    return (
        <div className="fruit-item" style={{backgroundColor: props.color}}>
            <img src={props.imageUrl} alt={props.name} />
            <h3>{props.name}</h3>
        </div>
    )
}
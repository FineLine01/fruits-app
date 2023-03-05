export default function Joke(props) {
    return (
        <div className="jokeItem">
            <h3>{props.jokeQue}</h3>
            <button className="what">???</button>
            <h4>{props.jokeAns}</h4>
        </div>
    )
}
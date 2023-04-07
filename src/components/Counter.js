import React from "react";

const Counter = () => {
    const [star, StarRating] = React.useState(0);

    const incrementScore = () => {
        setStar(star + 1);
    }

    const decrementScore = () => {
        setStar(score - 1);
    }

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => decrementScore}</button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => incrementScore}</button>
        </div>
    );
}

export default Counter;
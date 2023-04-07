import React from "react";

const Counter = (props) => {

    // const incrementScore = () => {
    //     setStar(star + 1);
    // }

    // const decrementScore = () => {
    //     setStar(score - 1);
    // }

    return (
        <div className="counter">
            <button className="counter-action decrement"> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment"> + </button>
        </div>
    );
}

export default Counter;
import React from 'react';
import PropTypes from 'prop-types';

//Used to be:
//class Counter extends React.Component {
//but since we did a 'named import', we also imported {Component} above
const Counter = ({ index, score, changeScore }) => {

    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => changeScore(index, -1)}> - </button>
            <span className="counter-score">{ score }</span>
            <button className="counter-action increment" onClick={() => changeScore(index, 1)}> + </button>
        </div>
    );
}


Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    changeScore: PropTypes.func
};
    
export default Counter;
    
    
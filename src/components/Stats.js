import React from 'react'
import PropTypes from 'prop-types';

const Stats = ({ players }) => {

    const totalPlayer = players.length;
    //The reduce method takes a callback func that get exc on each elmt in the arry
    //The callback takes 2 parameters. An 'accumulator' that adds up the return values and the 'curr' item being processed in the array
    const totalPoints = players.reduce((total, iPlayer) => {
        return total + iPlayer.score;
    }, 0); //Initialize total as 0

    return (
        <table className="stats">
            <tbody>
                <tr>
                    <td>Players:</td>
                    <td>{totalPlayer}</td>
                </tr>
                <tr>
                    <td>Total Points:</td>
                    <td>{totalPoints}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
        score: PropTypes.number
    }))
};

export default Stats
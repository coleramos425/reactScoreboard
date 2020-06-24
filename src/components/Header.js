import React from 'react';
import PropTypes from 'prop-types';

import Stats from './Stats';
import Stopwatch from './Stopwatch';

//Instead of passing props, pass specific attributes we want
const Header = ({players, title}) => { //This is 'destructoring' which allows us to avoid having to use props._____ all over our code. Now we just use specific names
  
  return (
    <header>
    <Stats players={players}/>
    <h1>{ title }</h1>
    <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  players: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string
};

Header.defaultProps = {
  title: 'Scoreboard'
};

export default Header;
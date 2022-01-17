import React from 'react';
import styles from './NavBar.module.css';

const NavBar = ( { changeRover } ) => {
  //Change rover selection in root component state. Triggers page rerender and new image feed.
  let handleRoverClick = (e) => {
    changeRover(e.target.value);
  };

  return (
    <div className={styles.titleBar}>
      <h1 className={styles.title}>Mars Rover Feed</h1>

      <div className={styles.roverWindow}>
        <h2>Rover</h2>
        <button value='curiosity' onClick={handleRoverClick} className="navButton">Curiosity</button>
        <button value='opportunity' onClick={handleRoverClick} className="navButton">Opportunity</button>
        <button value='spirit' onClick={handleRoverClick} className="navButton">Spirit</button>
      </div >
    </div>
  );
};

export default NavBar;





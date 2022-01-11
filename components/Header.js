import React from 'react';
import styles from './Header.module.css';
import Button from '@material-ui/core/Button';


const Header = ( { changeDisplay, changeRover }) => {

  //Header Bar to select Rover, Browse page, Liked Page

  let handleViewClick = (e) => {
    console.log('clicked a button', e.target.value);
    changeDisplay(e.target.value);
  };

  let handleRoverClick = (e) => {
    console.log('clicked a button', e.target.value);
    changeRover(e.target.value);
  };

  return (
    <div className={styles.header}>
      <h1>Mars Rover Feed</h1>

      <button variant="contained" value='browse' onClick={handleViewClick}>New Photos</button>
      <button variant="contained" value='liked' onClick={handleViewClick}>Liked Images</button>

      <div className={styles.buttonBar}>
        <p>Choose a Rover: </p>
        <button value='curiosity' onClick={handleRoverClick}>Curiosity</button>
        <button value='opportunity' onClick={handleRoverClick}>Opportunity</button>
        <button value='spirit' onClick={handleRoverClick}>Spirit</button>
      </div>
    </div>
  );
};

export default Header;
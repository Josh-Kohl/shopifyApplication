import React from 'react';
import styles from './Header.module.css';
import Button from '@material-ui/core/Button';


const Header = () => {

  //Header Bar to select Rover, Browse page, Liked Page

  return (
    <div className={styles.header}>
      <h1>Mars Rover Feed</h1>

      <Button variant="contained">New Photos</Button>
      <Button variant="contained">Liked Images</Button>

      <div className={styles.buttonBar}>
        <p>Choose a Rover: </p>
        <Button variant="contained">Curiosity</Button>
        <Button variant="contained">Opportunity</Button>
        <Button variant="contained">Spirit</Button>
      </div>
    </div>
  );
};

export default Header;
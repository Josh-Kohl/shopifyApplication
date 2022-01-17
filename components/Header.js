
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  bar: {
    display: 'flex',
    backgroundColor: '#C67B5C',
    color: 'black',
    justifyContent: 'space-around'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = ( { changeRover } ) => {
  const classes = useStyles();

  //Change rover selection in root component state. Triggers page rerender with new image feed.
  let handleRoverClick = (e) => {
    changeRover(e.currentTarget.value);
  };

  return (
    //add position='static' to keep bar in place
    <AppBar className={classes.bar}>
      <Toolbar>
        <Typography variant="h3" className={classes.title}>
          Rover Feed
        </Typography>

        <Button color="inherit" onClick={handleRoverClick} value='curiosity' style={{
          backgroundColor: '#3d405b',
          color: 'white',
          fontSize: '100%',
          marginLeft: '2px',
          marginRight: '2px',
        }}
        >
          Curiosity
        </Button>

        <Button color="inherit" onClick={handleRoverClick} value='opportunity' style={{
          backgroundColor: '#3d405b',
          color: 'white',
          fontSize: '100%',
          marginLeft: '2px',
          marginRight: '2px',
        }}>
          Opportunity
        </Button>

        <Button color="inherit" onClick={handleRoverClick} value='spirit' style={{
          backgroundColor: '#3d405b',
          color: 'white',
          fontSize: '100%',
          marginLeft: '2px',
          marginRight: '2px',
        }}>
          Spirit
        </Button>

      </Toolbar>
    </AppBar>
  );
};

export default Header;
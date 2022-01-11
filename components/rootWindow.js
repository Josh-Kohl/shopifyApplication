import React, { useState, useEffect } from 'react';
import axios from 'axios';
import credentials from '../credentials';

import Header from './Header';
import BrowseWindow from './BrowseWindow';
import LikedWindow from './LikedWindow';


const RootWindow = () => {
  const [display, setDisplay] = useState('Rover');
  const [rover, setRover] = useState('curiosity');
  const [images, setImages] = useState([]);

  //fx to change display - to be used in header
  //fx to change rover -  to be used in header

  //fx to get images from API

  // const getPhotos = ({rover}) => (
  //   fetch()
  // );

  //Returns a random Sol date (day since mission start) up to 750
  let randomSolDay = () => {
    return Math.floor(Math.random() * (750));
  };

  let queryNASA = (route) => {
    axios.get(route)
      .then((response) => {
        //Edge case where response contains empty array.
        if (response.data.photos.length === 0) {
          throw ('Looks like there was an issue grabbing new photos. Refresh the page to try again.');
        }

        setImages(response.data.photos);
      }).catch((err) => {
        console.log(err);
        alert('Oops. Looks like your images got lost in space. Refresh the page to request new images.');
      });
  };

  useEffect(() => {
    let sol = randomSolDay();
    let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&api_key=${credentials.NASA_API_KEY}`;

    queryNASA(roverRoute);
  }, []);

  return (
    <div className='root'>
      <Header changeDisplay={setDisplay} changeRover={setRover}></Header>
      <BrowseWindow images={images} ></BrowseWindow>
    </div>
  );
};

export default RootWindow;

//TODO



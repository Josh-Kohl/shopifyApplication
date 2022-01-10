import React, { useState, useEffect } from 'react';
import axios from 'axios';
import credentials from '../ credentials';

import Header from './Header';
import BrowseWindow from './BrowseWindow';
import LikedWindow from './LikedWindow';

const RootWindow = () => {
  const [display, setDisplay] = useState('Rover');
  const [Rover, setRover] = useState('curiosity');
  const [images, setImages] = useState([]);

  //fx to change display - to be used in header
  //fx to change rover -  to be used in header

  //fx to get images from API

  // const getPhotos = ({rover}) => (
  //   fetch()
  // );

  useEffect(() => {
    // eslint-disable-next-line quotes
    let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover}/photos?sol=1000&api_key=${credentials.NASA_API_KEY}`;

    axios.get(roverRoute)
      .then((response) => {
        console.log(response.data);
        // setImages(response.data);
      });
  }, []);



  return (
    <div className='root'>
      <Header changeDisplay={setDisplay} changeRover={setRover}></Header>
      <BrowseWindow></BrowseWindow>
    </div>
  );
};

export default RootWindow;
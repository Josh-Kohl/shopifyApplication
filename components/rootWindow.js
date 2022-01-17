import React, { useState, useEffect } from 'react';
import axios from 'axios';
import credentials from '../credentials';

import NavBar from './NavBar';
import BrowseWindow from './BrowseWindow';

const RootWindow = () => {
  const [rover, setRover] = useState('curiosity');
  const [images, setImages] = useState([]);

  //Returns a random Sol date (day since mission start) up to 750
  let randomSolDay = () => {
    return Math.floor(Math.random() * (750));
  };

  let queryNASA = (route) => {
    axios.get(route)
      .then((response) => {
        let roverPhotos = response.data.photos;
        //Edge case for response with empty photo array.
        if (roverPhotos.length === 0) {
          throw (`Looks like ${rover} didn't take any photos on this day. Refresh the page to try again.`);
        }

        //Assign each photo a property to display liked icon on image tile.
        //This process has O(n) time complexity, however the API query returns a single page with a max of 25 items.
        roverPhotos.forEach((photo) => {
          photo.liked = false;
        });

        setImages(response.data.photos);
      }).catch((err) => {
        console.log(`Error in API query for ${route}: `, err);
        alert(`Oops. Looks like ${rover} didn't take any photos on this day. Refresh the page to try a new day.`);
      });
  };

  //Run API query on initial page loading and selection of new rover
  useEffect(() => {
    let sol = randomSolDay();
    let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&camera=fhaz&api_key=${credentials.NASA_API_KEY}`;
    queryNASA(roverRoute);
  }, [rover]);

  return (
    <div className='root'>
      <NavBar changeRover={setRover}></NavBar>
      <BrowseWindow images={images} ></BrowseWindow>
    </div>
  );
};

export default RootWindow;




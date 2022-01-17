import React, { useState, useEffect } from 'react';
import axios from 'axios';
import credentials from '../credentials';

import BrowseWindow from './BrowseWindow';
import Header from './Header';

const RootWindow = () => {
  const [rover, setRover] = useState('curiosity');
  const [images, setImages] = useState([]);

  //Returns random index for Sol date (day since mission start) from validSolDate obj
  let randomSolDay = (rover) => {
    let validSolDates = {
      curiosity: [67, 65, 679, 999, 524, 706, 707],
      opportunity: [340, 603, 554, 394, 70, 169, 999],
      spirit: [556, 290, 192, 45, 671, 747, 74]
    };

    let index = Math.floor(Math.random() * 7);

    return validSolDates[rover][index];
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
    let sol = randomSolDay(rover);
    let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&page=1&camera=fhaz&api_key=${credentials.NASA_API_KEY}`;
    queryNASA(roverRoute);
  }, [rover]);

  return (
    <div className='root'>
      <Header changeRover={setRover} rover={rover}></Header>
      <BrowseWindow images={images} ></BrowseWindow>
    </div>
  );
};

export default RootWindow;




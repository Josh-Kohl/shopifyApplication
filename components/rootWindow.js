import React, { useState, useEffect } from 'react';
import axios from 'axios';
import credentials from '../credentials';

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
    // let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover}/photos?sol=1000&page=1&api_key=${credentials.NASA_API_KEY}`;
    let roverRoute = `https://api.nasa.gov/mars-photos/api/v1/rovers/${Rover}/photos?sol=1000&page=1&api_key=${process.env.NASA_API_KEY}`;

    axios.get(roverRoute)
      .then((response) => {
        console.log(response.data.photos);
        setImages(response.data);
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

// Individual Photo Data: {
//   camera:{
//     full_name: "Front Hazard Avoidance Camera"
//     id: 20
//     name: "FHAZ"
//     rover_id: 5
//   },
//   earth_date: "2015-05-30"
//   id: 102693
//   img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01000/opgs/edr/fcam/FLB_486265257EDR_F0481570FHAZ00323M_.JPG"
//   rover:{
//     id: 5
//     landing_date: "2012-08-06"
//     launch_date: "2011-11-26"
//     name: "Curiosity"
//     status: "active"
//   },
//   sol: 1000}



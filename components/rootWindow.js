import React, { useState, useEffect } from 'react';
// import Head from 'next/head';

import Header from './Header';
import BrowseWindow from './BrowseWindow';
import LikedWindow from './LikedWindow';

const RootWindow = () => {
  const [display, setDisplay] = useState('Rover');
  const [Rover, setRover] = useState('Curiosity');
  const [images, setImages] = useState([]);

  //fx to change display - to be used in header
  //fx to change rover -  to be used in header

  //fx to get images from API

  // const getPhotos = ({rover}) => (
  //   fetch()
  // );

  // useEffect(() => {
  //   axios.get(baseURL)
  //     .then((response) => {
  //       setPost(response.data);
  //     });
  // }, []);



  return (
    <div className='root'>
      <Header changeDisplay={setDisplay} changeRover={setRover}></Header>
      <BrowseWindow></BrowseWindow>
    </div>
  );
};

export default RootWindow;
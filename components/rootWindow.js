import React from 'react';
// import Head from 'next/head';

import Header from './Header';
import BrowseWindow from './BrowseWindow';
import LikedWindow from './LikedWindow';

const RootWindow = () => {

  //Header Bar to select Rover, Browse page, Liked Page

  return (
    <div className='root'>
      <Header></Header>
      <BrowseWindow></BrowseWindow>
      <LikedWindow></LikedWindow>
    </div>
  );
};

export default RootWindow;
import React from 'react';
import '@styles/globals.css';
import '@styles/header.css';


const Application = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default Application;
import Head from 'next/head';
import React from 'react';
import Header from '@components/Header';
// import RootWindow from '@components/RootWindow';
import RootWindow from '../components/rootWindow';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>JKohl Intern Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <React.StrictMode>
          <RootWindow></RootWindow>
        </React.StrictMode>
      </main>
    </div>
  );
}


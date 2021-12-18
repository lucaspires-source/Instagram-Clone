import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Feed from '../components/Feed';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Instagram 2.0 by Lucas Ribeiro</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Feed />
    </div>
  );
}

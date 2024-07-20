import React from 'react'
import "./Home.scss";
import { Head } from './components';
import { Header, Makers, Services, WhyUs } from '../../components';

export const Home = () => {
  return (
    <main className="main">
      <Header />
      <Head />
      <Services />
      <WhyUs />
      <Makers />
    </main>
  )
}

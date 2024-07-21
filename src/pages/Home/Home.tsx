import React from 'react'
import "./Home.scss";
import { Diagnostics, Head, Makers, OurWork, Services, WhyUs } from './components';
import { Header } from '../../components';

export const Home = () => {
  return (
    <main className="main">
      <Header />
      <Head />
      <Services />
      <WhyUs />
      <Makers />
      <Diagnostics />
      <OurWork />
    </main>
  )
}

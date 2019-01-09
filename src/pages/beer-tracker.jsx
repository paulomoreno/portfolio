/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
 
import donwload_app_store from '../images/download_on_the_app_store_badge_us-uk_135x40.svg';

import '../styles/global';
// import '../styles/beerTracker';

const Content = styled.div`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const Title = styled.h1`
  ${tw('text-4xl font-sans text-white mb-2 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  ${tw('text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const DonwloadAppStore = styled.img`
  ${tw('w-32 xl:w-48 h-auto')};
`;

const Index = () => (
  <React.Fragment>
    <Content speed={0.4} offset={0}>
      <Hero>
          <Title>Beer Tracker</Title>
          <Subtitle>Easily track how many beers (glasses, mugs, cans, bottles...) you drink.</Subtitle>
          <DonwloadAppStore src={donwload_app_store} alt="Donwload on the App Store" /> 
      </Hero>
    </Content>
  </React.Fragment>
);

export default Index;
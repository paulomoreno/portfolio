/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { waveAnimation } from '../../styles/animations';

import donwload_app_store from '../../images/download_on_the_app_store_badge_us-uk_135x40.svg';
import screenshot_1 from '../../images/beertracker/screenshot.png';

import '../../styles/global';
import '../../styles/beerTracker';

const Content = styled.div`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('pt-16 w-full xl:w-2/3')};
`;

const HorizontalWrapper = styled.div`
  width: 100%;
  ${tw('flex justify-start flex-auto items-center flex-col md:flex-row')};
`;

const VerticalWrapper = styled.div`
  width: 100%;
  ${tw('flex justify-center flex-col')};
  z-index: 25;
`;

const Title = styled.h1`
  ${tw('text-4xl font-sans text-white mb-2 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
`;

const Subtitle = styled.p`
  ${tw('text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const Screenshot = styled.img`
  ${tw('w-48 xl:w-2/5 h-auto md:pr-16')};
  z-index: 0;
`;

const DonwloadAppStore = styled.img`
  ${tw('w-32 xl:w-48 h-auto')};
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b pin-r fixed w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
  opacity: 0.5;
`;

const Navbar = styled.div`
  ${tw('pin-t h-16 w-full absolute')};
  background-color: rgba(0,0,0,0.5);
`;

const NavbarContainer = styled.div`
  ${tw('w-2/3 mx-auto text-white flex items-center h-full')};
`;

const NavbarLink = styled.a`
  ${tw('text-white text-2xl no-underline font-sans text-orange')};
  border-width: 1px;
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-3px);
  }  
`;

const Index = () => (
  <React.Fragment>

    <Navbar>
      <NavbarContainer>
        <NavbarLink href="/">Paulo Moreno</NavbarLink>
      </NavbarContainer>
    </Navbar>

    <Content speed={0.4} offset={0}>
      <Hero>
        <HorizontalWrapper>
          <Screenshot src={screenshot_1} alt="BeerTracker Screenshot"/>
          <VerticalWrapper>
            <Title>Beer Tracker</Title>
            <Subtitle>Easily track how many beers (glasses, mugs, cans, bottles...) you drink.</Subtitle>
            {/* <a href="#"><DonwloadAppStore src={donwload_app_store} alt="Donwload on the App Store" /></a> */}
          </VerticalWrapper>
        </HorizontalWrapper>
      </Hero>

      <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 338.05" preserveAspectRatio="none">
              <path className={waveAnimation}>
                <animate
                  attributeName="d"
                  values="M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z;M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z"
                  repeatCount="indefinite"
                  dur="30s"
                />
              </path>
            </svg>
          </InnerWave>
        </WaveWrapper>

    </Content>
  </React.Fragment>
);

export default Index;
/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SEO from '../components/SEO';
import SVG from '../components/SVG';
import ProjectCard from '../components/ProjectCard';
import { rotate, UpDown, UpDownWide, waveAnimation } from '../styles/animations';
import { hidden } from '../styles/utils';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
import avatar from '../images/avatar.jpeg';
import hero_avatar from '../images/hero_avatar.png';

import das_icon from '../images/project-icons/das_icon.png';
import bandejao_icon from '../images/project-icons/bandejao_icon.png';
import compare_icon from '../images/project-icons/compare_icon.png';
import beerTracker_icon from '../images/project-icons/beerTracker_icon.png';
 
import '../styles/global';

const Divider = styled(ParallaxLayer)`
  ${tw('absolute w-full h-full')};
  background: ${props => props.bg};
  svg {
    fill: ${props => props.fill};
  }
  clip-path: ${props => props.clipPath};
`;

const DividerMiddle = styled(Divider)`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
`;

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
`;

const HeroInner = styled.div`
  ${tw('flex justify-start flex-auto items-start flex-col lg:flex-row')};
`;

const Inner = styled.div`
  ${tw('w-full xxl:w-2/3 text-center lg:text-left')};
`;

const HeroAvatar = styled.img`
  ${tw('w-48 h-auto mx-auto mt-24 sm:mt-0 lg:mr-8 xl:w-64')};
`;

const BigTitle = styled.h1`
  ${tw('text-5xl lg:text-6xl font-sans text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
`;

const Title = styled.h1`
  ${tw('text-4xl lg:text-4xl font-sans text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(${triangle});
    position: absolute;
    background-size: 40px;
    animation: ${rotate} 4s linear infinite;
    left: -60px;
    top: 5px;
  }
`;

const Subtitle = styled.p`
  ${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
`;

const ProjectsWrapper = styled.div`
  ${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const WaveWrapper = styled.div`
  ${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
`;

const InnerWave = styled.div`
  ${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
`;

const AboutHero = styled.div`
  ${tw('flex flex-col lg:flex-row items-center mt-8')};
`;

const Avatar = styled.img`
  ${tw('rounded-full w-32 xl:w-48 shadow-lg h-auto')};
`;

const AboutSub = styled.span`
  ${tw('text-white font-sans pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
`;

const AboutDesc = styled.p`
  ${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify')};
`;

const ContactText = styled.p`
  ${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Footer = styled.footer`
  ${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <SEO />
    <Parallax pages={5}>
      <Divider speed={0.2} offset={0}>
        <UpDown>
          <SVG icon="coffee_cup" className={hidden} width={48} fill={colors.orange} left="10%" top="20%" />
          <SVG icon="gamepad" width={48} fill={colors.red} left="60%" top="70%" />
          <SVG icon="coffee_mug" width={6} fill={colors['grey-darker']} left="60%" top="15%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="mouse" className={hidden} width={16} fill={colors['blue-dark']} left="80%" top="10%" />
          <SVG icon="coffee_cup" className={hidden} width={12} fill={colors.white} left="90%" top="50%" />
          <SVG icon="cpu" width={16} fill={colors['grey-darker']} left="70%" top="90%" />
          <SVG icon="coffee_cup" className={hidden} width={16} fill={colors['grey-darkest']} left="30%" top="65%" />
          <SVG icon="cpu" width={6} fill={colors['grey-darkest']} left="75%" top="10%" />
          <SVG icon="camera" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cpu" className={hidden} width={24} fill={colors['grey-darker']} left="5%" top="70%" />
        <SVG icon="cpu" width={6} fill={colors['grey-darkest']} left="4%" top="20%" />
        <SVG icon="cpu" width={12} fill={colors['grey-darkest']} left="50%" top="60%" />
        <SVG icon="camera" width={8} fill={colors['grey-darkest']} left="95%" top="90%" />
        <SVG icon="camera" className={hidden} width={24} fill={colors['grey-darker']} left="40%" top="80%" />
        <SVG icon="coffee_cup" className={hidden} width={8} fill={colors['grey-darker']} left="25%" top="5%" />
        <SVG icon="cpu" width={64} fill={colors.green} left="95%" top="5%" />
        <SVG icon="coffee_mug" className={hidden} width={64} fill={colors.purple} left="5%" top="90%" />
        <SVG icon="coffee_mug" width={6} fill={colors['grey-darkest']} left="10%" top="10%" />
        <SVG icon="coffee_mug" width={12} fill={colors['grey-darkest']} left="40%" top="30%" />
        <SVG icon="gamepad" width={16} fill={colors['grey-darker']} left="10%" top="50%" />
        <SVG icon="gamepad" width={8} fill={colors['grey-darker']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={0}>
        <Hero>
          <HeroInner>
            <HeroAvatar src={hero_avatar} alt="Paulo Moreno" />
            <div>
              <BigTitle>
                Hi, <br/> I'm Paulo Moreno.
              </BigTitle>
              <Subtitle>
                I'm a Brazilian Computer Scientist who works to cause a positive impact on users.
              </Subtitle>
            </div>
          </HeroInner>
        </Hero>
      </Content>
      <DividerMiddle
        bg="linear-gradient(to right, SlateBlue 0%, DeepSkyBlue 100%)"
        speed={-0.2}
        offset={1.1}
        factor={2}
      />
      <Content speed={0.4} offset={1.2} factor={2}>
        <Inner>
          <Title>Projects</Title>
          <ProjectsWrapper>
            <ProjectCard
              title="Compare"
              link="https://compare.pmoreno.me"
              bg="linear-gradient(to right, #009245 0%, #75cc0c 100%)"
              icon={compare_icon}
              iconAlt="Compare App Icon"
            >
              iOS App for comparing prices using the Rule of Three.
            </ProjectCard>
            <ProjectCard
              title="Beer Tracker"
              link="/beer-tracker"
              bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
              icon={beerTracker_icon}
              iconAlt="Beer Tracker App Icon"
            >
              iOS beer tracker App - to track how many beers you have.
            </ProjectCard>
            <ProjectCard
              title="Bandejão"
              link="/bandejao"
              bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
              icon={bandejao_icon}
              iconAlt="Bandejão Icon"
            >
              iOS App and Website to check USP São Carlos University's restaurant menu.
            </ProjectCard>
            <ProjectCard
              title="DAS"
              link="https://das.paulomoreno.me"
              bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
              icon={das_icon}
              iconAlt="DAS Icon"
            >
             Queue managemente system for doctor appointments.
            </ProjectCard>
          </ProjectsWrapper>
        </Inner>
      </Content>
      <Divider speed={0.1} offset={1} factor={2}>
        <UpDown>
          <SVG icon="coffee_mug" width={6} fill={colors.white} left="85%" top="75%" />
          <SVG icon="camera" width={8} fill={colors.teal} left="70%" top="20%" />
          <SVG icon="coffee_cup" className={hidden} width={8} fill={colors.orange} left="25%" top="5%" />
          <SVG icon="cpu" className={hidden} width={24} fill={colors.white} left="17%" top="60%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="mouse" className={hidden} width={16} fill={colors.green} left="20%" top="90%" />
          <SVG icon="coffee_cup" className={hidden} width={12} fill={colors.white} left="90%" top="30%" />
          <SVG icon="cpu" width={16} fill={colors.yellow} left="70%" top="90%" />
          <SVG icon="coffee_cup" className={hidden} width={16} fill={colors.teal} left="18%" top="75%" />
          <SVG icon="cpu" width={6} fill={colors.white} left="75%" top="10%" />
          <SVG icon="camera" className={hidden} width={8} fill={colors.green} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cpu" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="cpu" width={12} fill={colors.pink} left="80%" top="60%" />
        <SVG icon="coffee_mug" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="coffee_mug" width={12} fill={colors.yellow} left="29%" top="26%" />
        <SVG icon="gamepad" width={16} fill={colors.red} left="75%" top="30%" />
        <SVG icon="gamepad" width={8} fill={colors.yellow} left="80%" top="70%" />
      </Divider>
      <Divider bg="#23262b" clipPath="polygon(0 16%, 100% 4%, 100% 82%, 0 94%)" speed={0.2} offset={3} />
      <Divider speed={0.1} offset={3}>
        <UpDown>
          <SVG icon="coffee_mug" className={hidden} width={6} fill={colors.blue} left="50%" top="75%" />
          <SVG icon="camera" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="coffee_cup" className={hidden} width={8} fill={colors['grey-darkest']} left="25%" top="5%" />
          <SVG icon="camera" className={hidden} width={24} fill={colors.orange} left="80%" top="80%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="mouse" className={hidden} width={16} fill={colors.purple} left="5%" top="80%" />
          <SVG icon="coffee_cup" className={hidden} width={12} fill={colors.white} left="95%" top="50%" />
          <SVG icon="cpu" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="camera" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cpu" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="cpu" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="coffee_mug" width={6} fill={colors.orange} left="10%" top="10%" />
        <SVG icon="coffee_mug" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="gamepad" width={8} fill={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
      <Content speed={0.4} offset={3}>
        <Inner>
          <Title>About</Title>
          <AboutHero>
            <Avatar src={avatar} alt="John Doe" />
            <AboutSub>
              Computer scientist and technology enthusiast.<br/>
              My goal is to cause a positive impact on users.
            </AboutSub>
          </AboutHero>
          <AboutDesc>
            I work with technology and I like the positive impact that it can have on people's lives. 
            Currently, I work with web development and UX (and I do have some mobile experience). I like how
            the web and mobile environments can reach users and provide value on their daily tasks. So that's 
            why I apply some UX concepts; to make sure I deliver the most value for users.
          </AboutDesc>
        </Inner>
      </Content>
      <Divider fill="#23262b" speed={0.2} offset={4}>
        <WaveWrapper>
          <InnerWave>
            <svg xmlns="http://www.w3.org/2000/svg" viewcoffee_mug="0 0 800 338.05" preserveAspectRatio="none">
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
      </Divider>
      <Content speed={0.4} offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:plizNoSp4m@domain.tld">Hi</a> or find me on other platforms:{' '}
            <a href="https://dribbble.com/LekoArts">Dribbble</a> &{' '}
            <a href="https://www.instagram.com/lekoarts.de/">Instagram</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2018 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. <a href="/icons">Icons Credits</a>
        </Footer>
      </Content>
      <Divider speed={0.1} offset={4}>
        <UpDown>
          <SVG icon="camera" className={hidden} width={8} fill={colors['grey-darkest']} left="70%" top="20%" />
          <SVG icon="coffee_cup" className={hidden} width={8} fill={colors['grey-darkest']} left="25%" top="5%" />
        </UpDown>
        <UpDownWide>
          <SVG icon="coffee_cup" className={hidden} width={12} fill={colors.white} left="95%" top="50%" />
          <SVG icon="cpu" width={6} fill={colors.white} left="85%" top="15%" />
          <SVG icon="camera" className={hidden} width={8} fill={colors['grey-darkest']} left="45%" top="10%" />
        </UpDownWide>
        <SVG icon="cpu" width={6} fill={colors.white} left="4%" top="20%" />
        <SVG icon="cpu" width={12} fill={colors['grey-darkest']} left="70%" top="60%" />
        <SVG icon="coffee_mug" width={12} fill={colors['grey-darkest']} left="20%" top="30%" />
        <SVG icon="gamepad" width={8} fill={colors['grey-darkest']} left="80%" top="70%" />
      </Divider>
    </Parallax>
  </React.Fragment>
);

export default Index;

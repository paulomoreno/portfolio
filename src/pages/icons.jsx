/* global tw */
import React from 'react';
import styled from 'react-emotion';
import 'typeface-cantata-one';
import 'typeface-open-sans';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import SVG from '../components/SVG';
import { rotate } from '../styles/animations';
import { colors } from '../../tailwind';
import triangle from '../images/triangle.svg';
 
import '../styles/global';

const Content = styled(ParallaxLayer)`
  ${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
`;

const SVGReg = styled(SVG)`
  ${tw('mr-4')};
  position: static;
`;

const Hero = styled.div`
  ${tw('w-full xl:w-2/3')};
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

const IconText = styled.p`
  ${tw('text-grey font-sans text-md lg:text-lg')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
  a {
    color: #e07628;
    text-decoration: none;
  }
`;

const Index = () => (
  <React.Fragment>
    <Parallax pages={1}>
      <Content speed={0.4} offset={0}>
        <Hero>
            <Title>Icons</Title>
            <IconText>
                <SVGReg icon="coffee_cup" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/1736836/">Coffee</a> by Made from <a href="https://thenounproject.com/">the Noun Project</a><br/><br/>
                <SVGReg icon="camera" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/308298/">Camera</a> by Alexander Blagochevsky from <a href="https://thenounproject.com/">the Noun Project</a><br/><br/>
                <SVGReg icon="gamepad" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/1698725/">Game</a> by asianson.design from <a href="https://thenounproject.com/">the Noun Project</a><br/><br/>
                <SVGReg icon="mouse" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/2095170/">Computer Mouse</a> by ProSymbols from <a href="https://thenounproject.com/">the Noun Project</a><br/><br/>
                <SVGReg icon="cpu" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/875398/">CPU</a> by Alina Oleynik from <a href="https://thenounproject.com/">the Noun Project</a><br/><br/>
                <SVGReg icon="coffee_mug" width={10} fill={colors.white} /> <a href="https://thenounproject.com/icon/723014/">Cup</a> by arif fajar yulianto from <a href="https://thenounproject.com/">the Noun Project</a>
            </IconText>
        </Hero>
      </Content>
    </Parallax>
  </React.Fragment>
);

export default Index;




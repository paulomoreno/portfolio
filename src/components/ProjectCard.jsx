/* global tw */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Wrapper = styled.a`
  width: 100%;
  ${tw('shadow-lg flex justify-start flex-auto items-start flex-row relative no-underline rounded-lg px-8 py-4 md:py-12 text-white')};
  background: ${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
`;

const TextWrapper = styled.div`
  ${tw('pl-8')};
`;

const Text = styled.div`
  ${tw('opacity-75 font-sans text-sm md:text-base')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  ${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
`;

const IconImg = styled.img`
  ${tw('w-16 xl:w-24 h-auto')};
`;

const ProjectCard = ({ title, link, children, bg, icon, iconAlt, target='' }) => (
  <Wrapper href={link} target={target} rel="noopener noreferrer" bg={bg}>
    { icon ? 
      <IconImg src={icon} alt={iconAlt} /> 
      : null
    }
    <TextWrapper>
      <Title>{title}</Title>
      <Text>{children}</Text>
    </TextWrapper>
  </Wrapper>
);

export default ProjectCard;

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  bg: PropTypes.string.isRequired,
};

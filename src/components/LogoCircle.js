import React from 'react';
import styled from 'styled-components';

const LogoCircle = ({ src, alt }) => {
  return <Circle src={src} alt={alt} />;
};

const Circle = styled.img`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  object-fit: contain; 
  margin: 0.5rem;
  border: 2px solid rgb(92, 188, 177);
	transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
	&:hover {
		transform: scale(1.05);
		border-color: rgb(203, 214, 244);
		box-shadow: 0 4px 8px rgba(203, 214, 244, 0.5);
	}


  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export default LogoCircle;
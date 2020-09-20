import React from 'react';
import Directory from './Directory';
import { HomePageStyledContainer } from './styled-components/Homepage.styles';

export const HomePage = () => (
  <HomePageStyledContainer>
    <Directory />
  </HomePageStyledContainer>
);

//styled components gives the elements a unique class name so that there is no bleeding or clash of class name while other developers are coding on the same projects

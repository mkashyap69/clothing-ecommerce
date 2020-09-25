import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom'; //this is used if we have to use the same styles at many places //or we can use as props in the component to use the same style as of the mentioned component

/* const OptionContainerStyles = css` 
  padding: 10px 15px;
  cursor: pointer;
`; */ export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottom: 20px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
/* 
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`; */

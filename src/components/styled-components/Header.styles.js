import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom'; //this is used if we have to use the same styles at many places

/* const OptionContainerStyles = css` 
  padding: 10px 15px;
  cursor: pointer;
`; */ //or we can use as props in the component to use the same style as of the mentioned component

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;
/* 
export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`; */

import React from 'react';

import { CustomButtonContainer } from './styled-components/CustomButton.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;

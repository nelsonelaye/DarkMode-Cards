import React from 'react';
import styled from 'styled-components';

const Button = ({bgColor, text}) =>  {
  return (
    <Hold bgColor={bgColor}>
       {text}
    </Hold>
  );
}

export default Button;

const Hold = styled.div`
    background-color: ${({bgColor}) => bgColor};
    width: 150px;
    display:flex;
    align-items: center;
    justify-content: center;
    height: 40px;
`;

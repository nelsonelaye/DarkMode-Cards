import React from 'react';
import styled from "styled-components"

function Card({title, content, image, alt, btColor}) {
  return (
   <Container btColor={btColor}>
       <Wrapper>
           <Title>{title} </Title>
           <Content>{content}</Content>
           <Icon>
               <img src={image} alt={alt} />
           </Icon>
       </Wrapper>
   </Container>
  );
}

export default Card;

const Container = styled.div`
    width:300px;
    height:200px;
    border-top-width: 6px  ;
    border-top-style:solid;
    border-top-color:${({btColor}) => btColor};
    display:flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-radius: 10px;
    margin: 15px;
`

const Wrapper = styled.div`
    width: 90%;
    height: 90%;
    background-color: #fff;
    
`

const Title = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 10px;
`

const Content = styled.div`
    color: #5e5e5e;
    font-size: 15px;
    margin-bottom: 30px;
`
const Icon = styled.div`
    width: 100%;
    display:flex;
    justify-content: flex-end;

    img{
        width: 50px;
    }
`
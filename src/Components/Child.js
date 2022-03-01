import React from 'react';
import styled from "styled-components"
import Card from "./Card"
import computer from "../img/computer.png"
import bulb from "../img/bulb.png"
import team from "../img/team.jpg"
import magnifyer from "../img/eye.png"

function Child() {
  return (
      <Container>
          <Headline1>Reliable, efficient delivery</Headline1>
          <Headline2>Powered by Technology</Headline2>
          <TopContent>Our Artificial Intelligence powered tools uses millions of project data points to ensure that your project is successful.</TopContent>
        <CardHolder>
            <AllCards>
                <Card 
                title="Supervisor"
                content="You got a list of items where every item has a value and a width."
                image={magnifyer}
                btColor={"#20b602"} />

                <MiddleCards>
                    <Card
                    title="Team Builder"
                    content="Scan our talent network to create the optimal team for your project."
                    image={team}
                    btColor={"#cc0101"}
                    />

                    <Card 
                    title="Karma"
                    content="Regularly evaluates our talent to ensure quality."
                    image={bulb}
                    btColor={"#cc8501"}
                    />
                </MiddleCards>
                
                <Card title="Calculator"
                content="Uses data from past projects to provide better delivery estimates."
                image={computer} 
                btColor={"#0120cf"}/>

            </AllCards>
        </CardHolder>
      </Container>
        
     
    
    
  );
}

export default Child;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Headline1 = styled.div`
    font-size: 40px;
    color:#5e5e5e;
`

const Headline2 = styled.div`
    font-size: 40px;
    font-weight: 700;
`
const TopContent = styled.div`
    font-size: 17px;
    color: #5e5e5e;
    width: 500px;
    margin-top: 10px;
    text-align: center;
`

const CardHolder = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  /* min-height: 100vh; */
    margin-top: 30px;
`

const AllCards = styled.div`
  display:flex;
  align-items: center;
  justify-content:center;
  

`

const MiddleCards = styled.div`
  display: flex;
  flex-direction:column;
`

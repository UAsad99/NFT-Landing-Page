import styled, { ThemeProvider } from 'styled-components'
import { Carousel, Button } from "components";
import {dark} from 'styles/Themes';

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  background-color: #202020;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  width: 75%;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 70em){
    width: 85%;
  }

  @media (max-width: 64em){
    width: 100%;
    flex-direction: column;

    &>*:last-child{
      width: 80%;
    }
  }

  @media (max-width: 40em){
    &>*:last-child{
      width: 90%;
    }
  }
`;

const Box = styled.div`
  width: 50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em){
    min-height: 50vh;
  }
`;
 
const Title = styled.h2`
  font-size: ${({theme}) => theme.fontxxl};
  text-transform: capitalize;
  color: #fff;
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em){
    width: 100%;
    text-align:center;
  }

  @media (max-width: 40em){
    font-size: ${({theme}) => theme.fontxl};
  }

  @media (max-width: 30em){
    font-size: ${({theme}) => theme.fontlg};
  }
`;

const SubText = styled.p`
  font-size: ${({theme}) => theme.fontlg};
  color: #fff;
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight:400;
  
  @media (max-width: 64em){
    width: 100%;
    text-align:center;
    font-size: ${({theme}) => theme.fontmd};
  }

  @media (max-width: 40em){
    font-size: ${({theme}) => theme.fontmd};
  }

  @media (max-width: 30em){
    font-size: ${({theme}) => theme.fontsm};
  }
`;

const SubTextLight = styled.p`
  font-size: ${({theme}) => theme.fontmd};
  color: ${({theme}) => `rgba(255, 255, 255, 0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight:400;

  @media (max-width: 64em){
    width: 100%;
    text-align:center;
    font-size: ${({theme}) => theme.fontsm};

  }
  @media (max-width: 40em){
    font-size: ${({theme}) => theme.fontsm};

  }
  @media (max-width: 30em){
    font-size: ${({theme}) => theme.fontxs};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-self: flex-start;

  @media (max-width: 64em){
    width: 100%;

    button{
      margin: 0 auto;
    }
  }
`;

const About = () => (
  <Section id="about">
    <Container>
      <Box> 
        <Carousel />
      </Box>
      <Box> 
        <Title>
          Welcome To The <br /> Weirdos Club.
        </Title>
        <SubText>
          The WEIRDOS CLUB is a private collection of NFTs—unique digital collectibles. The Weirdos are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS.
        </SubText>
        <SubTextLight>
          With more than 200+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
        </SubTextLight>
        <ButtonContainer>
          <ThemeProvider theme={dark}>
            <Button
              color="#000"
              text="JOIN OUR DISCORD"
              link="#"
            />
          </ThemeProvider>
        </ButtonContainer>
      </Box>
    </Container>
  </Section>
);

export default About;
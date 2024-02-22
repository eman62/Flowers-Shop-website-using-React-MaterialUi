import React, { useState, useEffect } from 'react';
import { Grid, Card, CardMedia, Typography, Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;


const HeadingTypography = styled(Typography)`
  font-family: cursive;
  font-size: 5vw;
  text-wrap: nowrap;
  font-style: italic;
  animation: ${({ animateLeft }) => (animateLeft ? slideInLeft : '')} 1s forwards;
`;

const BodyTypography = styled(Typography)`
  font-family: cursive;
  font-size: ${({ fontSize }) => fontSize};
  text-wrap: ${({ textWrap }) => textWrap};
  animation: ${({ animateRight }) => (animateRight ? slideInRight : '')} 1s forwards;
`;

const Section1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textContent, setTextContent] = useState({
    heading: 'Wedding',
    body: 'Events & Corporate Services',
    button: 'Start Planning',
  });
  const [fontSize, setFontSize] = useState("4vw"); 
  const [textWrap,setTextWrap] = useState("nowrap")
  const [animateLeft, setAnimateLeft] = useState(false);
  const [animateRight, setAnimateRight] = useState(false);

  const imageSources = [
    "https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_660.png?v=1681531468&width=1500",
    "https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_657.png?v=1681531467&width=1400"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % imageSources.length);
      if (currentImageIndex % 2 === 0) {
        setTextContent({
          heading: 'Deliver Same Day',
          body: 'Our One-Of-Kind artisan Bouqs are hand crafted with care for your loved one (no cookie cutter designs here ) and flowers delivered in as little as 2 hours. ',
          button: 'SHOP ARTISAN',
        });
        setFontSize("1.2vw"); 
        setTextWrap("wrap");
        setAnimateLeft(true);
        setAnimateRight(false);
      } else {
        setTextContent({
          heading: 'Wedding',
          body: 'Events & Corporate Services',
          button: 'Start Planning',
        });
        setFontSize("4vw"); 
        setTextWrap("nowrap");
        setAnimateLeft(false);
        setAnimateRight(true);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentImageIndex, imageSources]);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12} textAlign="center" style={{ position: 'relative' }}>
        <Card>
          <CardMedia
            component="img"
            style={{
              width: '100%',
              transition: 'transform 2s ease-in-out',
              transform: `scale(${currentImageIndex % 2 === 0 ? 1.2 : 1})`,
            }}
            image={imageSources[currentImageIndex]}
            alt={`Image ${currentImageIndex + 1}`}
          />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', padding: '20px', borderRadius: '8px', color: 'white' }}>
            <HeadingTypography animateLeft={animateLeft} sx={{fontSize:"5vw"}}>{textContent.heading}</HeadingTypography>
            <BodyTypography fontSize={fontSize} textWrap={textWrap} animateRight={animateRight}>{textContent.body}</BodyTypography>
            <Button variant="contained" sx={{
              width: '16vw',
              height: '10vh',
              marginTop: "25px",
              backgroundColor: '#eda698',
              border: '2px solid white',
              outline: '2px solid #eda698',
              borderTopLeftRadius: '50px',
              borderBottomLeftRadius: '50px',
              borderTopRightRadius: '50px',
              borderBottomRightRadius: '50px',
              '&:hover': {
                backgroundColor: '#87cfc2',
                outline: '2px solid #87cfc2',
              }
            }}>
              {textContent.button}
            </Button>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Section1;

import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { ClientsArray } from "../Data/clientsData";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const extendedClientsArray = [...ClientsArray, ...ClientsArray, ...ClientsArray];

const ClientsPage = () => {
  const [centerIndex, setCenterIndex] = useState(0);
  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setCenterIndex(swiper.realIndex + 1);
  };

  return (
    <Box position="relative" height="100vh" marginBottom="10vh">
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
        <Typography variant="h6" sx={{ color: "#eda698", textAlign: "center", fontFamily: "Dancing Script", fontSize: "2.5em"}}>Our Happy Clients</Typography>
        <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center" }} />
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100%"
        margin="0 auto"
        position="relative"
      >
        <Box width="80%" maxWidth="1200px">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            loop={true} // Enable infinite loop
            onSlideChange={handleSlideChange}
          >
            {extendedClientsArray.map((client, index) => (
              <SwiperSlide key={index}>
                <Grid container justifyContent="center">
                  <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Box sx={{ textAlign: "center", opacity: centerIndex === index ? 1 : 0.3 }}>
                      <Typography variant="body1" sx={{ color: "#878787", lineHeight: "2em", fontFamily: "Poppins" }}>{client.description}</Typography>
                      <img src={client.src} style={{ display: "block", margin: "5vh auto 3vh auto ", maxWidth: "100%", border: "2px solid white", borderRadius: "20%" }} alt={client.description}></img>
                      <Typography variant="h6" sx={{ color: "#293341", fontFamily: "Poppins", fontSize: "1.1em", marginBottom: ".8vh" }}>{client.name}</Typography>
                      <Typography variant="body1" sx={{ color: "#7b7b7b", fontFamily: "Poppins", fontSize: ".9em" }}>{client.paragraph}</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Box>

     
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          left: '5px',
          transform: 'translateY(-50%)',
          zIndex: 999,
          backgroundColor: "rgba(211,211,211,0.5)", 
          color: 'white',
          width:"5vw",
          height:"10vh",
          '&:hover': {
            backgroundColor: "#87cfc2", 
          },
          '&:hover .MuiIconButton-label': {
            opacity: 1
          }
        }}
        onClick={goPrev}
      >
        &lt;
      </IconButton>
      <IconButton
        sx={{
          position: 'absolute',
          top: '50%',
          right: '5px',
          transform: 'translateY(-50%)',
          zIndex: 999,
          backgroundColor: "rgba(211,211,211,0.8)", 
          color: 'white',
          width:"5vw",
          height:"10vh",
          '&:hover': {
            backgroundColor: "#87cfc2", 
          },
          '&:hover .MuiIconButton-label': {
            opacity: 1 
          }
        }}
        onClick={goNext}
      >
        &gt;
      </IconButton>
    </Box>
  );
}

export default ClientsPage;

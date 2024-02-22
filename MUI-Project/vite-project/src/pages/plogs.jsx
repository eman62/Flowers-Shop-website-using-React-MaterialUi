import React, { useRef, useState } from 'react';
import { Box, Typography, Grid, IconButton } from "@mui/material";
import { BlogPostsArray } from '../Data/blogPostsData';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const extendedBlogsArray = [...BlogPostsArray, ...BlogPostsArray, ...BlogPostsArray];
const BlogsPage = () => {
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
    <Box sx={{ position: "relative", backgroundImage: "url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_659.png?v=1683083782&width=1512')", marginTop: "17vh", backgroundRepeat: "no-repeat", backgroundSize: "cover", marginBottom: "10vh" }}>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "15vh" }}>
        <Typography variant="h6" sx={{ color: "#eda698", textAlign: "center", fontFamily: "Dancing Script", fontSize: "2.5em", marginTop: "10vh" }}>Recent Blog Posts</Typography>
        <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center", marginBottom: "20px" }} />
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
            loop={true}
            onSlideChange={handleSlideChange}
          >
            {extendedBlogsArray.map((post, index) => (
              <SwiperSlide key={index}>
                <Grid item key={post.id} xs={12} sm={12} md={12} lg={3} sx={{ marginLeft: "1vw", position: "relative" }}>
                  <Box sx={{ position: "relative", }}>
                    <img src={post.src} style={{ width: "100%", height: "auto" }} alt={`Blog post ${post.id}`} />
                    <Box sx={{ position: "absolute", top: 10, right: 10, backgroundColor: "white", padding: "5px 10px", zIndex: 1, width: "4vw", height: "11vh" }}>
                      <Typography variant="subtitle1" sx={{ fontFamily: "Poppins", textAlign: "center", fontSize: "1.5vw" }}><span style={{ display: "block", fontWeight: "bold" }}>{post.date}</span>May</Typography>
                    </Box>
                  </Box>
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "1.1em", marginBottom: "1vh", "&:hover": { color: "#eda698" } }}>{post.header}</Typography>
                  <Typography sx={{ fontFamily: "Poppins", fontSize: "1em", color: "#7b7b7b" }}>{post.description}</Typography>
                </Grid>
              </SwiperSlide>
            ))}
          </Swiper>
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
          width: "5vw",
          height: "10vh",
          borderRadius: "0", 
          '&:hover': {
            backgroundColor: "#eda698",
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
          width: "5vw",
          height: "10vh",
          borderRadius: "0", 
          '&:hover': {
            backgroundColor: "#eda698",
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

    </Box>
  );
}

export default BlogsPage;

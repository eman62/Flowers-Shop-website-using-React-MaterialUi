import { Typography, Grid, Card, CardActionArea, CardMedia, Button,Box } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react';

const InstaImagesPage = () => {
    const imagesarray = [
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/01_afe4d290-d8a2-409c-9c68-af8c6afef884.jpg?v=1682414804&width=400",
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/03_39f0c6aa-2ed4-469f-acf3-b598d48581c1.jpg?v=1682414804&width=400",
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/04_83bd675b-734c-4664-b83b-f46f8fd05f7e.jpg?v=1682414804&width=400",
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/05_be9ab863-ef75-4d91-8f25-f2c4af1f46ca.jpg?v=1682414804&width=400",
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/06_beca3736-fbe0-4a41-8318-76ad6c440c95.jpg?v=1682414804&width=400",
        "https://demo-ocolus-2.myshopify.com/cdn/shop/files/02_a27f9fd1-3632-44d5-9d7a-ad77b0d4080a.jpg?v=1682414804&width=400"
    ];

    const [hoveredCard, setHoveredCard] = React.useState(null);

    return (
        <div style={{ backgroundColor: "rgb(255, 245, 238)", padding: "20px" }}>
            <Typography variant="h6" sx={{ color: "#eda698", textAlign: "center", fontFamily: "Dancing Script", fontSize: "2.3em", marginTop: "15vh" }}>Inspired by the beauty of nature</Typography>
            <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "15vh" }}>
                <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center", marginBottom: "20px" }} />
            </div>

            <div style={{ position: "relative" }}>
                <Grid container spacing={2} justifyContent="center">
                    {imagesarray.map((card, index) => (
                        <Grid item xs={12} sm={6} md={2} key={index}>
                            <Card
                                sx={{
                                    width: "100%",
                                    overflow: "visible",
                                    position: "relative",
                                    filter: hoveredCard === index ? "grayscale(100%)" : "none"
                                }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                <CardActionArea>
                                    <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
                                        <div style={{ transition: 'transform 0.2s', overflow: "visible" }}>
                                            <CardMedia
                                                component="img"
                                                image={card}
                                                style={{ width: "100%", height: "auto", transform: 'scale(1)', transition: 'transform 0.9s' }}
                                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                            />
                                            {hoveredCard === index && (
                                                <InstagramIcon sx={{
                                                    position: "absolute",
                                                    top: "50%",
                                                    left: "50%",
                                                    transform: "translate(-50%, -50%)",
                                                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                                                    color: "#fff"
                                                }} />
                                            )}
                                        </div>
                                    </div>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "transparent", border: "2px solid white", width: "25vw", height: "9vh", display: "flex", justifyContent: "center", alignItems: "center" ,"&:hover":{border:"2px solid #eda698"}}}>
                    <Button variant="contained" sx={{ width: "23vw", height: "7vh", backgroundColor: "white", color: "black", fontFamily: "Poppins", fontSize: "1.5vw","&:hover":{backgroundColor:"#eda698",color:"white"} }}>@OCOULS on INSTGRAM</Button>
                </Box>
            </div>
        </div>
    );
}

export default InstaImagesPage;

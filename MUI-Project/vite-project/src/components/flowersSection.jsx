import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Button, ButtonGroup, Typography, Grid, Container } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import { flowersArray } from './flowersData';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
const style = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
`;
const FlowersSection = () => {
    const [hoveredCard, setHoveredCard] = useState(null);
    const [hoveredIcon, setHoveredIcon] = useState(false);

    const handleMouseEnter = (id) => {
        setHoveredCard(id);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <Container maxWidth="lg">
        <div style={{display:'flex',justifyContent:"center",alignItems:"center",flexDirection:"column",marginBottom:"15vh"}}>
        <Typography variant="h6" sx={{color: "#eda698" ,textAlign:"center",fontFamily:"Dancing Script",fontSize:"2.3em",marginTop:"70vh"}}>Flowers We’ve in Shop</Typography>
        <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center",marginBottom:"20px"}} />
        </div>
        <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh', marginLeft: "20px" }}>
            {flowersArray.map((product) => (
                <Grid item xs={12} sm={6} md={4} key={product.id}>
                    <Card
                        onMouseEnter={() => handleMouseEnter(product.id)}
                        onMouseLeave={handleMouseLeave}
                        sx={{backgroundColor:"rgb(255, 245, 238, .5)",boxSizing:"border-box", maxWidth: 350, height: "85vh", border: "1px solid #eda698", marginBottom: "30px", "&:hover": { border: "3px solid #eda698" }, transition: "border-width 0.3s ease-in-out" }} >
                        <CardActionArea disableTouchRipple disableFocusRipple>
                          <CardMedia
                             component="img"
                             height="100%"
                             image={product.src}
                             alt={product.name}
                             style={{
                             transform: hoveredCard === product.id ? 'scale(1.1)' : 'scale(1)',
                             transition: 'transform 2s ease-in-out, box-shadow 0.3s ease-in-out', 
                             boxShadow: hoveredCard === product.id ? '0 0 20px rgba(0, 0, 0, 0.3)' : 'none',   }}/>

                            <CardContent>
                                <div style={{ opacity: hoveredCard === product.id ? 1 : 0, transition: "opacity 0.3s ease-in-out" }}>
                                    <ButtonGroup variant="contained" aria-label="Basic button group" style={{ width: "100%", minHeight: "8vh", transition: "opacity 0.3s ease-in-out" }}>
                                        <Button style={{ border: "none", transitionDelay: hoveredCard === product.id ? '0.1s' : '0s' }} sx={{ "&:hover": { backgroundColor: "#87cfc2" }, border: "none", outline: "none", backgroundColor: "#eda698" }} ><SearchIcon /></Button>
                                        <Button style={{ border: "none", transitionDelay: hoveredCard === product.id ? '0.2s' : '0s' }} sx={{ "&:hover": { backgroundColor: "#87cfc2"}, width: "100%", margin: "0", outline: "none", border: "none", backgroundColor: "#eda698" }} onMouseOver={() => setHoveredIcon(true)} onMouseOut={() => setHoveredIcon(false)}>{hoveredIcon ? <ShoppingBagIcon/> : "ADD TO CART"}</Button>
                                        <Button style={{ border: "none", transitionDelay: hoveredCard === product.id ? '0.3s' : '0s' }} sx={{ "&:hover": { backgroundColor: "#87cfc2" }, border: "none", outline: "none", backgroundColor: "#eda698" }}><FavoriteBorderIcon /></Button>
                                    </ButtonGroup>
                                </div>
                                <hr style={{ color: "lightpink", margin: "0", marginBottom: "10px" }} />
                                <Typography gutterBottom variant="h6" component="div" style={{ textAlign: "center" }}>
                                    {product.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ fontSize: "1.2em", textAlign: "center", margin: "10px" }}>
                                    {product.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", color: "lightblue", fontSize: "1.4em"}}>
                                    ${product.cost}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
               
            ))}
             <Button variant="contained"  sx={{
                width: '13vw',
                height: '10vh',
                backgroundColor: '#eda698',
                border: '2px solid white',
                outline: '2px solid #eda698',
                borderTopLeftRadius: '50px',
                borderBottomLeftRadius: '50px',
                borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px',
                '&:hover': {
                    backgroundColor: '#e26e57',
                },
            }}>VIEW ALL</Button>
        </Grid>
        </Container>
    );
};

export default FlowersSection;

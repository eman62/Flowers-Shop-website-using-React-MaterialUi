import { Box, Typography } from "@mui/material";
import React from "react";
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Box
            sx={{
                height: "60vh",
                borderTop: "1px solid lightgray",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <img
                src="https://demo-ocolus-2.myshopify.com/cdn/shop/files/Symbol.svg?v=1683621727&width=400"
                style={{ width: "15vw", height: "15vh" }}
                alt="Footer logo"
            ></img>
            <Box sx={{ display: "block", marginTop: "2vh" }}>
                <a href="#" className="footer-link">HOME</a>
                <a href="#" className="footer-link">CATEGORIES</a>
                <a href="#" className="footer-link">DETAILS</a>
                <a href="#" className="footer-link">SALE OFF</a>
                <a href="#" className="footer-link">BLOGS</a>
                <a href="#" className="footer-link">CONTACT</a>
            </Box>
            <Box sx={{ display: "block", marginTop: "5vh" }}>
                <FacebookIcon sx={{color:"gray",margin:"0 1vw ",width:"1.5vw"}} className="footer-icon"></FacebookIcon>
                <XIcon sx={{color:"gray",margin:"0 1vw ",width:"1.5vw"}} className="footer-icon"></XIcon>
                <InstagramIcon sx={{color:"gray",margin:"0 1vw ",width:"1.5vw"}} className="footer-icon"></InstagramIcon>
                <SportsSoccerIcon sx={{color:"gray",margin:"0 1vw ",width:"1.5vw"}} className="footer-icon"></SportsSoccerIcon>
                <LinkedInIcon sx={{color:"gray",margin:"0 1vw ",width:"1.5vw"}} className="footer-icon"></LinkedInIcon>       
            </Box>
            <Typography variant="body1" sx={{color:"gray",fontFamily:"Poppins",marginTop:"3vh"}}>© 2023 Ocolus. All Rights Reserved</Typography>
        </Box>
    );
};

export default Footer;

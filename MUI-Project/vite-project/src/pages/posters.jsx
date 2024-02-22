import React from 'react';
import { Container, Grid, Paper, Typography, Button, ThemeProvider, createTheme,TextField,Box } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
const theme = createTheme();

const PostersPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ marginTop: "20vh", marginBottom: "20vh" }}>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} md={12} lg={6}>
              <Paper
                sx={{
                  backgroundImage: "url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_27.png?v=1683626052&width=900')",
                  height: "100vh",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>

                <div style={{ backgroundImage:"url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_31_64613b62-0e94-490c-af7e-04d6f062b224.png?v=1683680637')",backgroundSize:"cover", width: "80%", height: "90%",display: "flex",flexDirection: "column",justifyContent: "center", alignItems: "center"}}>
                  <Typography variant='body1' sx={{fontSize:".9em",margin:" 15px 0 "}}>ENDS FRIDAY</Typography>
                  <Typography variant='body1' sx={{fontSize:"1.1em",marginBottom:"20px"}}>Discount 20% Off</Typography>
                  <Typography variant='h6' sx={{fontFamily:"'Playfair Display', serif",fontWeight:"bold",color:"#293341",fontSize:"1.7em",textAlign:"center",marginBottom:"15px"}}><span style={{display:"block"}}>VALENTINE</span>FLOWERS SALE</Typography>
                  <Typography variant='body1' sx={{fontSize:".9em",textAlign:"center",marginBottom:"30px"}}>Sale up to 60% on<span style={{display:"block"}}>50+ products include</span> valentine flowers</Typography>
                   <Button variant="contained"  sx={{
                    width: '14vw',
                    height: '9vh',
                    backgroundColor: '#eda698',
                    border: '2px solid white',
                    outline: '2px solid #eda698',
                    borderTopLeftRadius: '50px',
                    borderBottomLeftRadius: '50px',
                    borderTopRightRadius: '50px',
                    borderBottomRightRadius: '50px',
                    '&:hover': {
                        backgroundColor: '#87cfc2',
                        outline:"1px solid #87cfc2"
                    },
                }}>SHOP NOW</Button>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Paper sx={{
                    backgroundImage: "url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_62_caf3c1ff-6c5e-4f4f-ab90-24233373dcae.png?v=1683626118&width=600')",
                    height: "47vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}>
                  <Typography sx={{paddingLeft:"3vw",paddingTop:"4vh",color: "#c19680",fontFamily:"'Playfair Display', serif",fontSize:"2em",lineHeight:"6vh",marginBottom:"2vh"}}>Italia Ranunculus<span style={{display:"block"}}>Bouquet</span></Typography>
                  <Typography variant='body1'component="a"href="#"sx={{color: "#c19680", textDecoration: "none", borderBottom: "1px solid #c19680",    paddingBottom: "2px",  letterSpacing: "1.5px",
                  fontSize: ".9em",
                  marginLeft: "3vw",
                  fontFamily: 'Poppins',
                  "&:hover": {
                  color: "#87cfc2", 
                  borderBottomColor: "#87cfc2" } }}> SHOP NOW</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={12}>
                  <Paper sx={{
                    backgroundImage: "url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Background_1.png?v=1683626192&width=600')",
                    height: "49vh",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    border:".2px solid #F2D2BD",
                  }}>
                      <Typography variant='body1' sx={{fontFamily:"'Playfair Display', serif",fontWeight:"bold",color:"#293341",fontSize:"1.8em",textAlign:"center",paddingTop:"4vh"}}>Save 20% and Free Delivery</Typography>
                      <Typography variant='body1' sx={{padding:"1em",fontSize:"1.2em",color:"#7b7b7b",fontFamily:"Poppins",textAlign:"center"}}>Have flowers in your home all year round! Set up a subscrip-tion and recieve a new bouquet once a week, twice a month, or monthly. Makes an amazing gift!</Typography>
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <TextField   variant="outlined"  placeholder="Enter your email address" fullWidth size="medium"
        
        sx={{
          border: "1px solid pink",
          width: "35vw",
          borderRadius: '50px', 
          overflow: 'hidden',
          "&:hover": {
            borderColor: "pink", 
          }
        }}
        InputProps={{
          endAdornment: (
            <TelegramIcon sx={{ color: "gray", width: "3vw", height: "6vh" }} />
          ),
        }}
      />
    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default PostersPage;

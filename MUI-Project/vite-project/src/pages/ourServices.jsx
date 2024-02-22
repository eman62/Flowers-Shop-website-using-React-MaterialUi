import { Typography } from "@mui/material";
import { servicesArray } from "../Data/ourServiceData";
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';

const style = `
   @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Poppins:wght@400;700&display=swap');

`;

const OurServicesPage = () => {
    const handleMouseOver = (e) => {
        const svg = e.target;
        svg.style.transition = 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out';
        svg.style.opacity = 0;
        svg.style.transform = 'scale(0.9)';
        setTimeout(() => {
            svg.style.opacity = 1;
            svg.style.transform = 'scale(1)';
        }, 300);
    };

    return (
        <div style={{marginBottom:"15vh", marginTop:"12vh",backgroundColor:"rgb(255, 245, 238,.5)", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <style>{style}</style>
            <div style={{textAlign: 'center'}}>
                <Typography variant="h6" sx={{ color: "#87cfc2" ,fontWeight:"bold",textAlign:"center",letterSpacing:"2px",marginBottom:"10px"}}>OUR SERVICES</Typography>
                <Typography variant="h6" sx={{ color: "#eda698" ,textAlign:"center",fontFamily:"Dancing Script",fontSize:"2.3em",marginBottom:"10vh"}}>We bring Summer freshness<br></br> to your home!</Typography>
                <Grid container spacing={2} justifyContent="center">
                    {servicesArray.map((service) => (
                        <Grid item key={service.id} xs={6} sm={6} md={4} lg={3.5}>
                            <Grid container direction="column" alignItems="center">
                                <svg className={service.class} viewBox="0 0 59 58" width="50" height="58" style={{ transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out' }} onMouseOver={handleMouseOver}>
                                    <path d={service.path}></path>
                                </svg>
                                <Typography variant="h6" sx={{textAlign:"center",marginTop:"10px",fontFamily:"'Playfair Display', serif",color:"#293341",fontSize:"1.5em"}}>{service.title}</Typography>
                                <Divider variant="middle" sx={{ width: "20%", margin: "10px 0", backgroundColor: "black" }}/>
                                <Typography variant="body1" component="p" sx={{textAlign:"center",color:"#878787",lineHeight:"2em",fontFamily:"Poppins"}}>{service.Discription}</Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );   
}

export default OurServicesPage;

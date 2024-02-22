import Typography from "@mui/material/Typography";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { categoriesArray } from "../Data/categoriesData";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');
`;

const CategoriesPage = () => {
  return (
    <div style={{position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", backgroundImage: `url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Homepage22_1.png?v=1684828595&width=1512')` }}>
        <style>{style}</style>
        <Typography variant="h6" sx={{color: "#eda698" ,textAlign:"center",fontFamily:"Dancing Script",fontSize:"2.3em",marginTop:"70vh"}}>All Categories</Typography>
        <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center",marginBottom:"20px"}} />
        <Typography variant="body1" sx={{textAlign:"center",fontFamily:"sans-serif",color:"gray",fontSize:"1.1em"}}>On the other hand, we denounce with righteous indignation and dislike men who are so <br></br>beguiled and demoralized by the charms of pleasure of the moment</Typography>
     <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center",marginTop:"10vh",marginBottom:"40vh"}}>
        {categoriesArray.map((category) => (
         <div key={category.id} style={{backgroundColor:"white", width:"25vw",margin: "20px",border:".2 px solid lightgray ", overflow: "visible" }}>
            <div style={{backgroundColor:"white", position: 'relative', overflow: "visible",border:"1px solid lightgray" }}>
              <Card sx={{ width: "22vw", margin: "20px", overflow: "visible" }}>
                <CardActionArea>
                  <div style={{ width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
                    <div style={{ transition: 'transform 0.2s', overflow: "visible" }}>
                      <CardMedia
                        component="img"
                        image={category.src}
                        alt={category.title}
                        style={{ width: "100%", height: "auto", transform: 'scale(1)', transition: 'transform 0.9s' }}
                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                      />
                    </div>
                  </div>
                </CardActionArea>
                <div style={{ width:"15vw",height:"10vh", position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'white', padding: '5px 10px',border:"1px solid lightgray" , overflow: "visible", textAlign: 'center' }}>
                <Typography 
                 variant="" component="a"sx={{ display: "flex",justifyContent: "center", alignItems: "center", textAlign: "center", width: "100%", height: "100%","&:hover":{color:"#e26e57"} }}>{category.title}</Typography>
                </div>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoriesPage;

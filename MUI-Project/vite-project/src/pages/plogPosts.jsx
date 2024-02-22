import { Box, Typography, Grid } from "@mui/material";
import { BlogPostsArray } from "../Data/blogPostsData";

const BlogPostsPage = () => {
  return (
    <Box sx={{position: "relative", backgroundImage:"url('https://demo-ocolus-2.myshopify.com/cdn/shop/files/Layer_659.png?v=1683083782&width=1512')",marginTop:"17vh",backgroundRepeat:"no-repeat", backgroundSize: "cover",marginBottom:"10vh"}}>
      <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", flexDirection: "column", marginBottom: "15vh" }}>
        <Typography variant="h6" sx={{ color: "#eda698", textAlign: "center", fontFamily: "Dancing Script", fontSize: "2.5em",marginTop:"10vh"}}>Recent Blog Posts</Typography>
        <img src="https://demo-ocolus-2.myshopify.com/cdn/shop/t/3/assets/svg_title.svg" alt="Title" style={{ alignSelf: "center", marginBottom: "20px" }} />
      </Box>

      <Grid container spacing={2} justifyContent="center">
        {BlogPostsArray.map((post) => (
          <Grid item key={post.id} xs={12} sm={12} md={12} lg={3} sx={{marginLeft:"1vw",position: "relative" }}>
            <Box sx={{ position: "relative", }}>
              <img src={post.src} style={{ width: "100%", height: "auto" }} alt={`Blog post ${post.id}`} />
              <Box sx={{ position: "absolute", top: 10, right: 10, backgroundColor: "white", padding: "5px 10px", zIndex: 1,width:"4vw",height:"11vh" }}>
                <Typography variant="subtitle1" sx={{ fontFamily:"Poppins",textAlign:"center",fontSize:"1.5vw" }}><span style={{display:"block",fontWeight:"bold"}}>{post.date}</span>May</Typography>
              </Box>
            </Box>
            <Typography sx={{fontFamily:"Poppins",fontSize:"1.1em",marginBottom:"1vh","&:hover":{color:"#eda698"}}}>{post.header}</Typography>
            <Typography sx={{fontFamily:"Poppins",fontSize:"1em",color:"#7b7b7b"}}>{post.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BlogPostsPage;

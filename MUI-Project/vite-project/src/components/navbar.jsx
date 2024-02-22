import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function AppBar1() {

  return (
    <AppBar position="static" sx={{ backgroundColor: "white", height: "20vh", justifyContent: "center", boxShadow: "none", margin: "auto" }}>     
        <Toolbar disableGutters>
          <Typography
            variant="img"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 3,
              marginLeft:"10vw",
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              alignItems: 'center',
            }}
          >
            <img src='https://demo-ocolus-2.myshopify.com/cdn/shop/files/logo-h22.png?v=1680161048&width=210' alt="Logo" style={{ marginRight: "30px" }} />
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', width: '40%',marginRight:"70px" }}>
            <TextField
               variant="outlined"
               placeholder="Search for products"
               fullWidth
               size="small"
               sx={{ fontStyle: 'italic' ,marginLeft:"2vw"}}
               InputProps={{
               endAdornment: (
              <SearchIcon sx={{ mr: 1, color: 'action.active', opacity: 0.7 }} />
                ),
               }}/>
            </Box>


          <Box sx={{ display: 'flex', alignItems: 'center', ml: 1, margin: "30px" }}>
             < IconButton sx={{ '&:hover': { color: 'lightblue' } }}>
                <ShoppingBagIcon sx={{ color: "lightgray", mr: 0 }} />
              </IconButton>
           <Box sx={{ display: 'flex', flexDirection: 'column', ml: 1 }}>
              <Typography variant="a" color="textPrimary" sx={{ color: "gray", cursor: 'pointer', '&:hover': { color: 'lightblue' } }}>
                  Your Cart
               </Typography>
               <Typography variant="a" color="textSecondary" sx={{ color: "gray", cursor: 'pointer', '&:hover': { color: 'lightblue' } }}>
                  0 items
              </Typography>
             </Box>
          </Box>

        </Toolbar>
      
    </AppBar>
  );
}
export default AppBar1;

import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

function AppBar2() {
  const navItems = ['HOME', 'SHOP', 'PRODUCTS', 'BLOG', 'PORTFOLIO', 'PAGE', `BUY THEME!`];

  return (
    <AppBar position="static" sx={{ backgroundColor: "#87cfc2", height: "11vh", justifyContent: "center", boxShadow: "none", margin: " 0px auto 0 auto",display: { xs: 'none', md: 'flex' }, }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
            <List sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              {navItems.map((item, index) => (
                <ListItem key={item} disablePadding sx={{ marginX: 2 }}>
                  <Link style={{ textDecoration: 'none', color: 'inherit' ,textWrap:"nowrap"}}>
                    <ListItemText primary={item} sx={{ '&:hover': { color: 'black' } }} />
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppBar2;

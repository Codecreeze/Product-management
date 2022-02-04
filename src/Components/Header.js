import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {persistor} from '../stateman/store'

function Header() {
  const navigate = useNavigate();
  return (
  <div>
      <AppBar position='static'>
           <Toolbar >
             <Typography variant='h6' component="div" sx={{flexGrow:1}} >
              PRODUCT INVENTORY MANAGEMENT
             </Typography>
             <Typography variant='subtitle1' >
               Hello, {window.localStorage.getItem("IS_LOGGED_IN")}
             </Typography> &emsp;
             <Button onClick={ async() => {
               
               await persistor.purge()
               window.localStorage.removeItem("IS_LOGGED_IN")
               navigate('/')

             }} variant='outlined' color="inherit">Logout</Button>
           </Toolbar>
         </AppBar>

      

  </div>
  );
}

export default Header;

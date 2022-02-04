import { Box, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LoginModal from '../Components/LoginModal';
import { Navigate, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';



const FrontPage = () => {
  const [mode, setMode] = useState(false);
  const navigate = useNavigate();

  return (

    <div>
      {mode && <LoginModal handleClose={() => setMode(false)}/>}

      <Box mt={10}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Box mt={10}>
              <Box mt={12}>
                <Grid container justifyContent="center">
                  <Grid item xs={8}>
                    <Box display="flex">
                      <Box mr={3}>
                        <Typography variant="h4" style={{ fontWeight: "bold" }}>
                          {
                            window.localStorage.getItem("IS_LOGGED_IN") ? 
                            `Hello ${window.localStorage.getItem("IS_LOGGED_IN")}!`
                            : "You can Login Here To Add Products"
                          }
                          </Typography>
                        <Box mt={5} >

                        {
                            window.localStorage.getItem("IS_LOGGED_IN") ? 
                            
                            <Button
                            variant="contained"
                            size="large"
                            startIcon={<DashboardIcon />}
                            style={{ backgroundColor: "#174ae3" }}
                            onClick={ () => navigate('/dashboard') }
                            color="primary"
                          >
                            Goto Dashboard
                          </Button>
                            
                            : <Button
                            variant="contained"
                            size="large"
                            style={{ backgroundColor: "#174ae3" }}
                            onClick={() => setMode(true)}
                            color="primary"
                          >
                            Login
                          </Button>
                        }
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <img src='home.png' alt='home-image' />
          </Grid>
        </Grid>
      </Box>


    </div>



  );
};

export default FrontPage;

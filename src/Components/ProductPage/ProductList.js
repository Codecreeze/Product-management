import React, { useState } from 'react';
import { Box, Typography, Grid, Button, Divider } from "@mui/material";
import AddProducts from './AddProducts';
import ListView from './ListView';
import SearchBar from './SearchBar';

function ProductList() {
  const [formModal, setFormModal] = useState(false);

  
  return (
    <>
      {formModal && <AddProducts formData={formModal} handleClose={() => setFormModal(false)} />}
      <Box mt={10} mb={5} mr={10} ml={10}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Box display="flex">
                <Box mr={3}>
                  <Typography variant="h5" style={{ fontWeight: "bold" }} >My Products</Typography>
                </Box>
                <Button onClick={() => setFormModal(true)}
                  variant="contained" color="primary">Add</Button>
              </Box>
            </Grid>
            <Grid item xs={4}><SearchBar /></Grid>
          </Grid>
        </Box>
        <Divider />
      </Box>
      <div>
        <ListView setFormModal={setFormModal} />
      </div>
    </>
  );
}

export default ProductList;

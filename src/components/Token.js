import React from 'react'
import '../App.css'
import TokenInputs from './TokenInputs'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Token = () => {
  return (
    <>
    <div className='heading'>Token Generator Application</div>
     <TokenInputs />
     <Box sx={{marginLeft:"25%"}}>
     <Box sx={{ marginTop:"40px" }}>
      <Grid container >
        <Grid  item xs={2}>
          <div className='blue-boxes'>xs=2</div>   
        </Grid>
        <Grid  item xs={2}>
          <div className='blue-boxes'>xs=2</div>   
        </Grid>
        <Grid  item xs={2}>
          <div className='blue-boxes'>xs=2</div>   
        </Grid>
       
      </Grid>
    </Box>

    <Box className='margin' marginBottom='20%'>
        
      <Grid container >
        <Grid className='margin' item xs={2}>
          <div className='red-boxes'>xs=2</div>   
        </Grid>
        <Grid className='margin' item xs={2}>
          <div className='red-boxes'>xs=2</div>   
        </Grid>
        <Grid className='margin' item xs={2}>
          <div className='red-boxes'>xs=2</div>   
        </Grid>
        </Grid>
    </Box>
    </Box>
    </>
  )
}

export default Token
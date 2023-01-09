import React from 'react'
import '../App.css'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const TokenInputs = () => {
  return (
    <>
    <Box>
    <form className='container'>
        <Box sx={{display:"flex",flexDirection:'column',justifyContent:'center',marginRight:'30%',color:'blue'}}>
            <Box className='blue-container'>Generate Blue Token</Box>
    <TextField  id="outlined-basic" label="No. of blue Tokens" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="Blue token prefix" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="Blue token per row" variant="outlined" />
    
    </Box>
   
    <Box sx={{display:"flex",flexDirection:'column',justifyContent:'center',width:'30%'}}>
    <Box className='red-container'>Generate Red Token</Box>
    <TextField id="outlined-basic" label="No. of Red Tokens" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="Red token prefix" variant="outlined" />
    <br/>
    <TextField id="outlined-basic" label="Red token per row" variant="outlined" />
    </Box>

    
    </form>
    <Box sx={{display:'flex',justifyContent:'center',marginTop:'50px'}}>
        <Button  variant="contained">Generate</Button>
        <Box sx={{paddingLeft:'50px'}}>
        <Button variant="contained">Clear</Button>
        </Box>
    </Box>
    </Box>
    </>
  )
}

export default TokenInputs
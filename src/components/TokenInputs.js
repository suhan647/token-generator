import '../App.css'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const TokenInputs = (props) => {
    return (
        <>
            <Box>
                <form className='container'>
                    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', marginRight: '30%', color: 'blue' }}>
                        <Box className='blue-container'>Generate Blue Token</Box>
                        <TextField label="No. of blue Tokens" variant="outlined" onChange={(e) => { props.setBlueToken(e.target.value) }} />
                        <br />
                        <TextField label="Blue token prefix" variant="outlined" onChange={(e) => { props.setBluePrefix(e.target.value) }} />
                        <br />
                        <TextField label="Blue token per row" variant="outlined" onChange={(e) => { props.setBlueRow(e.target.value) }} />
                    </Box>

                    <Box sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', width: '30%' }}>
                        <Box className='red-container'>Generate Red Token</Box>
                        <TextField label="No. of Red Tokens" variant="outlined" onChange={(e) =>{props.data.setRedToken(e.target.value)}}/>
                        <br />
                        <TextField label="Red token prefix" variant="outlined" onChange={(e) =>{props.data.serRedPrefix(e.target.value)}}/>
                        <br />
                        <TextField label="Red token per row" variant="outlined" onChange={(e) =>{props.data.setRerRow(e.target.value)}}/>
                    </Box>

                </form>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Button variant="contained" onClick={props.HandleGenerate}>Generate</Button>
                    <Box sx={{ paddingLeft: '50px' }}>
                        <Button variant="contained" onClick={props.clear}>Clear</Button>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default TokenInputs
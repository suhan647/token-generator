import '../App.css'
import React, { useState } from 'react'
import TokenInputs from './TokenInputs'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Token = () => {

    const [blueToken, setBlueToken] = useState(0)
    const [bluePrefix, setBluePrefix] = useState('')
    const [blueRow, setBlueRow] = useState(0)
    const [blueArray, setBlueArray] = useState([])

    let bluearr = []
    const HandleGenerate = () => {

        for (let i = 1; i <= blueToken; i++) {
            bluearr.push(i)
            setBlueArray([...bluearr])
            setBluePrefix(bluePrefix)
        }
        console.log([blueArray]);
    }


    const clear = () => {
        setBlueArray([])
        console.log(blueArray);
    }

    return (
        <>
            <div className='heading'>Token Generator Application</div>
            <TokenInputs HandleGenerate={HandleGenerate} blueToken={blueToken} setBlueToken={setBlueToken} bluePrefix={bluePrefix} setBluePrefix={setBluePrefix} blueRow={blueRow} setBlueRow={setBlueRow} clear={clear} />

            <Box sx={{ marginLeft: "25%" }}>
                <Box sx={{ marginTop: "40px" }}>
                    <Grid container >
                        {blueArray.map((token, i) => {
                            return (
                                <>
                                    <Grid key={i} item xs={2}>
                                        <div className='blue-boxes'>{bluePrefix}{token}</div>
                                    </Grid>
                                </>
                            )
                        })}
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
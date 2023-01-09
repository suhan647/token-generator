import '../App.css'
import React, { useState } from 'react'
import TokenInputs from './TokenInputs'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Token = () => {

    //blue tokens
    const [blueToken, setBlueToken] = useState(0)
    const [bluePrefix, setBluePrefix] = useState('')
    const [blueRow, setBlueRow] = useState(0)
    const [blueArray, setBlueArray] = useState([])


    //red tokens
    const [redToken, setRedToken] = useState(0)
    const [redPrefix, serRedPrefix] = useState('')
    const [redRow, setRerRow] = useState(0)
    const [redArray, setredArray] = useState([])

    let data = {
        redToken,
        setRedToken,
        redPrefix,
        serRedPrefix,
        redRow,
        setRerRow
    }



    console.log(redToken);

    let bluearr = []
    let redarr = []

    const HandleGenerate = () => {

        for (let i = 1; i <= blueToken; i++) {
            bluearr.push(i)
            setBlueArray([...bluearr])
            serRedPrefix(redPrefix)
        }
        console.log([blueArray]);

        //red
        for (let i = 1; i <= redToken; i++) {
            redarr.push(i)
            setredArray([...redarr])
            setBluePrefix(bluePrefix)
        }
        console.log([blueArray]);
    }


    const clear = () => {
        setBlueArray([])
        setredArray([])
        console.log(blueArray);
    }

    return (
        <>
            <div className='heading'>Token Generator Application</div>
            <TokenInputs HandleGenerate={HandleGenerate} blueToken={blueToken} setBlueToken={setBlueToken} bluePrefix={bluePrefix} setBluePrefix={setBluePrefix} blueRow={blueRow} setBlueRow={setBlueRow} clear={clear} data={data} />

            <Box sx={{ marginLeft: "25%" }}>
                <Box sx={{ marginTop: "40px" }}>
                    <Grid container >
                        {blueArray.map((token, i) => {
                            return (
                                <>
                                    <Grid key={i} item xs={3}>
                                        <div className='blue-boxes'>{bluePrefix}{token}</div>
                                    </Grid>
                                </>
                            )
                        })}
                    </Grid>
                </Box>

                <Box className='margin' marginBottom='20%'>

                    <Grid container >
                        {redArray.map((token, i) => {
                            return (
                                <>
                                    <Grid key={i} className='margin' item xs={3}>
                                        <div className='red-boxes'>{redPrefix}{token}</div>
                                    </Grid>
                                </>
                            );
                        })}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Token
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


    const [row, setRow] = useState([]);
    const [redRows, setRedRows] = useState([])

    let data = {
        redToken,
        setRedToken,
        redPrefix,
        serRedPrefix,
        redRow,
        setRerRow,
    }
    // console.log(blueToken);
    let bluearr = []
    let redarr = []
    

    const HandleGenerate = () => {
        //blue
        for (let i = 1; i <= blueToken; i++) {
            bluearr.push(i)
            setBlueArray([...bluearr])
        }

        let total = blueToken
        let perRow = blueRow
        let elePerRow = Math.ceil(total / perRow);


        let counter = 1

        for (var i = 0; i < elePerRow; i++) {
            for (var j = 0; j < perRow; j++) {
                row.push(<span style={{ height: "20px", marginTop: "10px", color: "blue", padding: 10 }}>{bluePrefix}{counter}</span>)
                if (counter == total) break;
                counter++
            }

            row.push(<br></br>)

        }

        setRow(row)

        console.log(row);

        //red
        for (let i = 1; i <= redToken; i++) {
            redarr.push(i)
            setredArray([...redarr])
        }

        let totalr = redToken
        let perRowr = redRow
        let elePerRowr = Math.ceil(totalr / perRowr);


        let counterr = 1

        for (var i = 0; i < elePerRowr; i++) {
            for (var j = 0; j < perRowr; j++) {
                redRows.push(<span  style={{ marginTop: "10px", color: "red", padding: 10 }}>{redPrefix}{counterr}</span>)
                if (counterr == totalr) break;
                counterr++
            }

            redRows.push(<br></br>)

        }

        setRedRows(redRows)


    }

    const clear = () => {
        setRow([])
        setRedRows([])
        setBlueArray([])
        setredArray([])

    }

    return (
        <>
            <div className='heading'>Token Generator Application</div>
            <TokenInputs HandleGenerate={HandleGenerate} row={row} setRow={setRow} blueToken={blueToken} setBlueToken={setBlueToken} bluePrefix={bluePrefix} setBluePrefix={setBluePrefix} blueRow={blueRow} setBlueRow={setBlueRow} clear={clear} data={data} />

            <Box sx={{ marginLeft: "25%" }}>
                <Box sx={{ marginTop: "40px" }}>
                    <Grid container >


                        <Grid item >
                            {row}

                        </Grid>


                        {/* {blueArray.map((token, i) => {
                            return (
                                <>
                                    <Grid key={i} sx={{ marginTop: '30px' }} item  >

                                        <div className='blue-boxes'>{bluePrefix}{token}</div>
                                    </Grid>
                                </>
                            )
                        })} */}
                    </Grid>
                </Box>

                <Box className='margin' marginBottom='20%'>

                    <Grid container >
                        
                    <Grid item sx={12} >
                            {redRows}

                        </Grid>
                        {/* {redArray.map((token, i) => {
                            return (
                                <>
                                    <Grid key={i} sx={{ marginTop: '30px' }} className='margin' item xs={3}>
                                        <div className='red-boxes'>{redPrefix}{token}</div>
                                    </Grid>
                                </>
                            );
                        })} */}
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Token
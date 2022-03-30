import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, Button } from '@material-ui/core';

/* MADE SOME CHANGES
fetch("http://127.0.0.1:5000/name/" + input)
*/


export default function TextBox() {

    const useStyles = makeStyles({
        field: {
            marginTop: 20,
            marginBottom: 20,
            display: 'block'
        }
    })

    const classes = useStyles()

    const [input, setInput] = useState("");
    const [result, setResult] = useState("");

    return (
        <>

        <div>

            <TextField
                onChange={(e) => setInput(e.target.value)}
                className={classes.field}
                label="Input Request to Server"
                variant="outlined"
            />

            <Button
                variant="outlined"
                onClick={() => {
                    fetch("/name/" + input)
                        .then(response =>
                            response.json()
                        )
                        .then(data => {
                            setResult(data.output)
                        })
                        .catch(error => {
                            console.log(error)
                        })
                }}
            >
                Enter
            </Button>
        </div>

        <h2>Response from server:</h2>
        <h3>{result}</h3>

        </>
    );
}
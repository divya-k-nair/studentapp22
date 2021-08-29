import { Button, Grid, TextField, Typography } from '@material-ui/core'
import React from 'react'

export default function Student() {
    return (
        <Grid container>
            <Grid item xs={12} sm={12} md={4} lg={4} xl={4}> 
            

            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                <Typography>STUDENT APP</Typography>
                <TextField
                variant="outlined"
                label="Name"
                  fullWidth
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Admission no:"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Rollno:"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="College"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Dateofbirth"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Mobileno:"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Emailid"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="password"
                margin="normal"
                required
                />
                <TextField
                fullWidth
                variant="outlined"
                label="Confirm password"
                margin="normal"
                required
                />
                <Button 
                fullWidth
                variant="contained"
                color="primary"
                margin="normal"
                >SUBMIT</Button>
                

             </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>

            </Grid>

        </Grid>
    )
}

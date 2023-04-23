import React from 'react';
import {
    Grid,
    TextField,
    Paper,
    Button
} from '@material-ui/core';

const SignupPage = () => {

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                width: '100vw',
                backgroundColor: '#f5f5f5'
            }}

        >
            <Paper>
                <Grid
                    container
                    spacing={3}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                    style={{ padding: 30 }}
                >
                    <Grid item xs={12}>
                        <h2>CITY-WATCH: Sign Up</h2>
                    </Grid>
                    <Grid
                        item xs={12}
                        style={{width: '100%', textAlign: 'left'}}
                    >
                        <label>Email</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here..."
                        ></TextField>

                        <label>First name</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here...">
                        </TextField>

                        <label>Last name</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here...">
                        </TextField>

                        <label>Username</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here...">
                        </TextField>

                        <label>Password</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here...">
                        </TextField>

                        <label>Confirm Password</label>
                        <TextField
                            style={{ width: '100%' }}
                            placeholder="Enter here...">
                        </TextField>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{
                                width: '100%',
                                marginBottom: 10,
                                borderRadius: 20,
                                color: 'white',
                                fontSize: 15,
                                textTransform: 'none'
                            }}
                        > Register</Button>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            style={{
                                width: '100%',
                                marginBottom: 10,
                                borderRadius: 20,
                                color: 'white',
                                fontSize: 15,
                                textTransform: 'none'
                            }}
                        > Back to Login?</Button>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
};

export default SignupPage;

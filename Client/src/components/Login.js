import React from 'react';
import {
	Checkbox,
	Grid,
	TextField,
	FormControlLabel,
	Paper,
	Button
} from '@mui/material';

const Login = () => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

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
			<Paper
				style={{
					width: 600,
					height: 550,
					borderRadius: 20,
				}}
			>
				<Grid
					container
					spacing={3}
					direction='column'
					justify='center'
					alignItems='center'
					style={{ padding: 20 }}
				>
					<Grid item xs={12}>
						<h2>CITY-WATCH</h2>
						<h4>A Reporting tool for Local community</h4>
						<h5>Welcome to CITY-WATCH</h5>
					</Grid>
					<Grid
						item xs={12}
						style={{ width: '100%', textAlign: 'left' }}
					>
						<TextField
							label="Username or Email"
							style={{ width: '100%' }}
							placeholder="Enter here..."
						></TextField>
						<br />
						<br />
						<TextField
							label="Password"
							style={{ width: '100%' }}
							placeholder="Enter here..."
							type={'password'}>
						</TextField>

						<Button
							color="secondary"
							size="small"
							style={{
								width: '100%',
								textAlign: 'right'
							}}
						> Forgot Password?</Button>

					</Grid>
					<Grid item xs={12}>
						<FormControlLabel
							control={
								<Checkbox
									checked={checked}
									onChange={handleChange}
									label={'Keep me logged in'}
									inputProps={{ 'aria-label': 'primary checkbox' }}
								/>
							}
							label="Keep me logged in"
						/>
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
						> Login</Button>
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
						> Signup</Button>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Login;

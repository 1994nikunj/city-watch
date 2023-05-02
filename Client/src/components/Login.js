import React from 'react';
import { Link } from 'react-router-dom';
import {
	Checkbox,
	Grid,
	TextField,
	FormControlLabel,
	CardMedia,
	Button,
	Typography,
	Box
} from '@mui/material';
import logo from '../assets/logo_large.png';
import backgroundImage from '../assets/base.jpg';

const Login = () => {
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};

	return (
		<>
			<div style={{ position: 'relative' }}>
				<Box
					sx={{
						backgroundImage: `url(${backgroundImage})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
						display: 'flex',
						height: '98vh',
					}}
				>
					<Grid
						container
						sx={{
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						{/* Column 1 */}
						<Grid item xs={4}
							sx={{
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'center',
								alignItems: 'center',
								backgroundColor: 'white',
								borderRadius: '10px',
								padding: '3rem',
								marginRight: '0.5rem',
								height: '600px'
							}}
						>
							<CardMedia
								component="img"
								image={logo}
								alt="green iguana"
								sx={{
									width: '80%',
								}}
							/>
						</Grid>

						{/* Column 2 */}
						<Grid item xs={4}
							sx={{
								display: 'flex',
								backgroundColor: 'white',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: '10px',
								padding: '3rem',
								marginLeft: '0.5rem',
								height: '600px'
							}}
						>
							<Grid item xs={12}>
								<Typography
									variant="h4"
									sx={{
										fontWeight: 'bold',
										fontSize: '2.5rem',
										marginBottom: '0.5rem',
										color: 'rgb(80, 80, 80, 0.9)',
										textAlign: 'center'
									}}
								>CITY-WATCH</Typography>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 'bold',
										fontSize: '1rem',
										color: 'rgb(80, 80, 80, 0.7)',
										textAlign: 'center'
									}}
								>A Reporting tool for Local community</Typography>
								<Typography
									variant="h6"
									sx={{
										fontWeight: 'bold',
										fontSize: '1rem',
										marginTop: '3rem',
										marginBottom: '3rem',
										color: 'rgb(80, 80, 80, 0.5)',
										textAlign: 'center'
									}}
								>Welcome to CITY-WATCH</Typography>
							</Grid>

							<Grid
								item xs={12}
								sx={{
									width: '100%',
									textAlign: 'center',
									marginBottom: '1rem'
								}}
							>
								<TextField
									label="Username or Email"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									placeholder="Enter here..."
								></TextField>
								<TextField
									label="Password"
									sx={{ width: '100%' }}
									placeholder="Enter here..."
									type={'password'}>
								</TextField>

								<Button
									color="secondary"
									size="small"
									sx={{
										width: '100%',
										position: 'relative'
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
								<Link to="/home" sx={{ textDecoration: 'none' }}>
									<Button
										sx={{
											width: '200px',
											fontSize: 15,
											backgroundColor: '#696969',
											color: 'white',
											borderRadius: '25px',
											textTransform: 'none',
											marginBottom: '1rem',
											'&:hover': {
												backgroundColor: 'red',
												color: 'white',
											}
										}}
										onClick={() => alert('Login successfully! Welcome to City Watch!')}
									>
										Login
									</Button>
								</Link>
							</Grid>
							<Grid item xs={12}>
								<Link to="/signup" sx={{ textDecoration: 'none' }}>
									<Button
										sx={{
											width: '200px',
											fontSize: 15,
											backgroundColor: '#696969',
											color: 'white',
											borderRadius: '25px',
											textTransform: 'none',
											marginBottom: '1rem'
										}}
									>
										Signup
									</Button>
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	);
};

export default Login;

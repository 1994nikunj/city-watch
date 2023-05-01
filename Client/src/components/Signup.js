import React from 'react';
import { Link } from 'react-router-dom';
import {
	Grid,
	TextField,
	CardMedia,
	Button,
	Typography,
	Box
} from '@mui/material';
import logo from '../assets/logo_large.png';
import backgroundImage from '../assets/base.jpg';


const SignupPage = () => {
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
							alignItems: 'center',
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
									style={{
										fontWeight: 'bold',
										fontSize: '1.5rem',
										marginBottom: '0.5rem',
										color: 'rgb(80, 80, 80, 0.9)',
										textAlign: 'center'
									}}
								>CITY-WATCH: Sign Up</Typography>
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
									label="Name"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									placeholder="Enter here..."
									type={'text'}
								/>

								<TextField
									label="Email"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									placeholder="Enter here..."
									type={'text'}
								/>

								<TextField
									label="Address"
									sx={{
										width: '100%',
										marginBottom: '1rem',
									}}
									placeholder="Enter here..."
									type={'text'}
								/>

								<TextField
									label="Password"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									placeholder="Enter here..."
									type={'password'}
								/>

								{/* Confirm password */}
								<TextField
									label="Confirm Password"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									placeholder="Enter here..."
									type={'password'}
								/>

							</Grid>
							<Grid item xs={12}
								sx={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
									alignItems: 'center'
								}}
							>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<Button
										sx={{
											width: '200px',
											backgroundColor: '#696969',
											color: 'white',
											borderRadius: '25px',
											height: '50px',
											marginBottom: '0.5rem'
										}}
										onClick={() => alert('New user registered successfully!')}
									> Register</Button>
								</Link>
								<Link to="/" style={{ textDecoration: 'none' }}>
									<Typography
										style={{
											color: '#548235',
											fontSize: 15
										}}
									> Back to Login? </Typography>
								</Link>
							</Grid>
						</Grid>
					</Grid>
				</Box>
			</div>
		</>
	);
};

export default SignupPage;

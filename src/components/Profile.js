import React from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';
import {
	Box,
	Avatar,
	Button,
	Typography,
	Divider
} from '@mui/material';

const interestPillStyle = {
	width: '130px',
	height: '30px',
	borderRadius: '10px',
	fontSize: '0.9rem',
	background: 'linear-gradient(90deg, #9D4D7A, #632E4C)',
	boxShadow: '-2px 2px 10px 3px rgba(0, 0, 0, 0.4)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	fontStyle: 'italic',
	transition: 'all 0.5s ease-in-out',
	'&:hover': {
		cursor: 'pointer',
		border: 'none',
		color: '#150941',
		backgroundColor: '#CE8CA7',
		background: 'linear-gradient(90deg, #317991, #194251)',
		boxShadow: '0px 0px 15px #2C506A',
	}
};

const avatarStyle = {
	width: '200px',
	height: '200px',
	border: '5px solid rgba(0, 0, 0, 0.7)',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)'
};

const interestsBoxStyle = {
	display: 'flex',
	flexDirection: 'row',
	justifyContent: 'space-between',
	marginBottom: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	background: 'linear-gradient(45deg, #fff8, #fff3)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)'
};

const statsKeyStyle = {
	marginTop: '1.5rem',
	width: '300px',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	color: '#000',
	background: 'linear-gradient(45deg, #fff9, #fff3)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)'
};

const statsValueStyle = {
	position: 'absolute',
	marginTop: '1rem',
	marginLeft: '300px',
	width: '100px',
	height: '40px',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	background: 'linear-gradient(45deg, #9D4D7A, #632E4C)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const infoKeyStyle = {
	marginTop: '2.5rem',
	width: '15rem',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	color: '#000',
	background: 'linear-gradient(45deg, #fff9, #fff3)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)'
};

const infoValueStyle = {
	position: 'absolute',
	marginTop: '2rem',
	marginLeft: '15rem',
	width: '35rem',
	height: '2.5rem',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	background: 'linear-gradient(45deg, #286377, #194251)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)',
	display: 'flex',
	justifyContent: 'left',
	alignItems: 'center',
};

const headerStyle = {
	fontSize: '1.5rem',
	fontWeight: 'bold',
	color: '#D7D7D7'
};

const editButtonStyle = {
	width: '200px',
	height: '50px',
	fontSize: '1rem',
	display: 'flex',
	color: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	marginTop: '5rem',
	marginLeft: '15rem',
	borderRadius: '12px',
	background: 'linear-gradient(90deg, #9D4D7A, #632E4C)',
	boxShadow: '-2px 2px 10px 3px rgba(0, 0, 0, 0.4)',
	transition: 'all 0.5s ease-in-out',
	'&:hover': {
		border: 'none',
		color: '#150941',
		backgroundColor: '#CE8CA7',
		background: 'linear-gradient(45deg, #fff, #CE8CA7)',
		boxShadow: '0px 0px 15px #2C506A',
	}
};

const Profile = () => {
	return (
		<div style={{ position: 'relative' }}>
			<Header />
			<Box
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					display: 'flex',
					height: '98vh',
					flexDirection: 'column',
				}}
			>
				<Box
					sx={{
						paddingTop: '7rem',
						color: '#fff',
						fontSize: '2rem',
						m: '1rem 2rem',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					User Profile
				</Box>
				<Box
					sx={{
						color: '#fff',
						fontSize: '2rem',
						m: '1rem 2rem',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between'
					}}>
					{/* Column 1 */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							flex: '1',
							marginRight: '5rem'
						}}>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-between',
								flex: '1'
							}}>
							<Avatar sx={avatarStyle}></Avatar>
							<Button sx={editButtonStyle}>Edit Profile</Button>
						</Box>

						{/* Basic Stats */}
						<Box
							sx={{
								marginTop: '1rem',
								display: 'flex',
								flexDirection: 'column'
							}}>
							<Typography sx={headerStyle}>Basic Stats</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={statsKeyStyle}>Number of problems reported</Typography>
								<Typography sx={statsValueStyle}>5</Typography>
							</Box>

							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={statsKeyStyle}>Number of events reported</Typography>
								<Typography sx={statsValueStyle}>5</Typography>
							</Box>
						</Box>

						{/* Interests */}
						<Box
							sx={{
								marginTop: '2rem',
								display: 'flex',
								flexDirection: 'column',
								justifyContent: 'space-between'
							}}>
							<Typography marginBottom={1} sx={headerStyle}>Interests</Typography>
							<Box sx={interestsBoxStyle}>
								<Typography sx={interestPillStyle}> Camping </Typography>
								<Typography sx={interestPillStyle}> Chinese Food </Typography>
								<Typography sx={interestPillStyle}> Music Concerts </Typography>
								<Typography sx={interestPillStyle}> Books </Typography>
								<Typography sx={interestPillStyle}> Cycling </Typography>
								<Typography sx={interestPillStyle}> Jazz </Typography>
							</Box>
						</Box>
					</Box>

					<Divider
						orientation="vertical"
						flexItem
						sx={{
							boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)',
							width: '1px',
							backgroundImage: 'linear-gradient(45deg, #CE8CA7, #2C506A)',
						}}
					/>

					{/* Column 2 */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							flex: '1',
							marginLeft: '5rem',
						}}>
						{/* Basic Information */}
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column'
							}}>
							<Typography sx={headerStyle}>Basic Information</Typography>
							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={infoKeyStyle}>Name</Typography>
								<Typography sx={infoValueStyle}>Elon Musk</Typography>
							</Box>

							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={infoKeyStyle}>Age</Typography>
								<Typography sx={infoValueStyle}>47</Typography>
							</Box>

							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={infoKeyStyle}>Address</Typography>
								<Typography sx={infoValueStyle}>300 Plank St.</Typography>
							</Box>

							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={infoKeyStyle}>Email</Typography>
								<Typography sx={infoValueStyle}>elonmusk@tesla.com</Typography>
							</Box>

							<Box sx={{ display: 'flex', flexDirection: 'row' }}>
								<Typography sx={infoKeyStyle}>Profession</Typography>
								<Typography sx={infoValueStyle}>Entrepreneur</Typography>
							</Box>

						</Box>
					</Box>
				</Box>
			</Box>
			<Footer />
		</div>
	);
}

export default Profile;
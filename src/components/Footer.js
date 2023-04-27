import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
	Box,
	Button,
	Typography,
	Divider,
	CardMedia
} from '@mui/material';
import logo from '../assets/logo_small.png';
import facebookIcon from '../assets/Icons/facebook.png';
import instagramIcon from '../assets/Icons/instagram.png';
import twitterIcon from '../assets/Icons/twitter.png';
import linkedinIcon from '../assets/Icons/linkedin.png';
import youtubeIcon from '../assets/Icons/youtube.png';
import snapchatIcon from '../assets/Icons/snapchat.png';


const socialIconStyle = {
	height: '3rem',
	width: '3rem',
	margin: '0 0.4rem',
	transition: 'all 0.5s ease-in-out',
	'&:hover': {
		transform: 'scale(1.3)'
	}
}

const buttonStyle = {
	width: '355px',
	borderRadius: '12px',
	color: '#150941',
	backgroundColor: '#CE8CA7',
	'&:hover': {
		border: 'none',
		color: '#fff',
		backgroundColor: '#000',
		boxShadow: '0px 0px 20px #2C506A'
	}
};

const NavigationButton = ({ to, icon, label }) => {
	return (
		<Button
			sx={buttonStyle}
			startIcon={icon}
			component={NavLink}
			to={to}
		>
			{label}
		</Button>
	);
};

const Footer = () => {
	return (
		<Box
			sx={{
				backgroundColor: '#fff',
				height: '10rem',
				width: '100%',
				position: 'absolute',
				bottom: '5px',
				borderRadius: '20px',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)'
			}}
		>
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					padding: '0.5rem 0',
					margin: '0 1rem'
				}}>
				{/* Logo */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						mr: 'auto'
					}}>
					<CardMedia
						component="img"
						image={logo}
						alt="Logo"
						sx={{
							height: '5rem',
							width: '5rem'
						}}
					/>
					<Typography
						variant="h7"
						component="div"
						sx={{
							ml: '0.5rem'
						}}>
						City-Watch: Empowering local community with a user-friendly Reporting Tool.
					</Typography>
				</Box>

				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						mr: 'auto'
					}}>
					<Link to="/reports">
						All Reports
					</Link>
					&nbsp; | &nbsp;
					<Link to="/reports">
						All Events
					</Link>
					&nbsp; | &nbsp;
					<Link to="/reports">
						Help
					</Link>
					&nbsp; | &nbsp;
					<Link to="/reports">
						SignUp
					</Link>
					&nbsp; | &nbsp;
					<Link to="/reports">
						Login
					</Link>
					&nbsp; | &nbsp;
					<Link to="/reports">
						Logout
					</Link>
				</Box>

				{/* Social Icons */}
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
					}}>
					<Link href="https://www.instagram.com/">
						<CardMedia
							image={instagramIcon}
							alt="Instagram"
							sx={socialIconStyle} />
					</Link>
					<Link href="https://www.facebook.com/">
						<CardMedia
							image={facebookIcon}
							alt="Facebook"
							sx={socialIconStyle} />
					</Link>
					<Link href="https://twitter.com/">
						<CardMedia
							image={twitterIcon}
							alt="Twitter"
							sx={socialIconStyle} />
					</Link>
					<Link href="https://www.linkedin.com/">
						<CardMedia
							image={linkedinIcon}
							alt="LinkedIn"
							sx={socialIconStyle} />
					</Link>
					<Link href="https://www.youtube.com/">
						<CardMedia
							image={youtubeIcon}
							alt="Youtube"
							sx={socialIconStyle} />
					</Link>
					<Link href="https://www.snapchat.com/">
						<CardMedia
							image={snapchatIcon}
							alt="Snapchat"
							sx={socialIconStyle} />
					</Link>
				</Box>
			</Box>

			<Divider
				sx={{
					backgroundImage: 'linear-gradient(to right, #CE8CA7, #2C506A)',
					height: '2px',
					margin: '0 1rem',
					boxShadow: '0 0 5px rgba(0, 0, 0, 0.4)'
				}}
			/>

			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					margin: '0 1rem'
				}}>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'left',
						flexDirection: 'column',
						mr: 'auto'
					}}>
					<Typography variant="h6" component="div">
						Design & Development Team:
					</Typography>
					<Typography variant="body1" component="div" >
						<Link href="https://github.com/aditya9398">Aditya SanjayKumar Singh</Link>
						&nbsp; | &nbsp;
						<Link href="https://github.com/ArchiPatel8">Archi Dilip Patel</Link>
						&nbsp; | &nbsp;
						<Link href="https://github.com/arandomdude24">Ishaan Patel</Link>
						&nbsp; | &nbsp;
						<Link href="https://github.com/aditya9398">Nikunj Sharma</Link>
					</Typography>
				</Box>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center'
					}}>
					<NavigationButton
						to="/feedback"
						label='Feedback?'
					/>
				</Box>
			</Box>
		</Box>
	);
}

export default Footer;
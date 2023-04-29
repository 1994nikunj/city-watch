import React from 'react';
import { NavLink } from 'react-router-dom';
import {
	Button,
	CardMedia,
	Grid,
	Typography
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import EventIcon from '@mui/icons-material/Event';
import ProfileIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/logo_small.png';


const Header = ({ username }) => {
	const buttonStyle = {
		marginRight: '1rem',
		width: '150px',
		borderRadius: '12px',
		border: '2px solid #CE8CA7',
		color: '#150941',
		boxShadow: '0px 0px 10px #CE8CA7',
		transition: 'all 0.5s ease-in-out',
		'&:hover': {
			border: 'none',
			color: '#150941',
			backgroundColor: '#CE8CA7',
			background: 'linear-gradient(45deg, #fff, #CE8CA7)',
			boxShadow: '0px 0px 15px #2C506A',
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

	const uname = username || 'John Doe';

	return (
		<Grid
			container
			alignItems="center"
			width="100%"
			style={{
				backgroundColor: '#fff',
				height: '6rem',
				display: 'flex',
				position: 'absolute',
				borderRadius: '20px',
				marginTop: '5px',
				boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)'
			}}
		>
			<Grid
				item
				style={{
					marginLeft: '1rem',
				}}
			>
				<CardMedia
					component="img"
					image={logo}
					alt="Logo"
					sx={{
						height: '5rem',
						width: '5rem',
						'&:hover': {
							transform: 'scale(1.1)',
							transition: 'transform 0.5s ease-in-out'
						}
					}}
				/>
			</Grid>

			<Grid
				item
				style={{
					marginLeft: '1rem',
				}}
			>
				<Typography variant="h5">
					Welcome, {uname}!
				</Typography>
			</Grid>

			<Grid
				item
				style={{
					marginLeft: 'auto',
					marginRight: '1rem',
				}}
			>
				<NavigationButton to="/home" icon={<HomeIcon />} label='Home' />
				<NavigationButton to="/reports" icon={<ReportIcon />} label='Report List' />
				<NavigationButton to="/add-report" icon={<ReportIcon />} label='Add Report' />
				<NavigationButton to="/events" icon={<EventIcon />} label='Event List' />
				<NavigationButton to="/add-event" icon={<EventIcon />} label='Add Event' />
				<NavigationButton to="/help" icon={<HelpIcon />} label='Help' />
				<NavigationButton to="/profile" icon={<ProfileIcon />} label='Profile' />
				<NavigationButton to="/" icon={<LogoutIcon />} label='Logout' />
			</Grid>
		</Grid>
	);
};

export default Header;
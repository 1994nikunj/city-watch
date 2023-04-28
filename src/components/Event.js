import React, {useState, useEffect} from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';
import {
	Box,
	Card,
	Grid,
	CardContent,
	CardHeader,
	CardMedia
} from '@mui/material';
import {events as eventSeed} from '../seedData/data.js';

const styles = {
	container: {
		backgroundColor: 'lightblue',
		borderRadius: '10px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
		marginLeft: '3rem',
		marginRight: '3rem',
		marginTop: '1rem',
		marginBottom: '1rem',
		flex: 1,
		overflow: 'auto'
	},

	title: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 30,
		marginTop: 3,
	},

	contentContainer: {
		display: 'flex',
		alignItems: 'center',
		paddingLeft: 4
	},

	image: {
		marginLeft: '5%',
		width: 300,
		height: 300,
		objectFit: "cover"
	}
}

const Event = () => {
	const classes = styles;
	const [event, setEvent] = useState(undefined);
	const [error, setError] = useState(false);
	async function fetchEvent() {
		/*
		try {
			const response = await fetch(
				`urlgoeshere`, { method: 'GET'}
			);
			if (response.status === 200) {
				const data = await response.json();
				setEvent(data);
			}
		} catch (e) {
			console.log('Failed to get evebt');
			setError(true);
		}*/

		setEvent(eventSeed[0]);
	}

	useEffect(() => {
		fetchEvent();
	});

	function createEvent() {
		return (
			<Card sx={classes.container}>
				<CardHeader sx={classes.title} title={event.title}/>
				<CardContent sx={classes.contentContainer}>
					<p sx={classes.description}> {event.description} </p>
					<CardMedia sx={classes.image} image={event.image}/>

				</CardContent>

			</Card>
		)

	}

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
					overflow: 'auto'
				}}
			>
				<Box
					sx={{
						paddingTop: '7rem',
						color: '#fff',
						fontSize: '2rem',
						m: '1rem 2rem',
					}}>
					Event Details
				</Box>
				{/* YOUR CODE GOES HERE*/}
				{error && (
					<h2> Failed to load event...</h2>
				)}
				{!error && !event && (
					<h2> There is no event for this id...</h2>
				)}

				{!error && event && createEvent()}
			</Box>
			<Footer />
		</div>
	);
}

export default Event;
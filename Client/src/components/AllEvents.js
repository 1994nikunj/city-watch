import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	Typography,
	CardMedia,
	Card,
	CardContent,
	Grid
} from '@mui/material';
import data from '../seedData/data';

const imageStyle = {
	width: '26rem',
	height: '15rem',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	borderRadius: '10px',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
}

const spanStyle = {
	fontWeight: 'bold',
	color: '#CE8CA7',
	marginRight: '0.5rem'
}


const AllEvents = () => {
	const [events, setEvents] = useState([]);
	async function fetchEvents() {
		try {
			const response = await fetch(
				`http://localhost:5000/events`, 
				{ 
					method: 'GET', 
					headers: {'Access-Control-Allow-Origin': '*'}
				}
			);
			if (response.status === 200) {
				const data = await response.json();
				setEvents(data);
				console.log(data);
			}
		} catch (e) {
			console.log('Failed to get events');
			console.log(e);
		}

	}
	useEffect(() => {
		fetchEvents();
	});

	return (
		<>
			<Box
				sx={{
					paddingTop: '7rem',
					color: '#fff',
					fontSize: '2rem',
					m: '1rem 2rem',
					overflowY: 'auto',
					height: '68vh',
					'&::-webkit-scrollbar': {
						width: '0.5rem'
					},
					'&::-webkit-scrollbar-track': {
						background: '#fff',
						marginTop: '5.5rem',
						marginBottom: '0.5rem',
					},
					'&::-webkit-scrollbar-thumb': {
						background: '#CE8CA7',
					},
				}}
			>
				All Events
				<Grid container spacing={2}>
					{events.map((event, index) => {
						return (
							<Grid item xs={12} sm={6} key={event.id}>
								<Card
									sx={{
										background: 'linear-gradient(45deg, #0E2044, #7D8B8B)',
										borderRadius: '10px',
										boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
										margin: '1rem'
									}}
								>
									<Link
										to={`/event/${event.id}`}
										style={{ textDecoration: 'none' }}
									>
										<CardContent sx={{ color: '#fff' }}>
											<Grid container spacing={1}>
												<Grid item xs={6}>
													<Typography variant="h4" component="div" gutterBottom>{event.title}</Typography>
													<Typography variant="body2">{`${event.description.slice(0, 250)}...`}</Typography>
													<Typography variant="subtitle2" sx={{ marginTop: '1rem' }}
													><span style={spanStyle}>Date:</span> {event.date}</Typography>
													<Typography variant="subtitle2"><span style={spanStyle}>Time:</span> {event.time}</Typography>
													<Typography variant="subtitle2"><span style={spanStyle}>Location:</span> {event.location}</Typography>
												</Grid>
												<Grid item xs={12} sm={4}>
													<CardMedia
														component="img"
														sx={imageStyle}
														image={event.images[0]}
														alt={event.title}
													/>
												</Grid>
											</Grid>
										</CardContent>
									</Link>
								</Card>
							</Grid>
						);
					})}
				</Grid>
			</Box>
		</>
	);
}

export default AllEvents;
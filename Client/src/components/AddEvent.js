import React, { useState } from 'react';
import {
	Box,
	Button,
	Typography,
	CardMedia,
	Card,
	CardContent,
	Grid,
	TextField,
	CardActions
} from '@mui/material';

const AddEvent = () => {
	const [name, setName] = useState(undefined);
	const [title, setTitle] = useState(undefined);
	const [description, setDescription] = useState(undefined);
	const [location, setLocation] = useState(undefined);

	const handleNameChange = (e) => {
		setName(e.target.value);
	}

	const handleTitleChange = (e) => {
		setTitle(e.target.value);
	}

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
	}

	const handleLocationChange = (e) => {
		setLocation(e.target.value);
	}

	const handleDateChange = (e) => {
		setLocation(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let body = {};
		body['name'] = name;
		body['title'] = title;
		body['description'] = description;
		body['location'] = location;

		console.log(body);
		alert('Event Submitted!');
	}

	return (
		<>
			<Box
				sx={{
					paddingTop: '7rem',
					color: '#fff',
					fontSize: '2rem',
					m: '1rem 2rem'
				}}>
				Add a new event
			</Box>
			<Card
				sx={{
					backgroundColor: '#fff',
					borderRadius: '10px',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
					margin: '1rem',
					flex: 1,
					height: '60vh',
				}}
			>
				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<CardContent
								sx={{
									justifyContent: 'center',
									position: 'relative',
								}}
							>
								<TextField
									id="outlined-basic"
									label="Name"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleNameChange}
								/>
								<TextField
									id="outlined-basic"
									label="Title"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleTitleChange}
								/>
								<TextField
									id="outlined-basic"
									label="Location"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleLocationChange}
								/>
								<TextField
									id="outlined-basic"
									label="Date"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleDateChange}
								/>
								<TextField
									id="outlined-basic"
									label="Description"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleDescriptionChange}
								/>
							</CardContent>
						</Grid>
						<Grid item xs={12} sm={6}>
							<CardContent
								sx={{
									justifyContent: 'center',
									position: 'relative',
								}}
							>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										marginBottom: '10px',
									}}
								>
									Upload Images
								</Typography>
								<CardMedia
									component="img"
									height="140"
									image="https://source.unsplash.com/random"
									alt="random"
									sx={{
										borderRadius: '10px',
									}}
								/>
							</CardContent>
						</Grid>
					</Grid>

					<CardActions
						sx={{
							justifyContent: 'center',
							position: 'relative',
						}}
					>
						<Button
							variant="contained"
							color="primary"
							onClick={handleSubmit}
						>
							Submit
						</Button>
					</CardActions>
				</form>
			</Card>
		</>
	);
}

export default AddEvent;
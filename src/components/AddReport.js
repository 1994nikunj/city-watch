import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';
import {
	Box,
	Grid
} from '@mui/material';
import { Button, Card, Form } from 'react-bootstrap';

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
		overflow: 'auto',
		justifyContent: 'center'
	},

	field: {
		margin: '3rem',
		
	}
}

const AddReport = () => {
	const classes = styles;
	const [name, setName] = useState(undefined);
	const [title, setTitle] = useState(undefined);
	const [description, setDescription] = useState(undefined);
	const [location, setLocation] = useState(undefined);
	const [image, setImage] = useState(undefined);

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

	async function handleForm(e) {
		e.preventDefault();
		let body = {};
		body['name'] = name;
		body['title'] = title;
		body['description'] = description;
		body['location'] = location;

		// make report and post to reports collection
		// requires getting the logged in users id 

		/*
		try {
			const resonse = await fetch('urlgoeshere', {
				method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
			});
		} catch (error) {
			console.log('Failed to post report')
		} */

		console.log(body);
		alert('Report Submitted!');

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
				}}
			>
				<Box
					sx={{
						paddingTop: '7rem',
						color: '#fff',
						fontSize: '2rem',
						m: '1rem 2rem'
					}}>
					Add A Report
				</Box>
				{/* YOUR CODE GOES HERE*/}
				<div style={classes.container}>
						<Form  onSubmit={handleForm}>
							<Form.Group sx={classes.field}> 
								<Form.Label className="form-label"> Name</Form.Label>
								<Form.Control  className="form-control" required
									name="name"
									type="textarea"
									placeholder="Mark Smith"
									onChange={handleNameChange}
								/>
							</Form.Group>
							<Form.Group sx={classes.field}> 
								<Form.Label> Title</Form.Label>
								<Form.Control required
									name="title"
									type="textarea"
									placeholder="Road Closure"
									onChange={handleTitleChange}
								/>
							</Form.Group>
							<Form.Group sx={classes.field}> 
								<Form.Label> Description</Form.Label>
								<Form.Control required
									name="description"
									type="textarea"
									placeholder="Someone crashed a car"
									onChange={handleDescriptionChange}
								/>
							</Form.Group>
							<Form.Group sx={classes.field}> 
								<Form.Label> Location</Form.Label>
								<Form.Control required
									name="location"
									type="textarea"
									placeholder="Hoboken, NJ"
									onChange={handleLocationChange}
								/>
							</Form.Group>
							<Button type="submit">
								Submit
							</Button>
							
						</Form>
				</div>
				
			</Box>
			<Footer />
		</div>
	);
}

export default AddReport;
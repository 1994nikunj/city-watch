import React, { useState } from 'react';
import {
	Box,
	Button
} from '@mui/material';
import { Form } from 'react-bootstrap';

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

		console.log(body);
		alert('Report Submitted!');
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
				Add A Report
			</Box>
			<div style={classes.container}>
				<Form onSubmit={handleForm}>
					<Form.Group sx={classes.field}>
						<Form.Label className="form-label"> Name</Form.Label>
						<Form.Control className="form-control" required
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
		</>
	);
}

export default AddReport;
import React, { useState } from 'react';
import {
	Box,
	Button,
	Card,
	CardContent,
	Grid,
	TextField
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import PublishIcon from '@mui/icons-material/Publish';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const buttonStyle = {
	width: '100%',
	height: '56px',
	fontSize: '1rem',
	color: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '12px',
	background: 'linear-gradient(45deg, #C481A0, #284B69)',
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

const buttonStyle2 = {
	width: '100%',
	height: '56px',
	fontSize: '1rem',
	color: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius: '12px',
	background: 'linear-gradient(45deg, #C481A0, #284B69)',
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

const AddReport = () => {
	const [title, setTitle] = useState(undefined);
	const handleTitleChange = (e) => { setTitle(e.target.value); }

	const [description, setDescription] = useState(undefined);
	const handleDescriptionChange = (e) => { setDescription(e.target.value); }

	const [location, setLocation] = useState(undefined);
	const handleLocationChange = (e) => { setLocation(e.target.value); }

	const [date, setDate] = useState(undefined);
	const handleDateChange = (newValue) => { setDate(newValue); }

	const [time, setTime] = useState(undefined);
	const handleTimeChange = (newValue) => { setTime(newValue); }

	const [image, setImage] = useState([]);
	const handleImageChange = (e) => {
		const newImage = e.target.value;
		setImage(prevImages => [...prevImages, newImage]);
	}
	const handleAddImage = () => {
		setImage(prevImages => [...prevImages, '']);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let body = {};
		body['title'] = title;
		body['description'] = description;
		body['location'] = location;
		body['images'] = [image];
		body['date'] = date;
		body['time'] = time;
		body['comments'] = []

		try {
			await fetch(`http://localhost:5000/reports`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(body)
			})
		} catch (e) {
			console.log(e);
		}
		alert('Report Submitted Successfully!');
	}

	return (
		<>

			<Box
				sx={{
					paddingTop: '7rem',
					color: '#fff',
					fontSize: '2rem',
					m: '1rem 2rem',
					display: 'flex'
				}}>
				Add a new report
			</Box>
			<Card
				sx={{
					backgroundColor: '#fff',
					borderRadius: '10px',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
					margin: '1rem',
					height: '60vh',
				}}
			>
				<form onSubmit={handleSubmit}>
					<Grid
						container
						spacing={2}
						sx={{
							justifyContent: 'center',
							position: 'relative',
							textAlign: 'center'
						}}
					>
						<Grid item xs={12} sm={6}>

							<CardContent
								sx={{
									justifyContent: 'center',
									position: 'relative',
									marginTop: '1rem'
								}}
							>
								{/* Title */}
								<TextField
									id="outlined-basic"
									label="Report Title"
									placeholder="A title for the report"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleTitleChange}
									renderInput={(params) => <TextField {...params} />}
								/>

								{/* Description */}
								<TextField
									id="outlined-basic"
									label="Report Description"
									placeholder="Describe the problem here"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleDescriptionChange}
									renderInput={(params) => <TextField {...params} />}
								/>

								{/* Location */}
								<TextField
									id="outlined-basic"
									label="Location"
									placeholder="Report Location"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									onChange={handleLocationChange}
								/>

								{/* Date Picker */}
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<DatePicker
										label="Date of encountering the issue"
										onChange={handleDateChange}
										value={date}
										sx={{
											width: '100%',
											marginBottom: '1rem'
										}}
									/>
								</LocalizationProvider>

								{/* Time Picker */}
								<LocalizationProvider dateAdapter={AdapterDayjs}>
									<TimePicker
										label="Time of encountering the issue"
										onChange={handleTimeChange}
										value={time}
										sx={{
											width: '100%',
											marginBottom: '1rem'
										}}
									/>
								</LocalizationProvider>

								<Grid container spacing={2}>
									<Grid item xs={9}>
										<TextField
											id="outlined-basic"
											label="Report Image link(s)"
											variant="outlined"
											sx={{
												width: '100%',
												marginBottom: '1rem'
											}}
											onChange={handleImageChange}
										/>
									</Grid>
									<Grid item xs={3}>
										<Button
											variant="contained"
											color="primary"
											startIcon={<AddPhotoAlternateIcon />}
											onClick={() => handleAddImage()}
											sx={buttonStyle2}
										>
											Add mode
										</Button>
									</Grid>
								</Grid>

								<Button
									variant="contained"
									color="primary"
									startIcon={<PublishIcon />}
									onClick={handleSubmit}
									sx={buttonStyle}
								>
									Submit Report!
								</Button>

							</CardContent>
						</Grid>
					</Grid>
				</form>
			</Card>

		</>
	);
}

export default AddReport;
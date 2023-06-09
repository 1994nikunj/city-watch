import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
	Card,
	Grid,
	CardContent,
	Typography,
	CardHeader,
	Box,
	CardMedia,
	Button,
	Avatar,
	TextField,
	Divider,
} from '@mui/material';
import MobileStepper from '@mui/material/MobileStepper';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const Report = () => {
	let { id } = useParams();
	id = id.toString();
	console.log(id);

	const [reportData, setReportData] = useState(undefined);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [activeStep, setActiveStep] = useState(0);
	const [name, setName] = useState(undefined);
	const [comment, setComment] = useState(undefined);

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleCommentChange = (e) => {
		setComment(e.target.value);
	}

	async function handleSubmit(e) {
		e.preventDefault();
		let body = {};
		body['user'] = name;
		body['text'] = comment;

		console.log(body);
		try {
			const response = await fetch(
				`http://localhost:5000/reports/${id}/comments`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(body)
			}
			)

			alert('Comment Submitted');
			fetchReport();
		} catch (e) {
			console.log(e);
		}


	}

	async function fetchReport() {
		try {
			let url = `http://localhost:5000/reports/${id}`;
			const response = await fetch(
				url,
				{
					method: 'GET',
					headers: { 'Access-Control-Allow-Origin': '*' }
				}
			);
			if (response.status === 200) {
				const data = await response.json();
				setReportData(data);
				console.log(data);
				setLoading(false);
			}
		} catch (e) {
			console.log('Failed to get report');
			console.log(e);
		}
	}



	useEffect(() => {
		fetchReport();
	});

	if (loading) {
		return (
			<div>
				<h2>Loading....</h2>
			</div>
		);
	} else if (error) {
		return (
			<div>
				<h2>{error}</h2>
			</div>
		);
	} else {
		return (
			<>
				<Box
					sx={{
						paddingTop: '7rem',
						color: '#fff',
						fontSize: '2rem',
						m: '1rem 2rem'
					}}>
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
						{/* Card Header --------------- START */}
						<CardHeader
							avatar={
								<Avatar>
									{reportData.title[0]}
								</Avatar>
							}
							title={reportData.title}
							subheader={reportData.date + '  |  ' + reportData.time + '  |  ' + reportData.location}
							sx={{
								color: 'rgb(200, 200, 200, 0.7)'
							}}
						/>
						{/* Card Header --------------- END */}

						{/* Image Carousel --------------- START */}
						<Grid container spacing={2}>
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
										Description
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{
											fontSize: '1rem',
											marginBottom: '10px',
										}}
									>
										{reportData.description}
									</Typography>
									<CardMedia
										component='img'
										image={reportData.images[activeStep]}
										alt={reportData.images[activeStep]}
										style={{
											height: '300px',
											width: '100%',
											objectFit: 'cover',
											borderRadius: '10px',
											boxShadow: '-2px 2px 10px #000',
											position: 'relative',
											left: '50%',
											transform: 'translateX(-50%)',
										}}
									/>
									<MobileStepper
										steps={reportData.images.length}
										position="static"
										activeStep={activeStep}
										sx={{
											backgroundColor: 'rgba(0, 0, 0, 0.0)',
										}}
										nextButton={
											<Button
												size="small"
												onClick={handleNext}
												disabled={activeStep === reportData.images.length - 1}
											>
												Next<KeyboardArrowRight />
											</Button>
										}
										backButton={
											<Button
												size="small"
												onClick={handleBack}
												disabled={activeStep === 0}
											>
												<KeyboardArrowLeft />Back
											</Button>
										}
									/>
								</CardContent>
							</Grid>
							{/* Image Container --------------- END */}

							{/* Item Description --------------- START */}
							<Grid item xs={12} sm={6}>
								<CardContent
									sx={{
										padding: '10px',
										textAlign: 'left',
										margin: '10px',
									}}
								>
									{/* Comments section */}
									<Box>
										<Typography variant="h5" sx={{ fontWeight: 'bold' }}>
											Comments
										</Typography>

										{reportData.comments.length !== 0 ? (
											<Box sx={{ marginTop: '10px' }}>
												{reportData.comments.map((comment, index) => (
													<Box key={index}>
														<Grid container alignItems="center">
															<Grid item xs={2.5}>
																<CardHeader
																	avatar={<Avatar>{comment.avatar}</Avatar>}
																	title={comment.user}
																	subheader={comment.date}
																/>
															</Grid>
															<Grid item xs={9.5}>
																<Typography variant="body2" color="text.secondary">
																	{comment.text}
																</Typography>
															</Grid>
														</Grid>
														<Divider sx={{ marginBottom: '10px' }} />
													</Box>
												))}
											</Box>
										) : (
											<Typography variant="body2" color="text.secondary" sx={{ fontSize: '1rem', marginBottom: '10px', fontStyle: 'italic' }}>
												There are no comments yet.
											</Typography>
										)}

										{/* Comment Form */}
										<Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
											Add Comment
										</Typography>
										<Box sx={{ display: 'flex', flexDirection: 'column' }}>
											<TextField onChange={handleNameChange} label="Name" variant="outlined" fullWidth sx={{ marginBottom: '5px' }} />
											<TextField onChange={handleCommentChange} label="Comment" variant="outlined" rows={1} fullWidth sx={{ marginBottom: '5px' }} />
											<Button onClick={handleSubmit} variant="contained" color="primary" sx={{ fontWeight: 'bold', width: '150px' }}>
												Submit
											</Button>
										</Box>
									</Box>

								</CardContent>
								{/* Item Description --------------- END */}
							</Grid>
						</Grid>
					</Card>
				</Box>
			</>
		);
	}
}

export default Report;
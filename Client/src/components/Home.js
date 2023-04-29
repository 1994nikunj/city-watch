import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	CardHeader,
	Button,
	Typography,
	CardMedia,
	Card,
	CardContent,
	Grid
} from '@mui/material';
import NextIcon from '@mui/icons-material/NavigateNext';
import PrevIcon from '@mui/icons-material/NavigateBefore';
import data from '../seedData/data';

const imageStyle = {
	width: '26rem',
	height: '18rem',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	borderRadius: '10px',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
}

const Home = () => {
	const [currentReport, setCurrentReport] = useState(0);
	const [currentEvent, setCurrentEvent] = useState(0);
	const reports = data.reports;
	const events = data.events;

	const ActionButton = ({ icon, label, disabled, onClick }) => {
		return (
			<Button
				sx={{
					width: '200px',
					borderRadius: '12px',
					color: '#fff',
					background: 'linear-gradient(45deg, #286377, #194251)',
					transition: 'all 0.5s ease-in-out',
					'&:hover': {
						border: 'none',
						color: '#150941',
						backgroundColor: '#CE8CA7',
						background: 'linear-gradient(45deg, #fff, #CE8CA7)',
						boxShadow: '0px 0px 15px #2C506A',
					}
				}}
				variant="contained"
				startIcon={icon}
				disabled={disabled}
				onClick={onClick}
			>
				{label}
			</Button>
		);
	};

	return (
		<>
			{/* Header Box */}
			<Box
				sx={{
					paddingTop: '7rem',
					color: '#fff',
					fontSize: '2rem',
					m: '1rem 2rem'
				}}>
				Report, view, or discuss local problems or events in your area.
				<br />
				<span style={{ fontSize: '1rem' }}>
					(problems like, graffiti, potholes, trash, etc. and events like, festivals, concerts, dance shows, etc.)
				</span>
			</Box>

			<Box
				sx={{
					display: 'flex',
					flexWrap: 'wrap'
				}}>

				{/* Reports Card */}
				<Card
					sx={{
						backgroundColor: '#fff',
						borderRadius: '10px',
						boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
						margin: '1rem',
						flex: 1,
					}}
				>
					<CardHeader title="Recent Reports" />
					<Link
						to={`/report/${reports[currentReport].id}`}
						style={{ textDecoration: 'none' }}
					>
						<CardContent
							sx={{
								background: 'linear-gradient(45deg, #CE8AA5, #0E1B3D)',
								margin: '1rem',
								borderRadius: '10px',
								boxShadow: '-3px 3px 15px rgba(0, 0, 0, 0.6)',
								color: '#fff'
							}}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography variant="h4" component="div" gutterBottom>
										{reports[currentReport].title}
									</Typography>
									<Typography variant="body1">
										{reports[currentReport].description}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<CardMedia
										component="img"
										sx={imageStyle}
										image={reports[currentReport].images[0]}
										alt={reports[currentReport].title}
									/>
								</Grid>
							</Grid>
						</CardContent>
					</Link>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
						<ActionButton
							label="Previous"
							icon={<PrevIcon />}
							disabled={currentReport === 0}
							onClick={() => setCurrentReport(currentReport - 1)}
						/>
						<ActionButton
							label="Next"
							icon={<NextIcon />}
							disabled={currentReport === reports.length - 1}
							onClick={() => setCurrentReport(currentReport + 1)}
						/>
					</Box>
				</Card>

				{/* Events Card */}
				<Card
					sx={{
						backgroundColor: '#fff',
						borderRadius: '10px',
						boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
						margin: '1rem',
						flex: 1
					}}
				>
					<CardHeader title="Recent Events" />
					<Link
						to={`/event/${events[currentEvent].id}`}
						style={{ textDecoration: 'none' }}
					>
						<CardContent
							sx={{
								background: 'linear-gradient(45deg, #0E2044, #7D8B8B)',
								margin: '1rem',
								borderRadius: '10px',
								boxShadow: '-3px 3px 15px rgba(0, 0, 0, 0.6)',
								color: '#fff'
							}}
						>
							<Grid container spacing={2}>
								<Grid item xs={12} sm={6}>
									<Typography variant="h4" component="div" gutterBottom>
										{events[currentEvent].title}
									</Typography>
									<Typography variant="body1">
										{events[currentEvent].description}
									</Typography>
								</Grid>
								<Grid item xs={12} sm={6}>
									<CardMedia
										component="img"
										sx={imageStyle}
										image={events[currentEvent].images[0]}
										alt={events[currentEvent].title}
									/>
								</Grid>
							</Grid>
						</CardContent>
					</Link>
					<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
						<ActionButton
							label="Previous"
							icon={<PrevIcon />}
							disabled={currentEvent === 0}
							onClick={() => setCurrentEvent(currentEvent - 1)}
						/>
						<ActionButton
							label="Next"
							icon={<NextIcon />}
							disabled={currentEvent === events.length - 1}
							onClick={() => setCurrentEvent(currentEvent + 1)}
						/>
					</Box>
				</Card>
			</Box>
		</>
	);
}

export default Home;
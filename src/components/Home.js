import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';
import {
	Box,
	CardHeader,
	Button,
	Typography,
	CardMedia,
	Card,
	CardContent
} from '@mui/material';
import NextIcon from '@mui/icons-material/NavigateNext';
import PrevIcon from '@mui/icons-material/NavigateBefore';
import data from '../seedData/data';

const Home = () => {
	const [currentReport, setCurrentReport] = useState(0);
	const [currentEvent, setCurrentEvent] = useState(0);
	const reports = data.reports;
	const events = data.events;

	return (
		<div style={{
			position: 'relative'
		}}>
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
						flexWrap: 'wrap',
						height: '10rem'
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
						<CardHeader
							title="Recently reported problems"
						/>
						{/* Show one report at a time and a next and previous button to show the */}
						<CardContent>
							<CardMedia
								component="img"
								height="140"
								image={reports[currentReport].image}
								alt={reports[currentReport].title}
							/>
							<Typography variant="h4" component="div" gutterBottom>
								{reports[currentReport].title}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{reports[currentReport].description}
							</Typography>
						</CardContent>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
							<Button
								variant="contained"
								startIcon={<PrevIcon />}
								disabled={currentReport === 0}
								onClick={() => setCurrentReport(currentReport - 1)}
							>
								Previous
							</Button>
							<Button
								startIcon={<NextIcon />}
								variant="contained"
								disabled={currentReport === reports.length - 1}
								onClick={() => setCurrentReport(currentReport + 1)}
							>
								Next
							</Button>
						</Box>
					</Card>

					{/* Events Card */}
					<Card
						sx={{
							backgroundColor: '#fff',
							borderRadius: '10px',
							boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
							margin: '1rem',
							flex: 1,
						}}
					>
						<CardHeader
							title="Recently added events"
						/>
						{/* Show one report at a time and a next and previous button to show the */}
						<CardContent>
							<CardMedia
								component="img"
								height="140"
								image={events[currentEvent].image}
								alt={events[currentEvent].title}
							/>
							<Typography variant="h4" component="div" gutterBottom>
								{events[currentEvent].title}
							</Typography>
							<Typography variant="body1" color="text.secondary">
								{events[currentEvent].description}
							</Typography>
						</CardContent>
						<Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
							<Button
								variant="contained"
								startIcon={<PrevIcon />}
								disabled={currentEvent === 0}
								onClick={() => setCurrentEvent(currentEvent - 1)}
							>
								Previous
							</Button>
							<Button
								startIcon={<NextIcon />}
								variant="contained"
								disabled={currentEvent === events.length - 1}
								onClick={() => setCurrentEvent(currentEvent + 1)}
							>
								Next
							</Button>
						</Box>
					</Card>

				</Box>
			</Box>
			<Footer />
		</div>
	);
}

export default Home;
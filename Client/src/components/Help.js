import React from 'react';
import {
	Box,
	Typography
} from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';

const Help = () => {
	return (
		<>
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
							height: 'calc(98vh - 64px - 56px)',
							overflowY: 'auto',
							paddingTop: '8rem',
							paddingLeft: '2rem',
							color: '#fff',
						}}
					>
						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div" fontSize="2.5rem">
								CityWatch Frequently Asked Questions:
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								What is CityWatch?
							</Typography>
							<Typography variant="body1" component="div">
								o	CityWatch is a online reporting tool aimed at improving engagement among local Hoboken residents, including students. The app will provide an accessible platform for individuals to report issues or concerns in their community.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								What is the purpose of CityWatch?
							</Typography>
							<Typography variant="body1" component="div">
								o	The goal of the project is to increase community involvement and communication between residents and local authorities, fostering a more engaged and connected community. With a user-friendly interface and intuitive reporting process, the web-app will strive to make a positive impact on the daily lives of Hoboken residents.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								Is CityWatch free to use?
							</Typography>
							<Typography variant="body1" component="div">
								o	Yes, CityWatch is completely free to use for all users.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								Can I report anonymously on CityWatch?
							</Typography>
							<Typography variant="body1" component="div">
								o	Yep! You can choose to report anonymously or with your name attached. If you choose to report anonymously, your name will not be displayed on the report. If you choose to report with your name attached, your name will be displayed on the report.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								How do I report an Issue/Event on CityWatch?
							</Typography>
							<Typography variant="body1" component="div">
								o	To report an Issue/Event, click the "Add Report"/"Add Event" button on the top navigation bar. From there, you will be prompted to fill out a form with information about the issue/event you are reporting. Once you have filled out the form, click the “Submit” button at the bottom of the page. Your report will be submitted and displayed on the "All Reports"/"All Events" pge.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								How do I view all the reports on CityWatch?
							</Typography>
							<Typography variant="body1" component="div">
								o	To view all the reports on CityWatch, click the "All Reports"/"All Events" button on the top navigation bar. From there, you will be able to view all the reports on the web-app.
							</Typography>
						</Box>

						<Box sx={{ marginBottom: '1rem' }}>
							<Typography variant="h6" component="div">
								How can I contact the CityWatch team?
							</Typography>
							<Typography variant="body1" component="div">
								o	You may contact the CityWatch team through social media accounts which are listed in th footer of the website.
							</Typography>
						</Box>
					</Box>
				</Box>
				<Footer />
			</div>
		</>
	);
}

export default Help;
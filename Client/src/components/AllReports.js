import React from 'react';
import { Link } from 'react-router-dom';
import {
	Box,
	Typography,
	CardMedia,
	Card,
	CardContent,
	Grid,
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
	color: '#0E2044',
	marginRight: '0.5rem'
}


const AllReports = () => {
	const reports = data.reports;

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
				All Reports
				<Grid container spacing={2}>
					{reports.map((report, index) => {
						return (
							<Grid item xs={12} sm={6} key={report.id}>
								<Card
									sx={{
										background: 'linear-gradient(45deg, #CE8AA5, #0E1B3D)',
										borderRadius: '10px',
										boxShadow: '0 0 10px rgba(0, 0, 0, 0.6)',
										margin: '1rem'
									}}
								>
									<Link
										to={`/report/${report.id}`}
										style={{ textDecoration: 'none' }}
									>
										<CardContent sx={{ color: '#fff' }}>
											<Grid container spacing={1}>
												<Grid item xs={6}>
													<Typography variant="h4" component="div" gutterBottom>{report.title}</Typography>
													<Typography variant="body2">{`${report.description.slice(0, 250)}...`}</Typography>
													<Typography variant="subtitle2" sx={{ marginTop: '1rem' }}
													><span style={spanStyle}>Date:</span> {report.date}</Typography>
													<Typography variant="subtitle2"><span style={spanStyle}>Time:</span> {report.time}</Typography>
													<Typography variant="subtitle2"><span style={spanStyle}>Location:</span> {report.location}</Typography>
												</Grid>
												<Grid item xs={12} sm={4}>
													<CardMedia
														component="img"
														sx={imageStyle}
														image={report.images[0]}
														alt={report.title}
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

export default AllReports;
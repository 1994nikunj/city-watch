import React from 'react';
import {
	Box,
	Grid,
	CardContent,
	Card,
	TextField,
	Button,
	Checkbox,
	FormGroup,
	FormControlLabel
} from '@mui/material';

const Feedback = () => {

	const handleSubmit = (e) => {
		e.preventDefault();
		alert('Feedback Submitted Successfully!');
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
				Feedback Page
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
				<form>
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
									label="Feedback Title"
									placeholder="A title for the feedback"
									variant="outlined"
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									renderInput={(params) => <TextField {...params} />}
								/>

								{/* Description */}
								<TextField
									id="outlined-basic"
									label="Feedback Description"
									placeholder="A description for the feedback"
									variant="outlined"
									multiline
									rows={4}
									sx={{
										width: '100%',
										marginBottom: '1rem'
									}}
									renderInput={(params) => <TextField {...params} />}
								/>

								{/* Checkbox for anonymous send */}
								<FormGroup>
									<FormControlLabel
										control={
											<Checkbox
												defaultChecked
												inputProps={{ 'aria-label': 'controlled' }}
											/>
										}
										label="Send Anonymously"
									/>

									<FormControlLabel
										control={
											<Checkbox
												defaultChecked
												inputProps={{ 'aria-label': 'controlled' }}
											/>
										}
										label="Send to Admin"
									/>
								</FormGroup>

								<Button
									variant="contained"
									color="primary"
									onClick={handleSubmit}
									sx={{
										width: '100%',
										height: '56px',
										marginTop: '1rem'
									}}
								>
									Submit Feedback!
								</Button>
							</CardContent>
						</Grid>
					</Grid>
				</form>
			</Card>
		</>
	);
}

export default Feedback;
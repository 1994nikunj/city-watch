import React, { useState } from 'react';
import {
	Box,
	Avatar,
	Button,
	Typography,
	Grid,
	InputLabel,
	Input,
	Stack,
	Chip,
	TextField
} from '@mui/material';

const avatarStyle = {
	width: '200px',
	height: '200px',
	border: '5px solid rgba(0, 0, 0, 0.7)',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.7)'
};

const statsKeyStyle = {
	marginTop: '1.5rem',
	width: '300px',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	color: '#000',
	background: 'linear-gradient(45deg, #fff9, #fff3)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)'
};

const statsValueStyle = {
	position: 'absolute',
	marginTop: '1rem',
	marginLeft: '300px',
	width: '100px',
	height: '40px',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	background: 'linear-gradient(45deg, #9D4D7A, #632E4C)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

const infoKeyStyle = {
	marginTop: '2.5rem',
	width: '15rem',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	color: '#000',
	background: 'linear-gradient(45deg, #fff9, #fff3)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)'
};

const infoValueStyle = {
	position: 'absolute',
	marginTop: '2rem',
	marginLeft: '15rem',
	width: '35rem',
	height: '3.5rem',
	marginRight: '1rem',
	padding: '0.5rem',
	borderRadius: '10px',
	background: 'linear-gradient(45deg, #398CA8, #194251)',
	boxShadow: '-3px 3px 10px 3px rgba(0, 0, 0, 0.7)',
	display: 'flex',
	justifyContent: 'left',
	alignItems: 'center',
	fontWeight: 'bold'
};

const headerStyle = {
	fontSize: '1.5rem',
	fontWeight: 'bold',
	color: '#D7D7D7'
};

const editButtonStyle = {
	width: '200px',
	height: '50px',
	fontSize: '1rem',
	display: 'flex',
	color: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	marginTop: '5rem',
	marginLeft: '15rem',
	borderRadius: '12px',
	background: 'linear-gradient(90deg, #9D4D7A, #632E4C)',
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

const avatarInputStyle = {
	width: '350px',
	height: '30px',
	fontSize: '0.75rem',
	display: 'flex',
	color: '#fff',
	justifyContent: 'center',
	alignItems: 'center',
	position: 'absolute',
	marginTop: '11.5rem',
	marginLeft: '11rem',
}

const focusedInfoValueStyle = {
	background: 'linear-gradient(90deg, #9D4D7A, #632E4C)',
	boxShadow: '0px 0px 20px 3px rgba(255, 255, 255, 0.5)'
};

const Profile = () => {
	const [interests, setInterests] = useState(['Camping', 'Dancing', 'Hiking', 'Movies', 'Reading']);
	const [name, setName] = useState('John Doe');
	const [email, setEmail] = useState('johnDoe@gmail.com');
	const [age, setAge] = useState('24');
	const [address, setAddress] = useState('1034 Hudson St, Hoboken, NJ 07030');
	const [profession, setProfession] = useState('Masters Student');
	const [avatar, setAvatar] = useState('https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=');

	const [edit, setEdit] = useState(false);
	const handleEdit = () => {
		setEdit(!edit);
		setNewInterest('');
	};

	const [focusedInput, setFocusedInput] = useState(null);

	const [newInterest, setNewInterest] = useState('');
	const handleAddInterest = () => {
		setInterests([...interests, newInterest]);
		setNewInterest('');
	};
	const handleRemoveInterest = (indexToRemove) => {
		setInterests(interests.filter((_, index) => index !== indexToRemove));
	};

	const handleAvatarChange = (e) => {
		setAvatar(e.target.value);
	};

	return (
		<>
			<Grid
				container
				spacing={2}
				sx={{
					display: 'flex',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center',
					paddingTop: '8rem',
				}}
			>

				{/* Column 1 */}
				<Grid item xs={6}
					sx={{
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<Typography sx={{
						fontSize: '1.9rem',
						fontWeight: 'bold',
						color: '#D7D7D7',
						marginBottom: '1rem',
					}}>
						User Profile
					</Typography>

					<Box
						sx={{
							display: 'flex',
							flexDirection: 'row',
							flex: '1'
						}}>
						<Avatar
							sx={avatarStyle}
							src={avatar}
						/>
						<Button
							sx={editButtonStyle}
							variant="contained"
							onClick={handleEdit}
						>
							{edit ? 'Save Profile' : 'Edit Profile'}
						</Button>
						{edit ? (
							<Input
								sx={avatarInputStyle}
								placeholder="Enter new avatar URL"
								value={avatar}
								onChange={handleAvatarChange}
							/>
						) : (<></>)}
					</Box>

					{/* Basic Stats */}
					<Box
						sx={{
							marginTop: '1rem',
							display: 'flex',
							flexDirection: 'column'
						}}>
						<Typography sx={headerStyle}>Basic Stats</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography sx={statsKeyStyle}>Number of problems reported</Typography>
							<Typography sx={statsValueStyle}>5</Typography>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<Typography sx={statsKeyStyle}>Number of events reported</Typography>
							<Typography sx={statsValueStyle}>5</Typography>
						</Box>
					</Box>

					{/* Interests */}
					<Box
						sx={{
							marginTop: '2rem',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between'
						}}>
						<Typography marginBottom={1} sx={headerStyle}>Interests</Typography>
						{edit ? (
							<Stack direction="row" spacing={1}>
								{interests.map((interest, index) => (
									<Chip
										key={index}
										label={interest}
										onDelete={() => handleRemoveInterest(index)}
										sx={{
											border: 'none',
											margin: '0',
											color: '#fff',
											'.MuiChip-deleteIcon': {
												color: 'red'
											}
										}}
									/>
								))}
								<Chip
									label={
										<TextField
											value={newInterest}
											onChange={(e) => setNewInterest(e.target.value)}
											placeholder="Add Interest"
											sx={{
												border: 'none',
												margin: '0',
												'& .MuiInputBase-root': {
													color: '#fff',
													border: 'none',
													margin: '0',
													padding: '0',
												},
												'& .MuiOutlinedInput-notchedOutline': {
													border: 'none',
													margin: '0',
													padding: '0',
												},
											}}
										/>
									}
									onDelete={handleAddInterest}
									sx={{
										border: 'none',
										width: '170px',
										margin: '0',
										'.MuiChip-deleteIcon': {
											color: 'green'
										}
									}}
								/>
							</Stack>
						) : (
							<Stack direction="row" spacing={1}>
								{interests.map((interest) => (
									<Chip key={interest} label={interest}
										sx={{
											border: 'none',
											margin: '0',
											color: '#fff',
											background: 'linear-gradient(90deg, #fff8, #fff1)'
										}}
									/>
								))}
							</Stack>
						)}
					</Box>
				</Grid>

				{/* Column 2 */}
				<Grid item xs={6}
					sx={{
						display: 'flex'
					}}
				>
					{/* Basic Information */}
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column'
						}}>
						<Typography sx={headerStyle}>Basic Information</Typography>
						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<InputLabel sx={infoKeyStyle}>Name</InputLabel>
							<Input
								sx={{
									...infoValueStyle,
									...(focusedInput === 'name' && focusedInfoValueStyle),
								}}
								value={name}
								onFocus={() => setFocusedInput('name')}
								onChange={(e) => setName(e.target.value)}
								disabled={!edit}
							/>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<InputLabel sx={infoKeyStyle}>Email</InputLabel>
							<Input
								sx={{
									...infoValueStyle,
									...(focusedInput === 'email' && focusedInfoValueStyle),
								}}
								value={email}
								onFocus={() => setFocusedInput('email')}
								onChange={(e) => setEmail(e.target.value)}
								disabled={!edit}
							/>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<InputLabel sx={infoKeyStyle}>Age</InputLabel>
							<Input
								sx={{
									...infoValueStyle,
									...(focusedInput === 'age' && focusedInfoValueStyle),
								}}
								value={age} onFocus={() => setFocusedInput('age')}
								onChange={(e) => setAge(e.target.value)}
								disabled={!edit}
							/>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<InputLabel sx={infoKeyStyle}>Address</InputLabel>
							<Input
								sx={{
									...infoValueStyle,
									...(focusedInput === 'address' && focusedInfoValueStyle),
								}}
								value={address}
								onFocus={() => setFocusedInput('address')}
								onChange={(e) => setAddress(e.target.value)}
								disabled={!edit}
							/>
						</Box>

						<Box sx={{ display: 'flex', flexDirection: 'row' }}>
							<InputLabel sx={infoKeyStyle}>Profession</InputLabel>
							<Input
								sx={{
									...infoValueStyle,
									...(focusedInput === 'profession' && focusedInfoValueStyle),
								}}
								value={profession}
								onFocus={() => setFocusedInput('profession')}
								onChange={(e) => setProfession(e.target.value)}
								disabled={!edit}
							/>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</>
	);
}

export default Profile;
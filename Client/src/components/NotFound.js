import React from 'react';
import {
	Box
} from '@mui/material';

import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';

const NotFound = () => {
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
							paddingTop: '7rem',
							color: '#fff',
							fontSize: '2rem',
							m: '1rem 2rem'
						}}>
						404: Page Not Found
					</Box>
					{/* YOUR CODE GOES HERE*/}
				</Box>
				<Footer />
			</div>
		</>
	);
}

export default NotFound;
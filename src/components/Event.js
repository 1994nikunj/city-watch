import React from 'react';
import Header from './Header';
import Footer from './Footer';
import backgroundImage from '../assets/base.jpg';
import {
	Box
} from '@mui/material';

const Event = () => {
    return (
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
					Single Event Page
				</Box>
				{/* YOUR CODE GOES HERE*/}
			</Box>
			<Footer />
		</div>
    );
}

export default Event;
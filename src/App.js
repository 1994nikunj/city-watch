import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NotFound from './components/NotFound';
import EventList from './components/EventList';
import VenueList from './components/VenueList';
import EventDetails from './components/EventDetails';
import VenueDetails from './components/VenueDetails';
import AttractionList from './components/AttractionList';
import AttractionDetails from './components/AttractionDetails';

import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AttractionsIcon from '@mui/icons-material/Attractions';
import PlaceIcon from '@mui/icons-material/Place';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';

import logo from './img/ticketmaster-logo.png';
import './App.css';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1 className='App-title'>Welcome to Ticketmaster!</h1>
					<Button
						variant="outlined"
						onClick={() => { window.location.href = '/' }}
						sx={buttonCSS}
						startIcon={<HomeIcon />}>Home</Button>
					<Button
						variant="outlined"
						onClick={() => { window.location.href = '/events?page=0' }}
						sx={buttonCSS}
						startIcon={<LocalActivityIcon />}>Events</Button>
					<Button
						variant="outlined"
						onClick={() => { window.location.href = '/attractions?page=0' }}
						sx={buttonCSS}
						startIcon={<AttractionsIcon />}>Attractions</Button>
					<Button
						variant="outlined"
						onClick={() => { window.location.href = '/venues?page=0' }}
						sx={buttonCSS}
						startIcon={<PlaceIcon />}>Venues</Button>
				</header>

				<div className='App-body'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/events' element={<EventList />} />
						<Route path='/events/:id' element={<EventDetails />} />
						<Route path='/attractions' element={<AttractionList />} />
						<Route path='/attractions/:id' element={<AttractionDetails />} />
						<Route path='/venues' element={<VenueList />} />
						<Route path='/venues/:id' element={<VenueDetails />} />
						<Route path='/venues/:id' element={<VenueDetails />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;

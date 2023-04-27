import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';

import Home from './components/Home';

import AllReports from './components/AllReports.js';
import Report from './components/Report';
import AddReport from './components/AddReport';

import AllEvents from './components/AllEvents.js';
import Event from './components/Event';
import AddEvent from './components/AddEvent';

import Help from './components/Help';
import Profile from './components/Profile';
import Feedback from './components/Feedback';

import NotFound from './components/NotFound';

import './App.css';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<div className='App-body'>
					<Routes>
						<Route path='/' element={<Login />} />				{/* Login Page */}
						<Route path='/signup' element={<Signup />} />		{/* Sign Up Page */}

						<Route path='/home' element={<Home />} />			{/* Home Page */}

						{/* Reports */}
						<Route path='/reports' element={<AllReports />} /> 	{/* All Reports Page */}
						<Route path='/report/:id' element={<Report />} />	{/* Single Report Page */}
						<Route path='/add-report' element={<AddReport />} />{/* Add Report Page */}

						{/* Events */}
						<Route path='/events' element={<AllEvents />} />	{/* All Events Page */}
						<Route path='/event/:id' element={<Event />} />		{/* Single Event Page */}
						<Route path='/add-event' element={<AddEvent />} />	{/* Add Event Page */}

						<Route path='/help' element={<Help />} />			{/* Help Page */}
						<Route path='/profile' element={<Profile />} />		{/* Profile Page */}
						<Route path='/feedback' element={<Feedback />} />	{/* Feedback Page */}

						<Route path='/signout' />
						<Route path="*" element={<NotFound />} />			{/* Page Not Found */}

					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
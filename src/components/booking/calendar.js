import React, {useContext} from 'react';
import Calendar from 'react-calendar';
import TimePicker from 'react-time-picker';
import {AppContext} from "../../App";
import {Link} from "react-router-dom";

function CalendarApp() {
	const appProps = useContext(AppContext)
	return (
		<div>
			<h2>{appProps.service}</h2>
			<h3>Select a date/time.</h3>
			<div id={'calendar-container'}>
				<Calendar
					onChange={appProps.onDateClick}
					value={appProps.date}
				/>
			</div>
			<div id={'time-container'}>
				<TimePicker
					onChange={appProps.onTimeChange}
					value={appProps.appointmentTime}
				/>
			</div>
			<Link to={'/localproviders'}>
				<button>Continue</button>
			</Link>
		</div>
	);
}

export default CalendarApp;

/** @format */

import React, { useState, useEffect } from "react";

function StopWatch({ onReturn }) {
	const [duration, setDuration] = useState(0);
	const [isRunning, setIsRunning] = useState(false);

	useEffect(() => {
		let timerId;
		if (isRunning) {
			timerId = setInterval(() => {
				setDuration((prevDuration) => prevDuration + 1);
			}, 1000);
		} else {
			clearInterval(timerId);
		}
		return () => clearInterval(timerId);
	}, [isRunning]);

	const toggleTimer = () => {
		if (isRunning) {
			setIsRunning(false);
			setDuration(0); // Resetting the timer
		} else {
			setIsRunning(true);
		}
	};

	const formatTime = (time) => {
		const minutes = Math.floor(time / 60)
			.toString()
			.padStart(2, "0");
		const seconds = (time % 60).toString().padStart(2, "0");
		return `${minutes}:${seconds}`;
	};

	return (
		<div className="durationExercise">
			<p>Duration: {formatTime(duration)}</p>
			<button onClick={toggleTimer}>{isRunning ? "Reset" : "Start"}</button>
			<button onClick={onReturn}>Return</button>
		</div>
	);
}

export default StopWatch;
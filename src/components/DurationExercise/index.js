/** @format */

import StopWatch from "../StopWatch"
export default function DurationExercise({ exercise, setMenuScreen }) {
	let { name } = exercise;
	return (
		<div>
			<p> {exercise.name}</p>
			<p>
				<StopWatch />
			</p>
			<button onClick={setMenuScreen}> Back to Menu </button>
		</div>
	);
}

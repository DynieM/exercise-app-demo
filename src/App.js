/** @format */

import "./App.css";
import { useCallback, useState } from "react";
import DurationExercise from "./components/DurationExercise/index";
import RepetitionExercise from "./components/RepetitionExercise/index";
import MapsExercise from "./components/MapsExercise/index";

const MENU_SCREEN = "menu";
const EXERCISE_SCREEN = "exercise";
const DURATION_EXERCISE = "duration";
const REPETITION_EXERCISE = "repetitive";
const MAPS_EXERCISE = "maps";

let exerciseList = [
	{ type: REPETITION_EXERCISE, name: "Push Ups" },
	{ type: DURATION_EXERCISE, name: "Bicycling" },
	{ type: DURATION_EXERCISE, name: "Running" },
	{ type: DURATION_EXERCISE, name: "Planks" },
	{ type: MAPS_EXERCISE, name: "Rowing" },
];

function App() {
	let [currentScreen, setCurrentScreen] = useState(MENU_SCREEN);
	let [currentExercise, setCurrentExercise] = useState({});
	let screenComponent = undefined;
	let buttonClick = useCallback((exercise) => {
		setCurrentExercise(exercise);
		setCurrentScreen(EXERCISE_SCREEN);
	});

	if (currentScreen === MENU_SCREEN) {
		screenComponent = (
			<div>
				<p>Exercise Menu </p>
				<ul>
					{exerciseList.map((exercise) => {
						return (
							<li key={exercise.name}>
								<button onClick={() => buttonClick(exercise)}>
									{" "}
									{exercise.name}{" "}
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		);
	} else if (currentScreen === EXERCISE_SCREEN) {
		switch (currentExercise.type) {
			case DURATION_EXERCISE:
				screenComponent = (
					<DurationExercise
						exercise={currentExercise}
						setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
					/>
				);
				break;
			case REPETITION_EXERCISE:
				screenComponent = (
					<RepetitionExercise
						exercise={currentExercise}
						setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
					/>
				);
				break;
			case MAPS_EXERCISE:
				screenComponent = (
					<MapsExercise
						exercise={currentExercise}
						setMenuScreen={() => setCurrentScreen(MENU_SCREEN)}
					/>
				);
				break;
			 }
	}

	return (
		<div className="App">
			<header className="App-header">
				<p>{screenComponent}</p>
			</header>
		</div>
	);
}

export default App;
import React, { useState, useRef } from "react";
import Exercises from "./Exercises";

const initialExercises: Exercise[] = [
  { name: "Bench Press", sets: [{ reps: "", weight: "" }] }
];

export const isValid = (exercises: Exercise[] | undefined) => {
  return (
    exercises &&
    exercises[0].sets.length > 0 &&
    !exercises[0].sets.some(set => set.reps === "" || set.weight === "")
  );
};

const WorkoutPage = () => {
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState(false);
  const exerciseState = useRef<Exercise[]>();

  if (finished) {
    return (
      <>
        <div>Finished!</div>
        <button onClick={() => setFinished(false)}>Restart?</button>
      </>
    );
  }

  return (
    <>
      <Exercises initialExercises={initialExercises} stateRef={exerciseState} />
      <button
        onClick={() => {
          if (isValid(exerciseState.current)) {
            setFinished(true);
          } else {
            setError(true);
          }
        }}
      >
        Finish
      </button>
      {error && <div className="error">Workout is not valid</div>}
    </>
  );
};

export default WorkoutPage;

import React, {
  useState,
  useImperativeHandle,
  MutableRefObject,
  Fragment
} from "react";
import { produce } from "immer";

const Exercises = ({
  initialExercises,
  stateRef
}: {
  initialExercises: Exercise[];
  stateRef: MutableRefObject<Exercise[] | undefined>;
}) => {
  const [exercises, setExercises] = useState(initialExercises);
  useImperativeHandle(stateRef, () => exercises);

  const addSet = () => {
    setExercises(
      produce(exercises, draftState => {
        draftState[0].sets.push({ weight: "", reps: "" });
      })
    );
  };

  const updateSet = (
    setPosition: number,
    key: "reps" | "weight",
    value: string
  ) => {
    setExercises(
      produce(exercises, draftState => {
        draftState[0].sets[setPosition][key] = value;
      })
    );
  };

  return (
    <div>
      {exercises.map(exercise => (
        <Fragment key={exercise.name}>
          <div>{exercise.name}</div>
          {exercise.sets.map((set, index) => (
            <div key={`set-${index}`}>
              <input
                placeholder="reps"
                value={set.reps}
                onChange={e => updateSet(index, "reps", e.target.value)}
              />
              <input
                placeholder="weight"
                value={set.weight}
                onChange={e => updateSet(index, "weight", e.target.value)}
              />
            </div>
          ))}
          <button onClick={addSet}>Add Set</button>
        </Fragment>
      ))}
    </div>
  );
};

export default Exercises;

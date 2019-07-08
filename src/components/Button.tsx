import React, { useState } from "react";

const Button = () => {
  const [number, setNumber] = useState<number>(0);
  return (
    <>
      <div>You have clicked the button: {number} times</div>
      <button onClick={() => setNumber(number + 1)}>Click me</button>
    </>
  );
};

export default Button;

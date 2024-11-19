import { useState } from "react";

export const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("clicked");
    setCount((count) => count + 1);
  };

  return <button onClick={handleClick}>Button: {count}</button>;
};

export default Button;

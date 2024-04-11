import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);
  const [count2] = useState(1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <h1>Count:{count2}</h1>
      <h1>Name:{props.name}</h1>
      <h2>Location:{props.location}</h2>
      <h1>Name:Prasun Chakraborty</h1>
      <h2>Location:Telengana</h2>
    </div>
  );
};

export default User;

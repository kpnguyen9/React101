import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("bowser");

  const [age, setAge] = useState(23);

  const handleClick = () => {
    setName("Peach");
    setAge(41);
  };

  const handleClickAgain = (name, e) => {
    console.log("hello " + name, e.target);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click Here</button>
      <button
        onClick={(e) => {
          handleClickAgain("mario", e);
        }}
      >
        Click here again
      </button>
    </div>
  );
};

export default Home;

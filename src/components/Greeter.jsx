import React from "react";

console.log("React is", React);

class Greeter extends React.Component {
  render() {
    return (
      <>
        <h2>Welcome back, {this.props.name}!</h2>
        <p>Your age: {this.props.age} years old</p>
      </>
    );
  }
}

export default Greeter;

import "./App.css";
import Greeter from "./components/Greeter";
import nameArray from "./data.js";

function App() {
  return (
    <div className="App">
      <h1 className="greeting">Hello, this is React</h1>
      {nameArray.map((n) => (
        <Greeter name={n.name} age={n.age} />
      ))}

      {/* Use this following format that puts everything in curley brackets and adds return for when you want to input more than one component */}
      {nameArray.map((n) => {
        return <Greeter name={n.name} age={n.age} />;
      })}
    </div>
  );
}

export default App;

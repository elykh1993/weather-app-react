import logo from "./logo.svg";
import "./App.css";
import Author from "./Author";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <Author />
    </div>
  );
}

export default App;

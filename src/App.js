import "./App.css";
import Author from "./Author";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Sydney" />
      <Author />
    </div>
  );
}

export default App;

import "./App.css";
import { Router } from "./router/Router";
import { Navbar } from "./Components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router />
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditorPage from "./page/EditorPage";
import BaseColorPicker from "./page/ColorPicker";
import HightChart from "./page/StatisticPage";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/">
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.js</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </Route>
        <Route path="/about">
          <h1>About</h1>
        </Route>
        <Route path="/base-editor">
          <EditorPage />
        </Route>
        <Route path="/color-picker">
          <BaseColorPicker />
        </Route>
        <Route path="/statistic">
          <HightChart />
        </Route>
      </div>
    </Router>
  );
}

export default App;

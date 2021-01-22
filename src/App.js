import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import HomePage from "./Pages/Home.page";

export default function App() {
  return (
    <Router>
      <Route component={HomePage} />
    </Router>
  );
}


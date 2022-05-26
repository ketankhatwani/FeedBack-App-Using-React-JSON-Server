import "./App.css";
import Navbar from "./Components/navbar";
import FeedBackList from "./Components/FeedBackList";
import FeedBackState from "./Components/FeedBackState";
import FeedBackFrom from "./Components/FeedBackFrom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import AboutIcon from "./Components/AboutIcon";
import { FeedbackProider } from "./Context/FeedbackContex";

function App() {
  return (
    <FeedbackProider>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackFrom />
                <FeedBackState />
                <FeedBackList />
                <AboutIcon />
              </>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </FeedbackProider>
  );
}

export default App;

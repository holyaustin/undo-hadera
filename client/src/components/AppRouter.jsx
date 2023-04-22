import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from "./Home";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}
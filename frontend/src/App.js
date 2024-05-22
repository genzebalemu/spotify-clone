
import Header from "./components/Header";
import { BrowserRouter as Router,Routes,Route,Link } from "react-router-dom";
import Home from "./Home";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import TinderCard from "./components/TinderCard";
function App() {
  return (
  <Router>
    <Header />
    <TinderCard />
    <Routes>
     <Route path="/home" element={<Home />}/>
     <Route path="/signin" element={<Signin/>}/>
     <Route path="/sighup" element={<Signup />}/>
    </Routes>
  </Router>

  );
}

export default App;

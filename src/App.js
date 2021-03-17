

import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import HomeScreens from "./Screens/HomeScreens";
import Header from "./components/Header";

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

const App =()=>{
  return (
    <Router>
      <Header />
      <main>
        <Route path="/" component={HomeScreens}/>
        
      </main>
      
    </Router>
  );
}
export default App;

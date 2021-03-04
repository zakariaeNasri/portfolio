

import "bootstrap/dist/css/bootstrap.min.css";
import HomeScreens from "./Screens/HomeScreens";
import Header from "./components/Header";
import Aboutme from "./components/Aboutme";
import Services from "./components/Services"
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

const App =()=>{
  return (
    <Router>
      <Header />
      <main>

        <Route path="/" component={HomeScreens}/>
        <Aboutme/>
        <Services/>
      </main>
      
    </Router>
  );
}
export default App;

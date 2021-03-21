import './App.css';
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Signup from './components/signup.jsx';
import Signin from './components/signin.jsx';
import Home from './components/home.jsx'



function App() {
  return (
<Router>
<Route path="/signup" component={Signup} />
<Route path="/signin" component={Signin} />
<Route path="/home" component={Home} />

</Router>

  );
}

export default App;

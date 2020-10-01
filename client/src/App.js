import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from './pages/Search';
import Saved from './pages/Saved';
import NavBar from './components/NavBar';
import './index.css'
//these components needs, the above mentioned components to to work, and it is imporiting all of them



const App = () => {
    return(
        <Router>
            <NavBar/>
        <Switch>
            <Route exact path ="/" component={Search}/>
            <Route exact path ="/saved" component={Saved}/>
        </Switch>

        </Router>
    )

}


export default App
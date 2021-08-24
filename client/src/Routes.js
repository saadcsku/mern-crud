import React from 'react';
import App from './App';
import Create from './Create';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

const Routes =() =>{

    return(
    <Router>
        <Route path="/" exact>
            <App />
        </Route>
        <Route path="/create" exact>
            <Create />
        </Route>
    </Router>
    )
}

export default Routes;
import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "./Views/Home";
import Games from "./Views/Games";
import About from "./Views/About";
import Login from "./Views/Login";

function App()
{
    return (
    <div>

        <Router>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/About">
                            <About />
                        </Route>
                        <Route path="/Games">
                            <Games />
                        </Route>
                        <Route path="/Login">
                            <Login />
                        </Route>
                    </Switch>
                </div>
        </Router>

    </div>
);

}

export default App;

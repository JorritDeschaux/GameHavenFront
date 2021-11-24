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
import Logout from "./Views/Logout";

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
                        <Route exact path="/discover">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route exact path="/games">
                            <Games />
                        </Route>
                        <Route path="/games/:name">
                            <Games />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </div>
        </Router>

    </div>
);

}

export default App;

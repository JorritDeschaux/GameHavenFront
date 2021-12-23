import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "./Views/Home";
import About from "./Views/About";
import Login from "./Views/Login";
import Logout from "./Views/Logout";
import Profile from "./Views/Profile";
import Search from "./Views/Search";
import Game from "./Views/Game";
import Register from "./Views/Register";

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
                        <Route exact path="/profile">
                            <Profile/>
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/search">
                            <Search />
                        </Route>
                        <Route exact path="/search/:name">
                            <Search />
                        </Route>
                        <Route exact path="/game/:id">
                            <Game />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                        <Route exact path="/register">
                            <Register />
                        </Route>
                        <Route exact path="/logout">
                            <Logout />
                        </Route>
                    </Switch>
                </div>
        </Router>

    </div>
);

}

export default App;

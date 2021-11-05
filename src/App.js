import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "./Views/Home";
import Games from "./Views/Games";
import About from "./Views/About";

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
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/Games">
                            <Games />
                        </Route>
                    </Switch>
                </div>
        </Router>

    </div>
);

}

export default App;

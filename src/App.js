import React from "react";
import{
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"

import Home from "./Views/Home";
import Product from "./Views/Product";
import About from "./Views/About";

function App()
{
    return (
    <div>
        <Router>
                <div className="p-3">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/products">
                            <Product />
                        </Route>
                    </Switch>
                </div>
        </Router>
    </div>
);

}

export default App;

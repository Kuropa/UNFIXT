import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Content from './Components/Content/Content'
import NotFound from './Components/NotFound/NotFound'

function App(props) {
    const state = props.state

    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() =>
                    <Content state={state} />} />
                <Route component={NotFound}/>
            </Switch>
        </Router>
    );
}

export default App;
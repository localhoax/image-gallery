import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Home, About, Contact, Help} from './components';
class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/help' component={Help} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
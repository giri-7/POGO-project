import React, {Component} from 'react';
import {Route} from 'react-router';
import {BrowserRouter,Switch,HashRouter} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Forgot from './Forgot';
import NewPassword from './NewPassword';


export default class Navigation  extends Component{
	render(){
		return(
                <BrowserRouter>
                    <Switch>
                          <Route exact path='/' component={Login}/>
                          <Route exact path='/Login' component={Login}/>
                          <Route exact path='/Register' component={Register}/>
                          <Route exact path='/Forgot' component={Forgot}/>
                          <Route exact path='/NewPassword' component={NewPassword}/>

                     </Switch>
                </BrowserRouter>     
			);
	}
}

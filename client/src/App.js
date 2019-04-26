import React,{Component} from 'react'
import {Provider} from 'react-redux'
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom';

import store from './store'
import LoginPage from './Components/Login';
import EmployeeList from './Components/EmployeeList'
import './Styles/App.css';




class App extends Component{
    render(){
        console.log('test')
        return (
            <Provider store={store}>

                <Router>
                    <Switch>

                            <Route  exact="true" path="/" component={LoginPage}/>
                             <Route exact="true" path="/employeelist" component={EmployeeList}/>


                    </Switch>
                </Router>

            </Provider>
        )
    }
}

export default App;
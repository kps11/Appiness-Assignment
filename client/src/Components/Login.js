import React from 'react';
import { connect } from 'react-redux';
import Textfieldgroup from './Textfieldgroup'
import {loginUser} from '../Actions/auth'
import {Redirect} from 'react-router-dom'
class LoginPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submitted: false,
            error:{}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { email, password } = this.state;
        const userdata = {
            email:email,
            password : password
        }
         
        if (email && password) {
            // dispatch(userActions.login(username, password));
            this.props.loginUser(userdata)
        }
    }

    render() {
        const {error } = this.state;
        const {auth,errors} = this.props
        var errmsg=''
        if(errors.errors){
            errmsg = errors.errors
            console.log(errors)
        }
        console.log(errors)
        if(this.state.submitted && auth.user.sucess){
            this.props.history.push('/employeelist')

        }


        return (
            <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your Appiness Account</p>
                        {errors.errors ? <h6>{errmsg}</h6>:""}
                        <form onSubmit={this.handleSubmit}>

                            <Textfieldgroup
                                placeholder='Email Address'
                                name="email"
                                type="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                error={error.email}

                            />
                            <Textfieldgroup
                                placeholder='password'
                                name="password"
                                type="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                                error={error.password}

                            />

                            <input type="submit" className="btn btn-info btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export const mapStateToProps = (state) =>({
    auth : state.auth,
    errors : state.errors
})


export default connect (mapStateToProps,{loginUser})(LoginPage);
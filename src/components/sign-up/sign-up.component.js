import React, { Component } from 'react';
import FormButton from "../../form-button/form-button.component";
import FormInput from '../forms/form-input.component';
import './sign-up.styles.scss'
export class SignUp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             displayName:'',
             email:'',
             password:'',
             confirmPassword:''
        }
    }

    handleChange = (e) => {
        const {value, name} = e.target;
        this.setState({...this.state, [name]:value})
    }
    
    render() {
        return (
            <div className="sign-up">
                <h1>I do not have an account</h1>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="displayName"
                        value={this.state.displayName}
                        label="Display Name"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="email"
                        value={this.state.email}
                        label="Email"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="password"
                        value={this.state.password}
                        type="password"
                        label="Password"
                        handleChange={this.handleChange}
                    />
                    <FormInput 
                        name="confirmPassword"
                        value={this.state.confirmPassword}
                        label="Confirm Password"
                        type="password"
                        handleChange={this.handleChange}
                    />
                    <FormButton type="submit">
                        SIGN UP   
                    </FormButton>
                </form>

            </div>
        )
    }
}

export default SignUp

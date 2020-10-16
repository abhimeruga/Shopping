import React, { Component } from 'react'
import './sign-in.styles.scss';
import FormInput from '../forms/form-input.component'
import FormButton from "../../form-button/form-button.component";
import {signInWithGoogle} from '../../firebase/firebase.utils'

export class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email:'',
            password: '',
        })
    }
    handleChange = e => {
        const {value, name} = e.target;
        this.setState({...this.state, [name]:value})
    }
    
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span> *You can sign with google account as well </span>
                <form onSubmit={this.handleSubmit}>
                <div className="email">
                    <FormInput type="email"
                    name="email"
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    label='email' 
                    required />
                </div>
                <div className="password">
                    <FormInput type="password"
                    name="password"
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label='password'
                    required />
                </div>
                <div className="cta">
                <FormButton type="submit" >
                        Sign In
                </FormButton> 
                <FormButton
                 onClick= {signInWithGoogle} isGoogleSigneIn>
                    Sign in using Google
                </FormButton>
                </div>
                </form>
            </div>
        )
    }
}

export default SignIn

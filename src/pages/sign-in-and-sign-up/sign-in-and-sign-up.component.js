import React from 'react'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'
import './sign-in-and-sign-up.styles.scss'
function SignInAndSignOut() {
    return (
        <div className='signupSignin'>
            <div className="signIn">
                <SignIn />
            </div>
            <div className="signUp">
                <SignUp />
            </div>
            
        </div>
    )
}

export default SignInAndSignOut

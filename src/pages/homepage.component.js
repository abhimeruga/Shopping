import React from 'react'
import Directory from '../components/directory/directory.component'
import './homepage.styles.scss'
import {Route} from 'react-router-dom'
import ShopPages from './shop-details/shoppages';
import SignInAndSignOut from './sign-in-and-sign-up/sign-in-and-sign-up.component'
import Header from '../components/header/header.component';
import {connect} from 'react-redux';


import { auth } from '../firebase/firebase.utils'


class Homepage extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
             currentUser:{}
        }
    }
    subscribeAuth = null;
    componentDidMount() {
        this.subscribeAuth = auth.onAuthStateChanged(user => {
            this.setState({currentUser: user})
            console.log(user)
        });
    }

    componentWillUnmount() {
        this.subscribeAuth();
    }

    render() {
        return (<div>
            <Header/>
            <div className='homepage'>
                <Route exact path="/" component={Directory} />
                <Route exact path="/shop" component={ShopPages}/>
                <Route exact path="/signInSignUp" component={SignInAndSignOut} />
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Homepage)

import React from 'react'
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../asessts/crown.svg'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils'
import  CartIcon  from "../cart-icon/cart-icon.component";
function Header({user_data}) {
    return (
        <div className="header">
            <div className="logo-container">
            <Link to='/'>
                <div className='logo' >
                    <Logo />
                </div>
            </Link>
            </div>
            <div className="side-menulist">
                <div className="side-item">
                    <Link to="/shop"> Shop </Link> 
                </div>
                <div className="side-item">
                    <Link to=""> Profile </Link> 
                </div> 
                {
                    user_data ?
                    <div className="side-item" onClick={()=>{ auth.signOut() }} >
                        <Link to="/"> Sign Out </Link> 
                    </div>
                    :
                    <div className="side-item">
                        <Link to="/signInSignUp"> Sign In </Link> 
                    </div>  
                }
                <div className="side-item">
                    <CartIcon />
                </div>

            </div>
            
        </div>
    )
}

export default Header

import React from 'react'
import './loginPage.css'
import userIcon from '../assets/person.png'
import emailIcon from '../assets/email.png'
import passwordIcon from '../assets/password.png'

const loginPage = () => {
    return ( 
        <div className="container">
            <div className="header">
                <div className="text">Sign Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input"> //Name
                    <img src={userIcon} alt="" />
                    <input type="text" />
                </div>
                <div className="input"> // Email
                    <img src={emailIcon} alt="" />
                    <input type="email" />
                </div>
                <div className="input"> // Password
                    <img src={passwordIcon} alt="" />
                    <input type="password" />
                </div>
            </div>
        </div>

    )
}
export default App; 
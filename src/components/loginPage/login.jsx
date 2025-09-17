import React from 'react'
import './loginPage.css'
import userIcon from '../assets/person.png'
import emailIcon from '../assets/email.png'
import passwordIcon from '../assets/password.png'

const loginPage = () => {

    const [action, setAction] = useState("Sign Up"); 

    return ( 
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={userIcon} width={40} height={40} alt="" />
                    <input type="text" placeholder='Name' />
                </div>
                <div className="input">
                    <img src={emailIcon} width={40} height={40} alt="" />
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input"> 
                    <img src={passwordIcon} width={40} height={40} alt="" />
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className="forgotPassword">Forgot Password? <span>Click Here!</span></div>

            <div className="submit-container">
                <div className={action ==="Login"?"submit gray":"submit"}>Sign Up</div>
                <div className={action ==="Sign Up"?"submit gray":"submit"}>Login</div>

            </div>



        </div>

    )
}
export default loginPage; 
import React from "react";
import "./LoginPage.css"


const LoginPage = () => {
    return(
        <div>
            <div className="div-main-login">
                <div className="div-login__content">
                    <div className="login-div">
                        <div className="login-container">
                            <b className="login-title">
                                LOGIN
                            </b>
                            <div className="input-group">
                                <p>Username or email address *</p>
                                <input className="username-input" type="text"/>
                            </div>
                            <div className="input-group">
                                <p>Password *</p>
                                <input className="password-input" type="password" />
                            </div>
                            <div className="button-group">
                                <button className="login-button">
                                    LOGIN
                                </button>
                            </div>
                            <div className="remember-me">
                                <input className="remember-me-checkbox" type="checkbox" />
                                <b>Remember me</b>
                            </div>
                            <div className="additional-links">
                                <p className="lost-password">
                                    Lost your password?
                                </p>
                                <p className="register-link">
                                    Click here to register
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPage
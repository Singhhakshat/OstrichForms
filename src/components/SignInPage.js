import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignInPage(){

    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const colors = ["FFC5C5", "FFEBD8", "C7DCA7", "C7DCA7" ,"92C7CF", "756AB6", "ECEE81"];

    function backgroundColorPicker(){
        if(backgroundColor === '') setBackgroundColor('#' + colors[Math.floor(Math.random() * colors.length)]);
        return backgroundColor;
    }

    return(
        <div className="sign-container">
            <div className="sign-holder">
                <h1 className="sign-text" style = {{color: backgroundColorPicker()}}>Hello,<br></br> Who's this?</h1>
                <form className="sign-form">
                    <input value={email} placeholder="Email" onChange={(ev) => {setEmail(ev.target.value)}} required />
                    <input value={password} placeholder="Password" onChange={(ev) => {setPassword(ev.target.value)}} required/>
                    <Link className="sign-link forgot-password">Forgot password?</Link>
                    <button className="sign-button" style = {{ backgroundColor: backgroundColorPicker() }}>Take me there.</button>
                </form>
                <div className="sign-option">New here? <Link to={'/signup'} className="sign-link">Signup</Link></div>
            </div>
        </div>
    );
}
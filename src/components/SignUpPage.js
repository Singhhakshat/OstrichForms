import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUpPage(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('');
    const [counter, setCounter] = useState(1);
    const colors = ["FFC5C5", "FFEBD8", "C7DCA7", "C7DCA7" ,"92C7CF", "756AB6", "ECEE81"];

    function backgroundColorPicker(){
        if(backgroundColor === '') setBackgroundColor('#' + colors[Math.floor(Math.random() * colors.length)]);
        return backgroundColor;
    }

    return(
        <div className="sign-container">
            <div className="sign-holder">
                <h1 className="sign-text" style = {{color: backgroundColorPicker()}}>Let's complete your profile.</h1>
                <form className="sign-form">
                    {counter === 1 && (<input type="text" placeholder="Tell us your name" value={name} onChange={(ev) => {setName(ev.target.value)}} required/>)}
                    {counter === 2 && (<input type="email" placeholder="Email" value={email} onChange={(ev) => {setEmail(ev.target.value)}} required/>)}
                    {counter === 3 && (<input type="password" placeholder="Password" value={password} onChange={(ev) => {setPassword(ev.target.value)}}required/>)}
                    <button type="submit" className="sign-button" style = {{backgroundColor: backgroundColorPicker()}} onClick={() => setCounter(counter + 1)}>{counter === 3 ? "Create my account" : "Next"}</button>
                </form>
                <div className="sign-option">already a user? <Link to={'/login'} className="sign-link">Signin</Link></div>
            </div>
        </div>
    );
}
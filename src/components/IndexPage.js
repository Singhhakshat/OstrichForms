import { useState } from "react";
import IndexPageButtons from "./IndexPageButtons";

export default function IndexPage(){

    const [backgroundColor, setBackgroundColor] = useState('');
    const colors = ["FFC5C5", "FFEBD8", "C7DCA7", "C7DCA7" ,"92C7CF", "756AB6", "ECEE81"];

    function backgroundColorPicker(){
        if(backgroundColor === '') setBackgroundColor('#' + colors[Math.floor(Math.random() * colors.length)]);
        return backgroundColor;
    }

    return(
        <div className="index-container">
            <div className='index-holder' style = {{color: backgroundColorPicker()}}>
                <div className="main-text">No more boring forms, The only form builder you will ever need.</div>
                <div className="index-button-holder">
                    <IndexPageButtons className = "index-button" link={"/signup"} text = "Sign Up for free." />
                    <IndexPageButtons className = "index-button" link={"/login"} text = "Already a user? Login." />
                </div>
            </div>
        </div>
    );
}
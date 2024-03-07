import { useEffect, useState } from "react";

export default function FormPage(){

    const formInfo = [
        {
            name: "Daily update Form",
            hasBackgroundColor: true,
        },
        {
            text: "Question 1",
            hasTextInput: false,
            hasOptions:true,
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            hasFileUpload: false,
        },
        {
            text: "Question 2",
            hasTextInput: true,
            hasOptions:false,
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            hasFileUpload: false,
        },
        {
            text: "Question 3",
            hasTextInput: false,
            hasOptions:false,
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            hasFileUpload: true,
        }
    ];

    const [counter, setCounter] = useState(1);
    const [selectedInput, setSelectedInput] = useState(null);
    const [formValues, setFormValues] = useState([]);

    const [backgroundColor, setBackgroundColor] = useState('');
    const colors = ["FFC5C5", "FFEBD8", "C7DCA7", "C7DCA7" ,"92C7CF", "756AB6", "ECEE81"];

    function backgroundColorPicker(){
        setBackgroundColor('#' + colors[Math.floor(Math.random() * colors.length)]);
        return backgroundColor;
    }

    useEffect(() => {
        backgroundColorPicker();
    }, [])

    function button(){
        if(selectedInput != null && counter < formInfo.length - 1){
            setCounter(counter + 1);
            setFormValues([...formValues, selectedInput]);
            console.log(selectedInput);
            setSelectedInput(null);
            backgroundColorPicker();
        }
    }

    return(
        <div className="form-container" style={{backgroundColor: backgroundColor}}>
            <p>{formInfo[counter].text}</p>

            {formInfo[counter].hasOptions && (
                <form>
                    {formInfo[counter].options.map((option) => {
                        return (<>
                            <input 
                                type="radio"
                                id={option} 
                                value={option} 
                                checked={selectedInput === option}
                                onChange={(ev) => {setSelectedInput(ev.target.value)}}
                            />
                            <label htmlFor = {option}>{option}</label>
                        </>);
                    })}
                </form>
            )}

            {formInfo[counter].hasTextInput && (
                <textarea id="form-text-area" name="text-area" rows="7" cols="40" placeholder="Type here...." value={selectedInput} onChange={(ev) => {setSelectedInput(ev.target.value)}}></textarea>
            )}

            {formInfo[counter].hasFileUpload && (
                <input type="file" id="form-file-input" onChange={(ev) => {setSelectedInput(ev.target.value)}} multiple />
            )}
            <button onClick={button}>{counter < formInfo.length ? "Next" : "Submit"}</button>
        </div>
    );
}
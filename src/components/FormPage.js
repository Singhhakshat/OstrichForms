import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";

export default function FormPage(){

    const formInfo = [
        {
            text: "Question 1",
            hasTextInput: false,
            hasOptions:true,
            options: ["Option 1 is very long and im using it to test the length", "Option 2", "Option 3", "Option 4"],
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
        },
        {
            text: "Question 4",
            hasTextInput: false,
            hasOptions:true,
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            hasFileUpload: false,
        },
        {
            text: "Question 5",
            hasTextInput: true,
            hasOptions:false,
            options: ["Option 1", "Option 2", "Option 3", "Option 4"],
            hasFileUpload: false,
        },
    ];

    const formContainerRefs = useRef([]);

    const [counter, setCounter] = useState(0);
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
        formContainerRefs.current = formContainerRefs.current.slice(0, formInfo.length);
    }, [])

    function button(){
        if((formValues[counter] != null || selectedInput != null) && counter < formInfo.length){
            setFormValues([...formValues, selectedInput]);

            if(counter >= formValues.length) setFormValues([...formValues, selectedInput]);
            else {
                const newArray = [...formValues];
                newArray[counter] = selectedInput;
                setFormValues(newArray);
            }

            console.log(selectedInput);
            setSelectedInput(null);
            backgroundColorPicker();     
            setCounter((prevCounter) => {
                const nextCounter = prevCounter + 1;
                if (nextCounter < formInfo.length) {
                    console.log(nextCounter);
                    formContainerRefs.current[nextCounter].scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return nextCounter;
                }
                return prevCounter;
            });
        }
        if(!counter < formInfo.length) {console.log(formValues);}
    }

    function prevButton(){
        setCounter((prevCounter) => {
            const nextCounter = prevCounter - 1;
            if (nextCounter >= 0) {
                console.log(nextCounter);
                formContainerRefs.current[nextCounter].scrollIntoView({ behavior: 'smooth', block: 'start' });
                return nextCounter;
            }
            return prevCounter;
        });
    }

    return(
        <div className="form">
        {formInfo.map((step, index) => {
            return (
                <div className="form-container" key={index} style={{backgroundColor: backgroundColor}} ref={el => formContainerRefs.current[index] = el}>
                    <p className="form-text">{step.text}</p>

                    {step.hasOptions && (
                        <form className="form-options-holder">
                            {step.options.map((option) => {
                                return (<div className="form-options" style={{borderColor: selectedInput === option? `white` : `black`}}>
                                    <input 
                                        type="radio"
                                        id={option} 
                                        value={option} 
                                        checked={(selectedInput === option) || (formValues[counter] === option)}
                                        onChange={(ev) => {setSelectedInput(ev.target.value);}}
                                    />
                                    <label htmlFor = {option}>{option}</label>
                                </div>);
                            })}
                        </form>
                    )}

                    {step.hasTextInput && (
                        <textarea className="form-text-area" id="form-text-area" name="text-area" rows="7" cols="40" placeholder="Type here...." onChange={(ev) => {setSelectedInput(ev.target.value)}}></textarea>
                    )}

                    {step.hasFileUpload && (
                        <input className="form-file-upload" type="file" id="form-file-input" onChange={(ev) => {setSelectedInput(ev.target.value)}} multiple />
                    )}
                    <button onClick={button} className="form-button">{counter < formInfo.length ? "Next" : "Submit"}</button>
                    {counter >= 1 && <button onClick={prevButton} className="form-button">Previous</button>}
                    </div>
            );
        })}
        </div>
    );
}
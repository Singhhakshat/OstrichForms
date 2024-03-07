import { Link, Outlet } from "react-router-dom";
import DashBoardFormsList from "./DashboardFormsList";
import { useState } from "react";

export default function Dashboard(){
    const forms = [ {
        title: "form for data collection 1",
        id: 12233,
    },
    {
        title: "form for data collection 2",
        id: 1223344,
    },
    {
        title: "form1",
        id: 122334455,
    },
    {
        title: "form1",
        id: 12233445566,
    },
];

const [backgroundColor, setBackgroundColor] = useState('');
const colors = ["FFC5C5", "FFEBD8", "C7DCA7", "C7DCA7" ,"92C7CF", "756AB6", "ECEE81"];

    function backgroundColorPicker(){
        if(backgroundColor === '') setBackgroundColor('#' + colors[Math.floor(Math.random() * colors.length)]);
        return backgroundColor;
    }

    return(
        <div className="dashboard-container">
            { forms.length ? (
                <>
                    {/* <button className="new-form-button">New form.</button> */}
                    <div className="dashboard-holder">
                        <DashBoardFormsList forms = {forms}/>
                        <div className="dashboard-form-data">
                            <Outlet/>
                        </div>
                    </div>
                </>

                
            ):(
                <div className="dashboard-no-forms">
                    <p>You don't have any forms yet.</p>
                    <Link className="dashboard-no-forms-button" style={{backgroundColor: backgroundColorPicker()}}>Create new form</Link>
                </div>
            )}
        </div>
    );
}
import { useParams } from "react-router-dom";

export default function DashBoardFormData(){

    const formData = {
        title: "Form for Data Collection 1",

    };

    const {formId} = useParams();

    return(
        <>
            <div className="dashboard-form-title">{`${formData.title} ${formId}`}</div>
            <form className="dashboard-form-settings">
                <input/>
                <input/>
            </form>
        </>
        
    );
}
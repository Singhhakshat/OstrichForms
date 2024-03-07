import { Link } from "react-router-dom";

export default function DashBoardFormsList({ forms }){

    return(
        <div className="dashboard-forms">
            <form>
                <input type="text" placeholder="Search forms" className="form-search"/>
            </form>

            <div className="dashboard-forms-list">
                {forms.length ? (
                    <ul>
                    {forms.map((form) => {
                        return <li><Link to={`/dashboard/${form.id}`} className="dashboard-list-element">{form.title}</Link></li>
                    })}
                </ul>
                ):(
                    <p><i>No forms.</i></p>
                )}
            </div>
        </div>
    );
}
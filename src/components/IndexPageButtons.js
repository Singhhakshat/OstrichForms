import { Link } from "react-router-dom";

export default function IndexPageButtons({className, link, text}){
    return(
        <Link to={link} className={className}>{text}</Link>
    );
}
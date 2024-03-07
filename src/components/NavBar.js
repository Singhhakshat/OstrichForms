import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <nav><Link to={'/'} className="nav-link">Ostrichforms.</Link></nav>
    );
}
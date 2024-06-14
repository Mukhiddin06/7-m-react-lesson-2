import { NavLink } from "react-router-dom"
import "./sidebar.css"
const Sidebar =() =>{
    return(
        <>
        <div className="sidebar">
        <NavLink to="/main" className="navlink">
            Users
        </NavLink>
        <NavLink to="/main/cars" className="navlink">
            Cars
        </NavLink>
        <NavLink to="/main/todos" className="navlink">
            Todos
        </NavLink>
        <NavLink to="/main/albums" className="navlink">
            Albums
        </NavLink>
        <NavLink to="/main/posts" className="navlink">
            Posts
        </NavLink>
        <NavLink to="/main/comments" className="navlink">
            Comments
        </NavLink>
        <NavLink to="/main/photos" className="navlink">
            Photos
        </NavLink>
        </div>
        </>
    )
}
export default Sidebar
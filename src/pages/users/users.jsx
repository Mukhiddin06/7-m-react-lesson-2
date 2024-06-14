import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./users.css";
import axios from "axios";
import UserModal from "../modal/modal";
const Users = () => {
    const [users, setUsers] = useState([])
    const [modal, setModal] = useState(false)
    const [user, setUser] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:3000/users`).then(response=>{
            if(response.status === 200)
            setUsers(response.data)
        })
    },[])
    const toggle =()=>{
        setModal(false)
        setUser({})
    }
    const deleteUser =(id)=>{
        axios.delete(`http://localhost:3000/users/${id}`).then(res=>{
            if(res.status === 200){
                window.location.reload()
            }
        })
    }
    const openModal =(item)=>{
        setUser(item)
        setModal(true)
    }
    return (
        <>
        <UserModal open={modal} toggle={toggle} user={user}/>
        <div className="container">
            <h1 className="table-name">Users</h1>
            <div className="table-wrapper">
                <div className="table">
                    <div className="btn-wrp">
                        <button className="btn-cars" onClick={()=>setModal(true)}>Add user</button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <td>T/R</td>
                                <td>Name</td>
                                <td>Email</td>
                                <td>Number</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.number}</td>
                                        <td>
                                            <div className="btn-wrapper">
                                                <button onClick={()=>openModal(item)} className="btn-edit"><i className="fa-solid fa-pen-to-square"></i></button>
                                                <button onClick={()=>deleteUser(item.id)} className="btn-trash"><i className="fa-solid fa-trash-can"></i></button>
                                                <NavLink to={`/single-page/${item.id}`}>
                                                    <span><i className="fa-solid fa-eye"></i></span>
                                                </NavLink>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    )
}
export default Users;

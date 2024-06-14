import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import axios from "axios";
import "./modal.css";

const UserModal = (props) => {
    const [form, setForm] = useState({});
    const  {open,  toggle, user} = props
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!user.id){
            axios.post("http://localhost:3000/users", form).then(res=>{
            if(res.status === 201){
                window.location.reload()
            }
            })
        }else{
            const payload = {
                name: form.name ? form.name : user.name,
                email: form.email ? form.email : user.email,
                number: form.number ? form.number : user.number
            }
            axios.put(`http://localhost:3000/users/${user.id}`, payload).then(res=>{
                if(res.status === 200){
                    window.location.reload()
                }
            })
        }
        
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="modal-title">Add user</h1>
            </ModalHeader>
            <ModalBody>
                <form className="modal-form" id="submit" onSubmit={handleSubmit}>
                    <input defaultValue={user.name} onChange={handleChange} type="text" placeholder="Name" name="name" className="modal-input" />
                    <input defaultValue={user.email} onChange={handleChange} type="text" placeholder="Email" name="email" className="modal-input" />
                    <input defaultValue={user.number} onChange={handleChange} type="number" placeholder="Number" name="number" className="modal-input" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="modal-btn" onClick={toggle}>Cancel</button>
                <button className="modal-btn2" form="submit" type="submit">Save</button>
            </ModalFooter>
        </Modal>
    );
};

export default UserModal;

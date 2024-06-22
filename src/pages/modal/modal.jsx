import { useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./modal.css";
import { auth } from "../../service";

const VerifyModal = ({open, toggle}) => {
    const [code, setCode] = useState("")
    const handleSubmit = async(e) => {
        e.preventDefault();
        const payload = {
            code, 
            email: localStorage.getItem("email")
        }
        try{
            const response = await auth.verify_code(payload)
        }catch(error){
            console.log(error);
        }
    };

    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalHeader>
                <h1 className="modal-title">Enter code</h1>
            </ModalHeader>
            <ModalBody>
                <form className="modal-form" id="submit" onSubmit={handleSubmit}>
                    <input  onChange={(e)=>setCode(e.target.value)} type="text" placeholder="Code" className="modal-input" />
                </form>
            </ModalBody>
            <ModalFooter>
                <button className="modal-btn" onClick={toggle}>Cancel</button>
                <button className="modal-btn2">Save</button>
            </ModalFooter>
        </Modal>
    );
};

export default VerifyModal;

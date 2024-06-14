import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./login.css";
import SnackbarWithDecorators from "../../components/ui/notification";

const Login = () => {
    const [form, setForm] = useState({});
    const [open, setOpen] = useState(false);
    const [type, setType] = useState("")
    const [title, setTitle] = useState("")
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
         
        const { username, password } = form;
        if (username === "admin" && password === "123") {
            setOpen(true)
            setType("success")
            setTitle("Your message was sent successfully.")
            setTimeout(()=>{
                navigate("/main");
            }, 1500)
        } else {
            setOpen(true)
            setType("danger")
            setTitle("Your message was sent eror.")
        }
    };

    return (
        <>
        <div className="container">
            <SnackbarWithDecorators open={open} setOpen={setOpen} type={type} title={title}/>
            <div className="card-wrapper">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">LOGIN</h1>
                </div>
                <div className="card-body">
                    <form id="submit" onSubmit={handleSubmit}>
                        <TextField sx={{marginBottom:'10px', width:'400px'}} type="text" name="username" onChange={handleChange} className="card-user"  id="outlined-basic" label="Username" variant="outlined" />
                        <TextField sx={{width:'400px'}} type="text" name="password"  onChange={handleChange} className="card-password" id="outlined-basic" label="Password" variant="outlined" />
                    </form>
                </div>
                <div className="card-foooter">
                    <Button type="submit" form="submit" variant="contained">login</Button>
                </div>
            </div>
            </div> 
        </div>
        </>
    );
}

export default Login;

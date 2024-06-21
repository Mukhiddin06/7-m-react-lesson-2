import { useState } from "react";
import { auth } from "../../service";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "./sign-up.css";

const SignUp = () => {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const { value, name } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response = await auth.sign_up(form)
            console.log(response);
        }catch(error){
            console.log(error);
        }
    };

    return (
        <>
        <div className="container">
            <div className="card-wrapper">
            <div className="card">
                <div className="card-header">
                    <h1 className="card-title">SIGN-UP</h1>
                </div>
                <div className="card-body">
                    <form id="submit" onSubmit={handleSubmit}>
                        <TextField sx={{marginBottom:'10px', width:'400px'}} type="text" name="email" onChange={handleChange} className="card-user"  id="email" label="Email" variant="outlined" />
                        <TextField sx={{marginBottom:'10px', width:'400px'}} type="text" name="full_name"  onChange={handleChange} className="card-user" id="full_name" label="Full name" variant="outlined" />
                        <TextField sx={{marginBottom:'10px', width:'400px'}} type="password" name="password"  onChange={handleChange} className="card-user" id="password" label="Password" variant="outlined" />
                        <TextField sx={{width:'400px'}} type="text" name="phone_number"  onChange={handleChange} className="card-password" id="phone_number" label="Phone number" variant="outlined" />
                    </form>
                </div>
                <div className="card-foooter">
                    <Button type="submit" form="submit" variant="contained">Sign-up</Button>
                </div>
            </div>
            </div> 
        </div>
        </>
    );
}

export default SignUp;

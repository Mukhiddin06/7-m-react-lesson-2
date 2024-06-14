import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SinglePage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/users/${id}`).then(response => {
            if (response.status === 200) {
                setUser(response.data);
            }
        });
    }, [id]);

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div className="single-page-container">
            <h1>User Details</h1>
            <div className="card">
                <h2>{user.name}</h2>
                <p>Email: {user.email}</p>
                <p>Number: {user.number}</p>
            </div>
        </div>
    );
};

export default SinglePage;

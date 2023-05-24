import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const RegLogForm = () => {

    const navigate = useNavigate();

    const [userInfo, setUserInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const changeHandler = (e) => {
        setUserInfo({
            ...userInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", userInfo, {withCredentials: true})
            .then(res => {
                console.log(res.data);
                navigate("/dashboard");
            })
            .catch(err => console.log(err));
    }

  return (
    <div>
        <div className="row">
            <form action="" className="col-med-4 offset-2" onSubmit={submitHandler}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" name="password" id="password" placeholder="Password" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="password" className="form-control" name="confirmPassword" id="confirmPassword" placeholder="Confirm Password" onChange={changeHandler}/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    </div>
  )
}

export default RegLogForm
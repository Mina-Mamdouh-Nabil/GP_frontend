import React, {useState} from "react";
import Users from './Users';
import {Link,useNavigate} from 'react-router-dom';
import {v4 as uuid} from "uuid"

function Add() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    let history = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name,
        b = email,
        c = password;

        Users.push({id: uniqueId, Name: a, Email: b, Password: c});
        history("/");
    }

    return <div>
        <form>
            <label for="name">Name</label><br />
            <input type="text" name="name" id="name" required onChange={(e) => setName(e.target.value)}></input><br />
            <label for="email">Email</label><br />
            <input type="text" name="email" id="email" required onChange={(e) => setEmail(e.target.value)}></input><br />
            <label for="password">Password</label><br />
            <input type="text" name="email" id="password" required onChange={(e) => setPassword(e.target.value)}></input><br />
            <button onClick={(e) => handleSubmit(e)} type="submit">Submit</button>
        </form>
    </div>
}

export default Add;
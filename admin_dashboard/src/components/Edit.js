import React, {useState, useEffect} from "react";
import Users from './Users';
import {Link,useNavigate} from 'react-router-dom';
import {v4 as uuid} from "uuid"

function Edit() {

    const[name, setName] = useState('');
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');
    const[id, setId] = useState('');

    let history = useNavigate();

    var index = Users.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Users[index];
        a.name = name;
        a.email = email;
        a.password = password;
        history("/");
    }

    useEffect(() =>{
        setName(localStorage.getItem("Name"));
        setEmail(localStorage.getItem("Email"));
        setPassword(localStorage.getItem("Password"));
        setId(localStorage.getItem("Id"));
    },[])
    
    return(
        <div>
            <form>
                <label for="name">Name</label><br />
                <input type="text" name="name" id="name" value={name} required onChange={(e) => setName(e.target.value)}></input><br />
                <label for="email">Email</label><br />
                <input type="text" name="email" id="email" value={email} required onChange={(e) => setEmail(e.target.value)}></input><br />
                <label for="password">Password</label><br />
                <input type="text" name="email" id="password" value={password} required onChange={(e) => setPassword(e.target.value)}></input><br />
                <button onClick={(e) => handleSubmit(e)} type="submit">Update</button>
            </form>
        </div>
    )
}



export default Edit;
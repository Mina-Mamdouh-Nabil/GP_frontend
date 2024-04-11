import React from "react";
import Users from './Users';
import "./Home.css";
import { Fragment } from "react";
import {Link,useNavigate} from 'react-router-dom';

function Home () {

    let history = useNavigate();

    const handleEdit = (id, name, email, password) => {
        localStorage.setItem("Name", name);
        localStorage.setItem("Email", email);
        localStorage.setItem("Password", password);
        localStorage.setItem("Id", id);
    }

    const handleDelete = (id) => {
        var index = Users.map(function(e){
            return e.id
        }).indexOf(id);

        Users.splice(index, 1);

        history('/');
    }
    return(
        <Fragment>
            <div className="table-container">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>
                                name
                            </th>
                            <th>
                                email
                            </th>
                            <th>
                                password
                            </th>
                            <th>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Users && Users.length > 0
                            ?
                            Users.map((item) =>{
                                return(
                                    <tr>
                                        <td>
                                            {item.name}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.password}
                                        </td>
                                        <td>
                                            <Link to={`edit`}>
                                            <button onClick={() => handleEdit(item.id, item.name, item.email, item.password)} className="button">Edit</button>
                                            </Link>
                                            &nbsp;
                                            <button onClick={() => handleDelete(item.id)} className="button">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            "No data available"
                        }
                    </tbody>
                </table>
            </div>
            <br />
            <div>
                <Link to="/create">
                    <button className="create-button">Create</button>
                </Link>  
            </div>         
        </Fragment>
    );
};

export default Home;
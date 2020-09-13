import React from 'react';
import employeeActions from "../../store/actions/employeeActions";
import { useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom"

function Employee({ employee, isSearchResult }) {
    const dispatch = useDispatch();
    return (
        <>
            <tr>
                <td>{employee.fname}</td>
                <td>{employee.lname}</td>
                <td>{employee.designation}</td>
                <td>{employee.hireDate}</td>
                <td>{employee.skills}</td>
                {!isSearchResult &&
                    <td>
                        <a title="Delete" onClick={() => dispatch(employeeActions.deleteEmployee(employee.id))}><i className="material-icons">delete</i></a>
                        <a title="Edit" href=""><i className="material-icons">edit</i></a>
                        <NavLink to={`profile/${employee.id}`} ><i className="material-icons">pageview</i></NavLink>
                    </td>
                }

            </tr>
        </>
    );
}

export default Employee;
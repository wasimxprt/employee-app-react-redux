import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router'

function EmployeeDetails({ match }) {

    const employeeId = match.params.id;
    const employeeList = useSelector(state => state.employee.employees);
    let employee = employeeList.filter((employee) => employee.id == employeeId);

    if (employee.length === 0) {
        return <Redirect to='/' />
    }
    employee = employee[0];

    return (
        <div className="container about">
            <h5>About Me</h5>
            <hr />
            <div className="row">

                <div className="col s12 m4 l4">

                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <img src="http://labs.qnimate.com/portfolio-materialize/images/profile.png" width="64" height="64" />
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        </div>
                        <div className="card-action">
                            <a href="#">Link</a>
                            <a href='#'>Link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m8 l8">

                    <ul className="collapsible">
                        <li className="active">
                            <div className="collapsible-header">First Name: {employee.fname}</div>
                        </li>
                        <li className="active">
                            <div className="collapsible-header">Last Name: {employee.lname}</div>
                        </li>

                        <li className="active">
                            <div className="collapsible-header">Designation: {employee.designation}</div>
                        </li>
                        <li className="active">
                            <div className="collapsible-header">Hire Date: {employee.hireDate}</div>
                        </li>
                        <li className="active">
                            <div className="collapsible-header">Skills: {employee.skills}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default EmployeeDetails;
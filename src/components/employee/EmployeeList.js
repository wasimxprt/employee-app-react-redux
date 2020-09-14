import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Employee from './Employee';

function EmployeeList(props) {

    const employeeList = useSelector(state => state.employee.employees);
    const dispatch = useDispatch();

    return (
        <div className="container">
            <form className="white">
                {employeeList && employeeList.length > 0 ?
                    <table className="highlight responsive-table">
                        <thead>
                            <tr>
                                <th data-field="fname">First Name</th>
                                <th data-field="lname">Last Name</th>
                                <th data-field="designation">Designation</th>
                                <th data-field="hireDate">Hire Date</th>
                                <th data-field="skills">Skills</th>
                                <th data-field="actions">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {employeeList.map((employee)=>(
                                <Employee key={employee.id} employee={employee} />
                            ))}
                        </tbody>
                    </table> : <h5 className="center">No data found</h5>}
            </form>

        </div>
    );
}

export default EmployeeList;
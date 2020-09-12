import React from 'react';

function Employee({ employee, isSearchResult }) {
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
                        <i class="material-icons">delete</i>
                        <i class="material-icons">edit</i>
                        <i class="material-icons">pageview</i>
                    </td>
                }

            </tr>
        </>
    );
}

export default Employee;
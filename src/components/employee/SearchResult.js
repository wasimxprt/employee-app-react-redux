import React from 'react';
import Employee from './Employee';

function SearchResult({ employeeList, isSearchResult }) {
    return (

        <div className="white">
            {employeeList && employeeList.length > 0 ?
                <table className="highlight">
                    <thead>
                        <tr>
                            <th data-field="fname">First Name</th>
                            <th data-field="lname">Last Name</th>
                            <th data-field="designation">Designation</th>
                            <th data-field="hireDate">Hire Date</th>
                            <th data-field="skills">Skills</th>
                            {!isSearchResult && <th data-field="actions">Actions</th>}
                            
                        </tr>
                    </thead>

                    <tbody>
                        {employeeList.map((employee) => (
                            <Employee isSearchResult={isSearchResult} key={employee.id} employee={employee} />
                        ))}
                    </tbody>
                </table> : <h5 className="center">No data found</h5>}
        </div>


    );
}

export default SearchResult;
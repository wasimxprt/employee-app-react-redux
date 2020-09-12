import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';

function SearchEmployee(props) {

    const employeeList = useSelector(state => state.employee.employees);

    const [searchStr, setSearchStr] = useState("");
    const [searchResult, setSearchResult] = useState([]);

    const changeHandler = (event) => {
        setSearchStr(event.target.value)
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let filtered = employeeList.filter(employee => {
            if (employee.skills.toLowerCase().includes(searchStr.toLowerCase())) {
                return true;
            }
        })
        setSearchResult(filtered)
    }

    return (
        <div className="container">
            <form onSubmit={submitHandler} action="" className="white">
                <h5 className="grey-text text-darken-3">Search Employee</h5>
                <div className="input-field">
                    <label htmlFor="title">Enter skill</label>
                    <input type="text" id="searchStr" name="searchStr" value={searchStr} onChange={changeHandler} />
                </div>

                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Search</button>
                </div>
                {searchResult && searchResult.length ? <SearchResult employeeList={searchResult} isSearchResult={true} /> : null}

            </form>
        </div>
    );
}

export default SearchEmployee;
import React, { useState } from 'react';
import employeeActions from "../../store/actions/employeeActions";
import { useDispatch } from 'react-redux';
import {Redirect} from 'react-router-dom';


function AddEmployee(props) {

    const dispatch = useDispatch();
    const [values, setValues] = useState({
        fname: "",
        lname: "",
        designation:"",
        hireDate:"",
        skills:""
    });

    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(employeeActions.addEmployee(values));
    }
    return (
        <div className="container">
            <form onSubmit={submitHandler} action="" className="white">
                <h5 className="grey-text text-darken-3">Add Employee</h5>
                <div className="input-field">
                    <label htmlFor="title">First Name</label>
                    <input type="text" id="fname" name="fname" value={values.fname} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Last Name</label>
                    <input type="text" id="lname" name="lname" value={values.lname} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Designation</label>
                    <input type="text" id="designation" name="designation" value={values.designation} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="title">Hiring Date</label>
                    <input type="text" id="hireDate" name="hireDate" value={values.hireDate} onChange={changeHandler} />
                </div>
                <div className="input-field">
                    <label htmlFor="content">Skills</label>
                    <textarea name="skills" id="skills" className="materialize-textarea" onChange={changeHandler}></textarea>
                </div>
                <div className="input-field">
                    <button type="submit" className="btn pink lighten-1 z-depth-0">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;
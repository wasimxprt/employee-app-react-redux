import React, { useEffect, useState } from 'react';
import employeeActions from "../../store/actions/employeeActions";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import Materialize from "materialize-css";


function AddEmployee(props) {

    let history = useHistory();
    const dispatch = useDispatch();

    const [values, setValues] = useState({
        fname: "",
        lname: "",
        designation: "",
        hireDate: "",
        skills: ""
    });

    const [dateVal, setDateVal] = useState(new Date())

    const changeHandler = (event) => {
        setValues({
            ...values,
            [event.target.id]: event.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        let inputValues = {
            ...values,
            hireDate: document.getElementById("hireDate").value
        }
        dispatch(employeeActions.addEmployee(inputValues));
        history.push("/");
    }


    useEffect(() => {
        var context = this;
        var elems = document.querySelectorAll(".dateset");
        Materialize.Datepicker.init(elems, {
            defaultDate: new Date(),
            format: "dd-mm-yyyy",
            container: "body",
            onSelect: function (date) {
            },
            autoClose: true,
            maxDate: new Date()
        });

    }, []);

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
                    <input
                        id="hireDate"
                        name="hireDate"
                        type="text"
                        className="datepicker dateset"
                    />
                    {/* <input type="text" id="hireDate" className="datepicker dateset" name="hireDate" value={values.hireDate} onChange={changeHandler} /> */}
                </div>
                <div className="input-field">
                    <label htmlFor="content">Skills Ex: C,C++</label>
                    <textarea name="skills" id="skills" className="materialize-textarea" onChange={changeHandler}></textarea>
                </div>
                <div className="input-field">
                    <button className="btn pink waves-effect waves-light" type="submit" name="action">Submit<i className="material-icons right">send</i></button>
                </div>
            </form>
        </div>
    );
}

export default AddEmployee;
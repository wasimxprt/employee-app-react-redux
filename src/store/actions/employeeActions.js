import * as actions from "../contants/actionTypes";

const setEmployees = (employees) => {
    return {
        type: actions.SET_EMPLOYEES,
        payload: employees
    }
}

const addEmployee = (employee) => {
    
    return {
        type: actions.ADD_EMPLOYEE,
        payload: employee
    }
}

const getEmployees = () => {
    return {
        type: actions.GET_EMPLOYEES
    }
}

const deleteEmployee = (employeeId) => {
    
    return {
        type: actions.DELETE_EMPLOYEE,
        payload: employeeId
    }
}

export default {
    setEmployees,
    getEmployees,
    addEmployee,
    deleteEmployee
}
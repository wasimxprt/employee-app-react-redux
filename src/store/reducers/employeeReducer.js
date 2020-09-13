const initialState = {
    employees: [
        { id: "aed3", fname: 'Wasim', lname: 'Sayyed', designation: 'Service Delivery Engineer', hireDate: '02-02-2018', skills: 'HTML,CSS,JavaScript,Angular,React,Redux' },
        { id: "sde2", fname: 'John', lname: 'Doe', designation: 'Senior Software Engineer', hireDate: '02-10-2020', skills: 'Java EE,Springboot,Kubernetes' }
    ]
}

const employeeReducer = (state = initialState, action) => {

    let employees = state.employees;

    switch (action.type) {
        case "SET_EMPLOYEES":
            return {
                ...state,
                employees: action.payload
            }
        case "ADD_EMPLOYEE":

            let obj = { id: Math.random().toString(16).slice(-4) };
            let employee = { ...action.payload, ...obj };
            employees.push(employee);

            return {
                ...state,
                employees: employees
            }

        case "DELETE_EMPLOYEE":
            let newEmployees = employees.filter(employee => employee.id != action.payload);
            return {
                ...state,
                employees: newEmployees
            }
        default:
            return state;
    }
}

export default employeeReducer;
const initialState = {
    employees: [
         { id: 1, fname: 'Wasim', lname: 'Sayyed',designation: 'Software Engineer',hireDate: '02-02-2018',skills: 'html,css,javascript' },
         { id: 2, fname: 'Wasim', lname: 'Sayyed',designation: 'Software Engineer',hireDate: '02-02-2018',skills: 'Java,docker,devops' }
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

            let obj = {id: Math.random().toString(16).slice(-4)};
            let employee = {...action.payload, ...obj};
            
            //Object.assign(student, {id: id});
            employees.push(employee);

            return {
                ...state,
                employees: employees
            }

        case "GET_STUDENTS":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default employeeReducer;
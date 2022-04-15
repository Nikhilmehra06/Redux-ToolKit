import counterReducer from "./feature/counter.Feature";
import employeeReducer from "./feature/employees.feature";
const rootReducer = {
  counter: counterReducer,
  employees: employeeReducer,
};

export default rootReducer;

import React from "react";
import { Route, Routes } from "react-router-dom";
// import Counter from "./components/Counter";
import CounterRedux from "./components/CounterRedux";
import EmployeesRedux from "./components/EmployeesRedux";
// import Employees from "./components/Employees";

import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/employees"} element={<EmployeesRedux />} />
          <Route path={"/counter"} element={<CounterRedux />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;

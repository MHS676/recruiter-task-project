import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../assets/Pages/ErrorPage/ErrorPage";
import Dashboard from "../assets/Pages/Dashboard/Dashboard";
import EmployeeSalary from "../assets/Pages/EmployeeSalary/EmployeeSalary";
import PayrollItems from "../assets/Pages/PayrollItems/PayrollItems";
import Payslip from "../assets/Pages/Payslip/Payslip";
import Root from "/src/assets/layout/Root"
import Additon from "../assets/Pages/Addition/Additon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    children: [
        {
            path: "/",
            element: <Dashboard/>,
        },
        {
            path: "/employeeSalary",
            element: <EmployeeSalary/>,
            loader: () => fetch('/employee.json')
        },
        {
            path: "/payslip",
            element: <Payslip/>,
        },
        {
            path: "/payrollItems",
            element: <PayrollItems/>,
        },
        {
            path: "/addition",
            element: <Additon/>,
        },
       
    ]
  },
]);

export default router
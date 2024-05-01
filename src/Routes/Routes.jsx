import { createBrowserRouter } from "react-router-dom";
import Root from "../assets/layout/Root";
import ErrorPage from "../assets/Pages/ErrorPage/ErrorPage";
import Dashboard from "../assets/Pages/Dashboard/Dashboard";
import EmployeeSalary from "../assets/Pages/EmployeeSalary/EmployeeSalary";
import PayrollItems from "../assets/Pages/PayrollItems/PayrollItems";
import Payslip from "../assets/Pages/Payslip/Payslip";


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
        },
        {
            path: "/payslip",
            element: <Payslip/>,
        },
        {
            path: "/payrollItems",
            element: <PayrollItems/>,
        },
       
    ]
  },
]);

export default router
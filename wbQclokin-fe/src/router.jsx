import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./layouts/LandingPage";
import ErrorPage from "./pages/ErrorPage";
import {dashboardPageUrl} from "./pages/DashboardPage";
import SettingPage from "./pages/SettingPage";
import { allEmployeesRoute } from "./pages/EmployeesPage";
import LoginModal from "./components/modals/LoginModal";
import RegisterModal from "./components/modals/RegisterModal";
import ResetPasswordModal from "./components/modals/ResetPasswordModal";
import ForgetPasswordModal from "./components/modals/ForgetPasswordModal";
import { dashboardLayoutRoute } from "./layouts/DashboardLayout";
import { attendancePageRoute } from "./pages/AttendancePage";
import { employeeAttendanceRoute } from "./components/employeedetails/AttendanceReport";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginModal />,
      },

      {
        path: "register",
        element: <RegisterModal />,
      },

      {
        path: "reset-password",
        element: <ResetPasswordModal />,
      },

      {
        path: "forget-password",
        element: <ForgetPasswordModal />,
      },
    ],
  },

  {
    path: "/dashboard",
    ...dashboardLayoutRoute,
    children: [
      {
        index: true,
        ...dashboardPageUrl
      },

      {
        path: "setting",
        element: <SettingPage />,
      },

      {
        path: "attendance",
        ...attendancePageRoute,
      },

      {
        path: "employees",
        ...allEmployeesRoute,
      },

      {
        path: ":employeeId",
        ...employeeAttendanceRoute,
      },
    ],
  },
]);

/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useEffect } from "react";
import { Outlet, useLoaderData, useNavigation } from "react-router-dom";
import { Navbar } from "../components/navbar/Navbar";
import SideBar from "../components/navbar/SideBar";
import UnauthorizePage from "../pages/UnauthorizePage";

import { userDetails } from "../api/viewdetails";

const DashboardLayout = () => {
  // get the state of navigation
  const navigate = useNavigation();

  const data = useLoaderData();

  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      {/* nav bar with links to other components */}

      <div className="flex min-h-screen">
        <div className="w-64 h-screen fixed top-0 left-0 bg-gray-200">
          <SideBar />
        </div>
        <div className="flex-1 ml-64 p-4">
          <Navbar   userInfo={data}  />
          <Outlet/>
        </div>
      </div>
    </>
  );
};

async function loader({ request: { signal } }) {
  const resp = await userDetails({ signal });

  return resp;
}

export const dashboardLayoutRoute = {
  loader,
  errorElement: <UnauthorizePage />,
  element: <DashboardLayout />,
};

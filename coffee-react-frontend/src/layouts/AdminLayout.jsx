import React from 'react';
import {Outlet} from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar.jsx";


function AdminLayout(props) {
    return (
        <div className="md:flex">
            <AdminSidebar />
            <main className={"flex-1 h-screen overflow-y-scroll bg-gray-100 p-3"}>
                <Outlet />
            </main>
        </div>
    );
}

export default AdminLayout;
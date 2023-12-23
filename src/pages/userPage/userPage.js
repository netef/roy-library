import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Tab, Tabs } from "@mui/material";
import UserDetailsTab from "./userDetailsTab";
import UserOrdersTab from "./userOrdersTab";
import { useUserContext } from "../../contexts/UserContext";
import UserAdminTab from "./userAdminTab";
export default function UserPage() {
    const [page, setPage] = useState(0);
    const { user } = useUserContext();
    const selectPage = () => {
        switch (page) {
            case 0:
                return <UserDetailsTab />;
            case 1:
                return <UserOrdersTab />;
            case 2:
                return <UserAdminTab />;
            default:
                return <UserDetailsTab />;
        }
    };
    return (
        <div>
            <Navbar />
            <div className="page-layout">
                <Tabs
                    value={page}
                    onChange={(e, v) => setPage(v)}
                    aria-label="basic tabs example"
                >
                    <Tab label="Details" />
                    <Tab label="Orders" />
                    {user && user.is_admin && <Tab label="admin" />}
                </Tabs>
                <div>{selectPage()}</div>
            </div>
        </div>
    );
}

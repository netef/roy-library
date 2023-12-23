import React, { useState } from "react";
import Navbar from "../../components/navbar/navbar";
import { Tab, Tabs } from "@mui/material";
import UserDetailsTab from "./userDetailsTab";
import UserOrdersTab from "./userOrdersTab";
export default function UserPage() {
    const [page, setPage] = useState(0);
    const selectPage = () => {
        switch (page) {
            case 0:
                return <UserDetailsTab />;
            case 1:
                return <UserOrdersTab />;
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
                </Tabs>
                <div>{selectPage()}</div>
            </div>
        </div>
    );
}

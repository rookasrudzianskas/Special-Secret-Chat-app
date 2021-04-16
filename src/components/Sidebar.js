import React from "react";
import DashboardToggle from "./dashboard/DashboardToggle";
import CreateRoomBtnModal from "./CreateRoomBtnModal";
// import {Col, Grid, Row, Sidebar} from "rsuite";

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
            </div>
            bottom
        </div>
    );
};

export default Sidebar;

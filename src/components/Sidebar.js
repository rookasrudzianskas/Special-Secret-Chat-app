import React from "react";
import DashboardToggle from "./dashboard/DashboardToggle";
import CreateRoomBtnModal from "./CreateRoomBtnModal";
import {Divider} from "rsuite";
import ChatRoomList from "./rooms/ChatRoomList";

const Sidebar = () => {
    return (
        <div className="h-100 pt-2">
            <div>
                <DashboardToggle />
                <CreateRoomBtnModal />
                <Divider>Join the conversation</Divider>
            </div>
            <ChatRoomList></ChatRoomList>
        </div>
    );
};

export default Sidebar;

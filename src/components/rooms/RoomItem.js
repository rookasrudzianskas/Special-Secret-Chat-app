import React from "react";

const RoomItem = () => {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center">
                <h3 className="text-disappear">Room name</h3>
                <span>xx</span>
            </div>

            <div className="d-flex align-items-center text-black-70">
                <span>No messages yet...</span>
            </div>
        </div>
    );
};

export default RoomItem
import React from "react"
import {Button} from "rsuite";
import {useModalState} from "../../../misc/custom-hooks";

const EditRoomBtnDrawer = () => {

    const {isOpen, open, close } = useModalState();

    return (
        <div>
            <Button className="br-circle" size="sm" color="red" onClick={open}>
                A
            </Button>

        </div>
    )
}

export default EditRoomBtnDrawer
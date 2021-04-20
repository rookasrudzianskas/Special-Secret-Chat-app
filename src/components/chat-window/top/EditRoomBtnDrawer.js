import React from "react"
import {Button, Drawer} from "rsuite";
import {useModalState} from "../../../misc/custom-hooks";

const EditRoomBtnDrawer = () => {

    const {isOpen, open, close } = useModalState();

    return (
        <div>
            <Button className="br-circle" size="sm" color="red" onClick={open}>
                A
            </Button>

            <Drawer show={isOpen} onHide={close} placement="right">
                <Drawer.Header>
                    <Drawer.Title>
                        Edit Room
                    </Drawer.Title>
                </Drawer.Header>
                <Drawer.Body></Drawer.Body>
                <Drawer.Footer>
                    <Button block onClick={close}>
                        Close
                    </Button>
                </Drawer.Footer>
            </Drawer>

        </div>
    )
}

export default EditRoomBtnDrawer
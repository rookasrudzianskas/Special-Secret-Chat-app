import React from "react";
import {Col, Grid, Row} from "rsuite";
import Sidebar from "../../components/Sidebar";
import {RoomsProvider} from "../../context/rooms.context";
import {Switch} from "react-router";
import {Route} from "react-router-dom";

const Index = () => {
    return(
    <RoomsProvider>
        <Grid fluid className="h-100">
            <Row className="h-100">
                <Col xs={24} md={8} className="h-100">
                    <Sidebar/>
                </Col>
                <Switch>
                    <Route exact path="/chat/:chatId">

                    </Route>
                </Switch>
            </Row>
        </Grid>
    </RoomsProvider>
    );
};

export default Index;

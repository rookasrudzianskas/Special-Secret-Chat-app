import React from "react";
import {Container, Grid, Row, Col, Panel } from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const SingIn = () => {
    return (
        <Container>
            <Grid>
                <Row>
                    <Col xs={24} md={12}>
                        <Panel>
                            <div>
                                <h2>Welcome to the Secret Chat</h2>
                                <p>Super Secret chat platform for developers</p>
                            </div>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
    </Container>
    );
};

export default SingIn;
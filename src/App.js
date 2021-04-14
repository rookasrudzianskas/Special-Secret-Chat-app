import React from "react";

import 'rsuite/lib/styles/index.less';
import './styles/main.scss';
import { Switch} from "react-router";
import SignIn from "./pages/SignIn";
import PrivateRoutes from "./components/PrivateRoutes";
import Home from "./pages/Home";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <Switch>
        <PublicRoute path="/signin">
            <SignIn />
        </PublicRoute>
        <PrivateRoutes path="/">
            <Home />
        </PrivateRoutes>
    </Switch>
  );
}

export default App;

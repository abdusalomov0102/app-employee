import React from "react";
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";

function App() {
    return (
        <>
            <Router>
                <HeaderComponent/>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={ListEmployeeComponent}/>
                        <Route path="/employees" component={ListEmployeeComponent}/>
                        <Route path="/add-employee/:id" component={CreateEmployeeComponent}/>
                        <Route path="/view-employee/:id" component={ViewEmployeeComponent}/>

                        {/*<Route path="/update-employee/:id" component={UpdateEmployeeComponent}/>*/}
                    </Switch>
                </div>
                <FooterComponent/>
            </Router>
        </>
    );
}

export default App;

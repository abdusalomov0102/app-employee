import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ViewEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount() {
        EmployeeService.getEmployeeById(this.state.id).then(res => {
            this.setState({employee: res.data});
        });
    }

    render() {
        return (
            <>
                <br/>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"><span className="badge badge-light">View Employee Details!!!</span></h3>
                    <div className="card-body">
                        <div className="row">
                            <h6 className="text-muted mr-3"><label>Employee First Name:</label></h6>
                            <h6>{this.state.employee.firstName}</h6>
                        </div>
                        <div className="row">
                            <h6 className="text-muted mr-3"><label>Employee Last Name:</label></h6>
                            <h6>{this.state.employee.lastName}</h6>
                        </div>
                        <div className="row">
                            <h6 className="text-muted mr-3"><label>Employee Email Address:</label></h6>
                            <h6>{this.state.employee.emailId}</h6>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ViewEmployeeComponent;
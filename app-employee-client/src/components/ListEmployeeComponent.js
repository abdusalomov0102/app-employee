import React, {Component} from 'react';
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    addEmployee() {
        this.props.history.push("/add-employee/_add");
    }

    editEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
        console.log(id);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then(res => {
            this.setState({
                employees: this.state.employees
                    .filter(employee => employee.id !== id)
            });
        });
        console.log(id);
    }

    viewEmployee(id) {
        this.props.history.push(`/view-employee/${id}`);
        console.log(id);
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }

    render() {
        return (
            <>

                <h2 className="text-center mt-3">Employee List</h2>
                <div className="row">
                    <button className="btn btn-primary mt-1 mb-3" onClick={this.addEmployee}>Add Employee</button>
                </div>

                <div className="row">
                    <table className="table table-bordered table-striped">
                        <thead>
                        <tr>
                            <th>Employee First Name:</th>
                            <th>Employee Last Name:</th>
                            <th>Employee Email Id:</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button className="btn btn-success ml-1 mr-1"
                                                onClick={() => this.editEmployee(employee.id)}>Edit
                                        </button>
                                        <button className="btn btn-danger ml-1 mr-1"
                                                onClick={() => this.deleteEmployee(employee.id)}>Delete
                                        </button>
                                        <button className="btn btn-info ml-1 mr-1"
                                                onClick={() => this.viewEmployee(employee.id)}>View
                                        </button>
                                    </td>
                                </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

            </>
        );
    }

}

export default ListEmployeeComponent;
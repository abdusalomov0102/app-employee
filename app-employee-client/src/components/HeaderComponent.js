import React, {Component} from 'react';

class HeaderComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="/" className="navbar-brand">Employee Managment App</a></div>
                    </nav>
                </header>
            </>
        );
    }
}

export default HeaderComponent;
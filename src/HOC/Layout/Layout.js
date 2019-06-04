import React, { Component } from 'react';

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import classes from './Layout.module.css';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    sideDrawerToggleHandler = () => {
        this.setState((prevSate) => {
            return { showSideDrawer: !this.state.showSideDrawer };
        });
    }
    render() {
        return (
            <React.Fragment>
                <NavigationBar />
                <div className={classes.Content + ' container'}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
}

export default Layout;
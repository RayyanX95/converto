import React, { Component } from 'react';

import NavigationBar from "../../components/NavigationBar/NavigationBar";
import Footer from '../../components/Footer/Footer';
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
                <div className={classes.Content + ' container py-5'}>
                    {this.props.children}
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default Layout;
import React, { useState } from 'react';
import { connect } from 'react-redux';

import Aux from '../../hoc/Aux';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => {
    const [sideDrawerisVisible, setSideDrawerIsVisible] = useState(false);


    const sideDrawerClosedHandler = () => {
        setSideDrawerIsVisible(false);
    }

    const sideDrawerToggleHandler = () => {
        setSideDrawerIsVisible(!sideDrawerisVisible);
    }

        return (
            <Aux>
                <Toolbar
                    isAuth={props.isAuthenticated} 
                    drawerToggleClicked={sideDrawerToggleHandler}/>
                <SideDrawer 
                    isAuth={props.isAuthenticated} 
                    open={sideDrawerisVisible} 
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </Aux>
        )
    };

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(layout);
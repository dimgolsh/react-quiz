import React from 'react';
import MenuToggle from '../../components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../components/Navigation/Drawer/Drawer';
import classes from './Layout.module.css';


 class Layout extends React.Component {

    state = {
        menu: false
    }

    toggleMenuHandler = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    toggleClose = () => {
        this.setState({
            menu: false
        })
    }
    render(){
        return (
            <div className={classes.Layout}>
                <Drawer
                  isOpen = {this.state.menu}
                  onClose = {this.toggleClose}
                />
                <MenuToggle
                onToggle={this.toggleMenuHandler}
                isOpen = {this.state.menu}
                />
            <main>
                {this.props.children}
            </main>
            </div>
        )
    }
 }


 export default Layout;
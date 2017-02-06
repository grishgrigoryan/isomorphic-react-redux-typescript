import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import {Link} from 'react-router';

export interface MainViewProp {
    children: React.Component<any,any>[],
}
export default class MainView extends React.Component<MainViewProp,any> {
    render() {
        return (
            <MuiThemeProvider>
                <div id="main-view">
                    <AppBar title="" />
                    <Drawer
                        width={260}
                        open={true}>
                        <AppBar title="Application" />
                        <Link to={`/posts`}> <MenuItem >Posts</MenuItem></Link>
                        <Link to={`/hello`}> <MenuItem >Home</MenuItem></Link>
                    </Drawer>
                    <div style={{paddingLeft:260}}>
                        {this.props.children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}
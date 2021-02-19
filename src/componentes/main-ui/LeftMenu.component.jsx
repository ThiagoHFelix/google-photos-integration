import React from 'react'
import { Drawer, makeStyles } from '@material-ui/core';

const MENU_WIDTH = 280;
const useStyles = makeStyles({
    drawerPaper: {
        width: MENU_WIDTH,
        position :  'absolute'
    },
    drawerdocked : {
        display : 'relative'
    } 
});

export default () => {

    const classes = useStyles();

    return (
        <Drawer
            variant="permanent"
            anchor='left'
            open={true}
            classes={{
                paper  : classes.drawerPaper,
                docked : classes.drawerdocked 
            }}
        />
    );

}

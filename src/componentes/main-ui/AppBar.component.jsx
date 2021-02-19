import React from "react";
import {
    AppBar as AppBarComponent,
    Toolbar,
    Typography,
    Box,
    makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    rootAppBar : {
        border : '1px solid rgba(0, 0, 0, 0.12)',
        zIndex: theme.zIndex.drawer + 1,
    },
    colorDefaultAppBar: {
        backgroundColor: '#fff',
        boxShadow: 'none',
    }
}));

function AppBar() {

    const classes = useStyles();

    return (
        <AppBarComponent classes={{colorDefault : classes.colorDefaultAppBar, root : classes.rootAppBar }} color="default" position={'fixed'}>
            <Toolbar>
                <Box width="100%" >
                    <Typography align={'center'} variant={"h6"} >
                        Google Photos Integration
                    </Typography>
                </Box>
            </Toolbar>
        </AppBarComponent>
    );

}

export default AppBar;
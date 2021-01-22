import React from "react";
import {
    AppBar as AppBarComponent,
    Toolbar,
    Typography,
    Box
} from "@material-ui/core";

function AppBar(){

    return (
        <AppBarComponent position={'static'}>
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
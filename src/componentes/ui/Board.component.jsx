import React, { Children } from "react";
import { Paper, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
    mainPaper: {
        width: '100%',
        height: '700px',
        padding : '30px'
    }
});


function Board(props) {
    
    const classes = useStyles();
    const { children } = props;

    return (
        <Box display="flex" flex="1" width="100%" height="auto" >
            <Paper square={true} className={classes.mainPaper}  padding="30px" elevation={5} variant='outlined' >
                {children}
            </Paper>
        </Box>
    )
}



export default Board;
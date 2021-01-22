import React, { Children } from "react";
import { Paper, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles({
    mainPaper : {
        width   : '95%',
        height  : '60vh'
    },
    mainContainer : {
        padding         : '0px',
        display         : 'absolute',
        height          : '100vh',
        backgroundColor : '#fbfbfb'
    }
});


function Board(props)
{
    const classes = useStyles();
    const {children} = props;
    return (
        <React.Fragment>
            <Box display="flex" alignItems="center" justifyContent="center" maxWidth='xl' marginTop={5} >
                <Paper square={true}  className={classes.mainPaper} variant='outlined' >
                    {children}
                </Paper>   
            </Box>
        </React.Fragment>
    )
}



export default Board;
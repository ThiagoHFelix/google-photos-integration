import React from "react";
import { Box, Typography, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    subMessage : {
        fontSize : '18pt',
        color    : '#3e3e3e'
    }
});

function Loader({ message , subMessage })
{
    const classes = useStyles();

    return (
        <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' height='100%'>
            <CircularProgress size={50}/>
            <Box marginTop={1.9}>
                <Typography variant='h4' align='center'> {message} </Typography>
            </Box>
            <Typography variant='span' align='center' className={classes.subMessage} > {subMessage} </Typography>
        </Box>
    );

}

Loader.defaultProps = {
    message    : 'Carregando',
    subMessage : ''
}    

export default Loader;
import React from 'react';
import AppBar from './AppBar.component';
import LeftMenu from './LeftMenu.component';
import {makeStyles, Container, Box} from '@material-ui/core';


const useStyles = makeStyles({
    mainContainer : {
        padding         : '10px',
        display         : 'flex',
        backgroundColor : '#f9f9f9',
        overflow        : 'hidden',
        height          : '100vh'
    }
});


export default props => {

    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar/>
            <LeftMenu/>
            <Container maxWidth={'xl'} className={classes.mainContainer}>
                <Box width="100%" marginLeft="280px" marginTop="70px" >
                    {props.children}  
                </Box> 
            </Container>
        </React.Fragment>
    );

}


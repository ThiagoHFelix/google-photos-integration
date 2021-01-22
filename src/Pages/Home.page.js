import React from 'react';
import { Container, Paper, makeStyles, Box } from '@material-ui/core';
import AppBar from "../componentes/main-ui/AppBar.component";
import Board from "../componentes/ui/Board.component"
import Loader from "../componentes/ui/Loader.component"

const useStyles = makeStyles({
    mainContainer : {
        padding         : '0px',
        display         : 'absolute',
        height          : '100vh',
        backgroundColor : '#fbfbfb'
    }
});


export default function HomePage()
{
    const classes = useStyles();
  
    const [showLoader, setShowLoader] = React.useState(true);

    React.useEffect(() => {
      
      let script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.onload = _ => {
        window.gapi.load('auth2', async function() {
          let resp = await window.gapi.auth2.init({
            client_id : '530199472990-cgp7phv4omje31jp9d8gdp9hcfc5gsa1.apps.googleusercontent.com',
            scope     : 'https://www.googleapis.com/auth/photoslibrary'
          });
  
          setShowLoader(false);

          window.gapi.signin2.render('singin-google',{
            scope: 'https://www.googleapis.com/auth/photoslibrary',
            width: 300,
            height: 50,
            longtitle: true,
            theme: 'dark',
            longtitle : true,
            onsuccess: _ => {},
            onfailure: _ => {}
          });

        });
      };
      document.body.appendChild(script);
      
     

    });

    return (
        <React.Fragment>
          <Container maxWidth={'xl'} className={classes.mainContainer}>
            <AppBar/>
            <Board>
              {
                showLoader ? 
                  (<Loader message="Aguarde" subMessage='Inicializando o componente'/>) 
                  :
                  (
                    <Box maxWidth='xl' height="100%" display='flex' alignItems='center' flexDirection='column' justifyContent='center'> 
                      <div id='singin-google'></div>
                    </Box>
                  )
              }
            </Board>
          </Container>
        </React.Fragment>
    )
} 





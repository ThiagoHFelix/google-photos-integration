import React from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Board from "../componentes/ui/Board.component";
import Loader from "../componentes/ui/Loader.component";
import GoogleButton from 'react-google-button';
import If from '../componentes/utils/If';
import PageComponent from '../componentes/main-ui/Page.component';
import {ReactComponent as GooglePhotosIcon} from '../google-photos.svg';

const useStyles = makeStyles({});


export default function HomePage()
{
    const classes = useStyles();
  
    const [showLoader, setShowLoader] = React.useState(true);
    const [logs, setLogs] = React.useState([]);

    const setLogMessage = message => {
      setLogs(pres => [...pres, message]);
    }

    React.useEffect(() => {

      setLogMessage('Iniciando as configurações do google photos...')

      let script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js?hl=pt-br';
      script.onload = _ => {
        window.gapi.load('auth2', async function() {
          let resp = await window.gapi.auth2.init({
            client_id : '530199472990-cgp7phv4omje31jp9d8gdp9hcfc5gsa1.apps.googleusercontent.com',
            scope     : 'https://www.googleapis.com/auth/photoslibrary'
          });
  
          setLogMessage('Componente iniciado com sucesso =D');
          
          setShowLoader(false);

        });
      };
      document.body.appendChild(script);
     
    },[]);


    const singin = async function()
    {
      alert("Opa...");
    }


    return (
      <PageComponent>
         <Board>

          <If condition={showLoader === true}>
            <Loader message="Aguarde" subMessage='Inicializando o componente'/>
          </If>

          <If condition={showLoader === false}>
            <Box maxWidth='xl' height="100%" display='flex' alignItems='center' flexDirection='column' justifyContent='center'> 
              <GooglePhotosIcon width="100" height="200" />
              <GoogleButton disabled={true} type="light" label='Logar com o google' onClick={singin} />
              <Box width="100%" height="200px" border="1px solid #d9d9d9" marginTop="15px" bgcolor="gray">
                <ul>
                { logs.map(message => <li>{message}</li>)}
                </ul>
              </Box>
            </Box>
          </If>

        </Board>
      </PageComponent>
    );
}

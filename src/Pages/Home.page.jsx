import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import GoogleButton from "react-google-button";
import ImageContainer from "../componentes/ImagesContainer/ImagesContainer.component";
import Page from "../componentes/main-ui/Page.component";
import Board from "../componentes/ui/Board.component";
import Loader from "../componentes/ui/Loader.component";
import If from "../utils/If";
import { images2 as imageList } from "../utils/imageLIst";
import Modal from "../componentes/ui/modal/modal.component";

const useStyles = makeStyles({});

export default function HomePage() {
  const classes = useStyles();
  const { useState, useEffect } = React;
  const [showLoader, setShowLoader] = useState(true);
  const [googleAuth, setGoogleAuth] = useState(null);

  const gapiLoad = async () => {
    let resp = await window.gapi.auth2.init({
      client_id:
        "530199472990-cgp7phv4omje31jp9d8gdp9hcfc5gsa1.apps.googleusercontent.com",
      scope: "https://www.googleapis.com/auth/photoslibrary",
    });
    setGoogleAuth(window.gapi.auth2.getAuthInstance());
    setShowLoader(false);
  };

  React.useEffect(() => {
    let script = document.createElement("script");
    script.src = "https://apis.google.com/js/platform.js?hl=pt-br";
    script.onload = (_) => window.gapi.load("auth2", gapiLoad);
    document.body.appendChild(script);
  }, []);

  const signin = async function () {
    let signin_data = await googleAuth.signIn();
  };

  return (
    <React.Fragment>
      <Page>
        <Board>
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="row"
            style={{ width: "100%", height: "100%" }}
          >
            <If condition={showLoader === true}>
              <Grid item xs={12} style={{ height: "600px" }}>
                <Loader message="Wait" subMessage="Component Starting" />
              </Grid>
            </If>

            <If condition={showLoader === false}>
              <If condition={false}>
                <Grid item xs={12} style={{ height: "750px" }}>
                  <ImageContainer images={imageList} />
                </Grid>
              </If>

              <Modal>
                <Box
                  maxWidth="xl"
                  height="100px"
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  justifyContent="center"
                  margin="10px"
                >
                  <GoogleButton
                    disabled={!googleAuth}
                    type="dark"
                    label="Login with google"
                    onClick={signin}
                  />
                </Box>
              </Modal>
            </If>
          </Grid>
        </Board>
      </Page>
    </React.Fragment>
  );
}

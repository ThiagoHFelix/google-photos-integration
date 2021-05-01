import { Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  mainPaper: {
    width: "100%",
    height: "700px",
    padding: "30px",
  },
});

function Board(props) {
  const classes = useStyles();
  const { children } = props;

  return (
    <Box display="flex" flex="1" width="100%" height="auto">
      {/* <Paper square={true} className={classes.mainPaper}  padding="0px" elevation={5} variant='outlined' > */}
      {children}
      {/* </Paper> */}
    </Box>
  );
}

export default Board;

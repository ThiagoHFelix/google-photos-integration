import React from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Button,
  makeStyles,
  DialogContentText,
} from "@material-ui/core";
import If from "../../../utils/If";

const useStyles = makeStyles({
  modalPaper: {},
  dialogTitle: {
    textAlign: "center",
  },
  dialogContentText: {
    textAlign: "center",
  },
});

const paperComponent = (props) => {
  return <Paper {...props} />;
};

const Modal = (props) => {

  const { useEffect } = React;

  const classes = useStyles();

  const {children} = props;

  return (
    <>
      <Dialog
        open
        PaperComponent={paperComponent}
        fullWidth
        classes={{ paper: classes.modalPaper }}
      >
        <DialogTitle classes={{ root: classes.dialogTitle }}>
          Welcome
        </DialogTitle>
        <DialogContent>
          <DialogContentText classes={{root : classes.dialogContentText}}>
            To use the system first we need to sign in
          </DialogContentText>
          {children}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Modal;

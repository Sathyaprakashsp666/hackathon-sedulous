import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import styles from "./Modal.module.css";

import GoogleLogin from "react-google-login";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import CancelIcon from "@material-ui/icons/Cancel";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "fixed",
    marginLeft: "70%",
    marginTop: "70px",
    width: "300px",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  //From context api
  const { setGmail, setName, setUrl, name, url, setUserIn, userin } =
    useContext(AuthContext);
  let history = useHistory();

  //Google Response
  const responseGoogle = (res) => {
    console.log(res);
    setName(res.profileObj.name);
    setGmail(res.profileObj.email);
    setUrl(res.profileObj.imageUrl);
    setUserIn(true);
    setOpen(false);
    //storing user login details in localstorage
    localStorage.setItem(
      "user",
      JSON.stringify({
        nameLocal: res.profileObj.name,
        userinLocal: true,
        urlLocal: res.profileObj.imageUrl,
      })
    );
  };

  //Getting user login details from local storage
  let userLogin = localStorage.getItem("user");
  if (userLogin !== null) {
    var { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
    if (userin || userinLocal) {
      history.push("/");
    }
  }
  const logOut = () => {
    setName("");
    setUrl("");
    setUserIn(false);
    localStorage.setItem(
      "user",
      JSON.stringify({
        nameLocal: "",
        userinLocal: false,
        urlLocal: "",
      })
    );
  };
  const close = () => {
    setOpen(false);
  };

  return (
    <div>
      {userinLocal || userin ? (
        <div className={styles.modal__profile}>
          <img src={urlLocal || url} alt="" />
          <p>{nameLocal || name}</p>
          <button className={styles.modal__btn} onClick={logOut}>
            LOGOUT
          </button>
        </div>
      ) : (
        <button
          type="button"
          onClick={handleOpen}
          className={styles.modal__btn}
        >
          LOGIN
        </button>
      )}

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={styles.modal_close}>
              <CancelIcon onClick={close} />
            </div>
            <button className={styles.modal__google_btn}>
              <GoogleLogin
                className={styles.modal__google}
                clientId="864790429787-smqc628khhm1it0ajol4eq878t8f8om6.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
              >
                Login using Google
              </GoogleLogin>
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

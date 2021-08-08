import React from "react";
import styles from "./Nvbar.module.css";
import TransitionsModal from "./LoginModal";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
  const { setGmail, setName, setUrl, name, url, setUserIn, userin } =
    useContext(AuthContext);

  let userLogin = localStorage.getItem("user");
  if (userLogin !== null) {
    var { userinLocal, urlLocal, nameLocal } = JSON.parse(userLogin);
    // if (userin || userinLocal) {
    //   history.push("/");
    // }
  }
  return (
    <>
      <div id="home" className={styles.nav__cont}>
        <Link className={styles.nav__logo} to="/">
          <img
            src="https://img.icons8.com/emoji/2x/graduation-cap-emoji.png"
            alt=""
          />
          GURU
        </Link>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/blog">blog</Link>
        <Link>
          {/* <button>LOGIN <TransitionsModal/></button> */}
          <button>
            {userin || userinLocal ? (
              <img
                className={styles.navbar__imgCont}
                src={urlLocal || url}
                alt=""
              />
            ) : (
              ""
            )}
          </button>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

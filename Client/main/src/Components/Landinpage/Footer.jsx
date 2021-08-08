import React from "react";
import styles from "./Footer.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import CallIcon from "@material-ui/icons/Call";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const Footer = () => {
  return (
    <>
      <div className={styles.nav__footer}>
        <div>
          <h5 className={styles.nav__black}>USEFUL LINKS</h5>
          <p>Home</p>
          <p>About</p>
          <p>Blog</p>
        </div>
        <div>
          <h5 className={styles.nav__black}>HELP</h5>
          <p>Privacy</p>
          <p>Policy</p>
          <p>Support</p>
        </div>
        <div>
          <h5 className={styles.nav__black}>CONTACT</h5>
          <div className={styles.footer__icons}>
            <CallIcon fontSize="small" />
            &nbsp; +91 987654321
          </div>
          <br />
          <div className={styles.footer__icons}>
            <MailOutlineIcon fontSize="small" />
            &nbsp; career@gmail.com
          </div>
          <div>
            <p>
              &nbsp; <p>&nbsp;</p>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.nav__contact}>
        <p>All rights reserved</p>
        <p>copyright@2021-2022</p>
        <div>
          <InstagramIcon />
          <FacebookIcon />
          <YouTubeIcon />
          <TwitterIcon />
        </div>
      </div>
    </>
  );
};

export default Footer;

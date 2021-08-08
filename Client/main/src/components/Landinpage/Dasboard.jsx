import React from "react";
import styles from "./Dashboard.module.css";
import { Link } from "react-router-dom";
import svg from "../../Assets/career.svg";
import one from "../../Assets/one.svg";
import two from "../../Assets/two.svg";
import TransitionsModal from "./LoginModal";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Fade from "react-reveal/Fade";
import { getCourses } from "../Redux/Course/action";
import { CourseCard } from "./CourseCard";
import Footer from "./Footer";

const Dasboard = () => {
  const dispatch = useDispatch();
  const { courses } = useSelector((state) => state.courses, shallowEqual);
  console.log(courses);
  React.useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);

  return (
    <>
      {/* Navbar */}
      <div id="home" className={styles.nav__cont}>
        <Link className={styles.nav__logo}>
          <img
            src="https://img.icons8.com/emoji/2x/graduation-cap-emoji.png"
            alt=""
          />
          CAREER GURU
        </Link>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Link to="/blog">blog</Link>
        <Link>
          {/* <button>LOGIN <TransitionsModal/></button> */}
          <button>
            <TransitionsModal />
          </button>
        </Link>
      </div>
      <div className={styles.nav__career_cont}>
        <Fade left>
          <div className={styles.nav__career_left}>
            <h1 className={styles.nav__blue}>THINK CAREER... </h1>
            <h2> Success Ahead </h2>
            <p className={styles.nav__gray}>
              On our platform we have counsellors who are expert in their field
              and guide students in selecting their best career options. We
              guide students on the basis of current market trend and the
              current availability of jobs.
            </p>
          </div>
        </Fade>
        <Fade right>
          <div>
            <img src={svg} alt="" width="100%" />
          </div>
        </Fade>
      </div>
      {/* Discover categories container  */}

      <div className={styles.nav__center}>
        <h1>Explore Careers</h1>
        <p>Search all the detailed information regarding colleges</p>
      </div>
      <div className={styles.nav__discover_cont}>
        {courses.map((item) => {
          return <CourseCard key={item._id} {...item} />;
        })}
      </div>
      <div className={styles.bg}>
        <div className={styles.nav__steps}>
          <div>
            <img src={one} alt="" />
          </div>
          <div>
            <h1>SELECT YOUR CHOICE</h1>
            <p className={styles.nav__gray}>
              Discover different career opportunities which would be beneficial
              for your future
            </p>
          </div>
        </div>
        <div className={styles.nav__steps}>
          <div>
            <h1>COUSELLING AT YOUR DOORS</h1>
            <p className={styles.nav__gray}>
              Contact us and get guidance from our experts by sitting at your
              home.
            </p>
          </div>
          <div className={styles.nav__margin}>
            <img src={two} alt="" />
          </div>
        </div>
      </div>
      {/* Subscribe container */}
      <div className={styles.nav__subscribe_cont}>
        <h1>SUBSCRIBE </h1>
        <p>To get the updates of career opportunities</p>
        <div className={styles.nav__subscribe_btn}>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Dasboard;

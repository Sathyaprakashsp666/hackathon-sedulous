import { AboutContainer, AboutImg, Note, Wrapper } from "./AboutPageStyles"
import student from "../../Assets/about2.jpg";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import TransitionsModal from "../Landinpage/LoginModal";

export const About = () => {
    return <>
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
    <AboutContainer>
        <Wrapper>
            <Note>
                We are embarked on a journey to retain the innocent smiles on the faces of every
                student completing their schooling by helping them figure out the best and career
                oppurtunities dependending on their interests and aptitude. We believe that every 
                is a pride for the society, all that they need is the right guidance at some crucial 
                turns of their life and we're here for them. At this online career counselling forum,
                a team of career guidance experts sit and correlate all the essential information
                regarding every domain of higher education.
            </Note>
        </Wrapper>
        <Wrapper>
            <AboutImg src = {student} alt = "Student Life" />
        </Wrapper>
        </AboutContainer>
        </>
}
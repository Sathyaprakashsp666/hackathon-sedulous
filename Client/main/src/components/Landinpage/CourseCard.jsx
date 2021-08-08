import React from 'react'
import { Link } from 'react-router-dom'
import {CoursesWrapper} from "./coursesStyle"
import styles from './Dashboard.module.css'

export const CourseCard = ({image, text, _id}) => {

    return (
        <CoursesWrapper>
            <Link className={styles.CourseCard__link} to = {`/career/${_id}`} >
                <img src= {image} alt= {image} />
                <p className={styles.CourseCard__text}>{text}</p>
            </Link>
        </CoursesWrapper>
    )
}


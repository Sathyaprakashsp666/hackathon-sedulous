import React from 'react'
import { Link } from 'react-router-dom'
import {CoursesWrapper} from "./coursesStyle"
export const CourseCard = ({image, text}) => {
    return (
        <CoursesWrapper>
            <Link>
                <img src= {image} alt= {image} />
                <h4>{text}</h4>
            </Link>
        </CoursesWrapper>
    )
}


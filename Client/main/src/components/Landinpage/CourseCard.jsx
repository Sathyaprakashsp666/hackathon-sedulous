import React from 'react'
import { Link } from 'react-router-dom'
import {CoursesWrapper} from "./coursesStyle"
export const CourseCard = ({image, text, _id}) => {

    return (
        <CoursesWrapper>
            <Link to = {`/career/${_id}`} >
                <img src= {image} alt= {image} />
                <h4>{text}</h4>
            </Link>
        </CoursesWrapper>
    )
}


import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./CourseDetails.module.css"

export const CourseDetail = (props) => {
    console.log(props)
    return (
        <div>
            <div className = {styles.descriptionBox}>
                <h2>Description</h2>
                <p>{props.description}</p>
                <h2>Career Options</h2>
                <div>
                    {props.career?.map((item) => <p>{item}</p>)}
                </div>
                <div>
                    <Link to = "/talkToExpert"><button >View Chat</button></Link>
                    <Link to = "/sessionWithCareerExpert"><button >View Video Call</button></Link>
                </div>
            </div>
            <div>
                <h2>Institutes</h2>
                <div>
                    {props.institutes?.map((item) => (
                        <div>
                            <a href={item.websiteLinks} target = "_blank">
                                <img style = {{height: "70px", width: "100px"}} src = {item.image} alt = "image" />
                                <h3>{item.name}</h3>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

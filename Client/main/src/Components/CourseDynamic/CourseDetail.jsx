import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./CourseDetails.module.css"

export const CourseDetail = (props) => {
    console.log(props)
    return (
        <div>
            <div className = {styles.descriptionBox}>
                <h1>Description</h1>
                <p>{props.description}</p>
                <h1>Career Options</h1>
                <div>
                    <p className = {styles.career} >{props.career?.map((item) => <p>{item}</p>)}</p>
                </div>
                <div>
                    <h1 className = {styles.discuss}>Have a Discussion with Our Expert.</h1>
                </div>
                <div className = {styles.interactButtons}>
                    <Link to = "/talkToExpert"><button className = {styles.access} >Chat with an expert</button></Link>
                    <br />
                    <Link to = "/sessionWithCareerExpert"><button className = {styles.access}>Video Call an expert</button></Link>
                </div>
            </div>
            <div className = {styles.institutesWrapper}>
                <h1>Top Institutes</h1>
                <div>
                    {props.institutes?.map((item) => (
                        <a href={item.websiteLinks} target = "_blank">
                            <div className = {styles.institutes}>
                                <img src = {item.image} alt = "image" />
                                <h5>{item.name}</h5>   
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

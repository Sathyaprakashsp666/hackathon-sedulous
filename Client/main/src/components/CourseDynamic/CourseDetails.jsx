import React from 'react'
import { AllRoutes } from '../Routes/AllRoutes'
import styles from "./CourseDetails.module.css"

export const CourseDetails = () => {
    return (
        <div>
            <div className = {styles.descriptionBox}>
                <h2>Description</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed eveniet voluptas, 
                    voluptatum sit odit fugit aliquid quidem ad incidunt perspiciatis repudiandae 
                    natus asperiores alias consectetur. Optio nulla non eius nihil?Lorem ipsum dolor sit a
                    met consectetur adipisicing elit. Sed eveniet voluptas, 
                    voluptatum sit odit fugit aliquid quidem ad incidunt perspiciatis repudiandae 
                    natus asperiores alias consectetur. Optio nulla non eius nihil?
                </p>
                <div>
                    <button>View Chat</button>
                    <button>View Video Call</button>
                </div>
            </div>
            <div>
                <AllRoutes/>
            </div>
        </div>
    )
}



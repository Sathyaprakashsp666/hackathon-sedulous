import React from 'react'
import { useParams } from 'react-router'
import {useDispatch, useSelector} from "react-redux"
import { getDescription } from '../Redux/Description/action'
import { CourseDetail } from '../CourseDynamic/CourseDetail'
export const DynamicCardContent = () => {

    const {id} = useParams()
    
    const dispatch = useDispatch()
    const content = useSelector(state => state.dynamicContent.description)
    React.useEffect(() => {
        dispatch(getDescription({id}))
    }, [dispatch])
    return (
        <div>
            <CourseDetail {...content} />
        </div>
    )
}

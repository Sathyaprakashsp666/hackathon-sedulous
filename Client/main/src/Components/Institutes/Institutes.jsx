import React from 'react'
import {InstitutesWrapper} from "./styles"
import {shallowEqual, useDispatch, useSelector} from "react-redux"
import { InstitutesCard } from './InstitutesCard'
import { getInstitutesData } from '../Redux/Institutes/action'

export const Institutes = () => {

    const dispatch = useDispatch()
    const {institutes} = useSelector(state => state.institutes, shallowEqual)

    React.useEffect(() => {
        dispatch(getInstitutesData())
    }, [dispatch])

    return (
        <InstitutesWrapper>
            <div>
                {institutes.map((item) => {
                    return <InstitutesCard key = {item.id} {...item} />
                })}
            </div>
        </InstitutesWrapper>
    )
}

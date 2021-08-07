import React from 'react'
import { CardWrapper } from './styles'

export const InstitutesCard = ({image, sellerName}) => {
    return (
        <CardWrapper>
            <div>
                <img src= {image} alt= {image} />
            </div>
            <div>
                <h4>{sellerName}</h4>
            </div>
        </CardWrapper>
    )
}

import React from 'react'
import {NavLink} from "react-router-dom"
import { NavbarWrapper } from "./NavbarStyle.js"
const links = [
    {
        to: "/institutes",
        title: "Institutes",
        exact: true
    },
    {
        to: "/knowledge",
        title: "Knowledge",
        exact: true
    }
]

export const Navbar = () => {
    return (
        <NavbarWrapper>
            {links.map(({to, title}) => (
                <NavLink to = {to} key = {to} >
                    {title}
                </NavLink>
            ))}
        </NavbarWrapper>
    )
}

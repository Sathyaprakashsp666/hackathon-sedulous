import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Institutes } from '../Institutes/Institutes'
import { Knowledge } from '../Institutes/Knowledge'
import { Navbar } from '../InstitutesNavbar/Navbar'

export const AllRoutes = () => {
    return (
        <div>
            <Navbar/>
            <Switch>
                <Route path = "/institutes">
                    <Institutes/>
                </Route>
                <Route path = "/knowledge">
                    <Knowledge/>
                </Route>
            </Switch>

        </div>
    )
}

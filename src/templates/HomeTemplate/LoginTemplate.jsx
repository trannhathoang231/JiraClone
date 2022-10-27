import React from "react"
import { Route } from "react-router-dom";

export const LoginTemplate = (props) => {
    let { Component, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>
            <Component {...propsRoute} />

        </>
    }}
    />
}
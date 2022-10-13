import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import ContentMain from "../../component/Cyberbugs/Main/ContentMain";
import HeaderMain from "../../component/Cyberbugs/Main/HeaderMain";
import InfoMain from "../../component/Cyberbugs/Main/InfoMain";
import MenuCyberbugs from "../../component/Cyberbugs/MenuCyberbugs";
import ModalCyberBugs from "../../component/Cyberbugs/ModalCyberBugs/ModalCyberBugs";
import SidebarCyberbugs from "../../component/Cyberbugs/SidebarCyberbugs";
import Header from "../../component/Home/Header/Header";
import '../../index.css'



export const CyberbugsTemplate = (props) => {

    const { Component, ...restParam } = props;
    return <Route {...restParam} render={(propsRoute) => {
        return <>
            <div className="jira">
                    <SidebarCyberbugs /> 

                    <MenuCyberbugs /> 

                     <Component {...propsRoute} />

                    <ModalCyberBugs />
                </div>

        </>
    }}
    />
}
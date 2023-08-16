import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display:flex;
    color:#fff;
    justify-content:space-between;
    align-items:center;
    padding-left:5%;
    list-style:none;
    height:60px;
    text-decoration:none;
    font-size:18px;

    &:hover{
        background:#252831;
        border-left:6px solid #333742;
        cursor:pointer;
    }
`;
const SidebarLabel = styled.span`
    margin-left:15px;
`;
const DropdownLink = styled(Link)`
    height: 38px;
    padding-left: 15%;
    display: flex;
    align-items:center;
    text-decoration:none;
    color:#fff;
    font-size:17px;

    &:hover{
        background:#333742;
        cursor:pointer;
    }
`;
const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)
    const showSubnav = () => setSubnav(!subnav)
    return(
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                   {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((item, index) => {
                return(
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>
                )
            })}
        </>
    )
}
export default SubMenu;
import React, { useState } from "react";
import styled from 'styled-components';
import { SidebarData } from "./sidebar_data";
import SubMenu from "./sidebar_submenu";
import { IconContext } from "react-icons";
import '../assets/css/sidebar.css'
import SearchBar from "./searchbar";

const Nav = styled.div`
    background: #15171c;
    height: 80px;
    display:grid;
    justify-content: flex-start;
    align-items:center;
`;
const SidebarNav = styled.nav`
    background: #15171c;
    width:250px;
    height:100vh;
    display:flex;
    justify-content:center;
    position:fixed;
    top:0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    z-index:-1;
`;
const SidebarWrap = styled.div`
    width:100%;
    margin-top:60%;
`;
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
    return(
        <>
        <Nav>
        <img alt="Berca" class="logo-brand" src ={require('../assets/img/logo_berca_animated.gif')} />
            <IconContext.Provider value={{ color:'#fff'}}>
                <SidebarNav sidebar={showSidebar}>
                    <SidebarWrap>
                    {SidebarData.map((item, index) =>{
                        return <SubMenu item={item} key={index} />;
                    })}
                    </SidebarWrap>
                </SidebarNav>
            </IconContext.Provider>
            <SearchBar />
        </Nav>
        </>
    );
};
export default Sidebar;
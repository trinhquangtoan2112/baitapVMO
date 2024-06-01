import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

export default function SidebarNewsComponent(props) {
    const theme = useSelector(state => state.LoadingReducer.dark)
    const { item } = props;
    const renderSidebar = () => {
        if (item?.elements && item?.elements !== undefined && item?.elements !== "") {
            return <div className={`sidebar_new ${theme ? "text-white" : ""} `}>
                <NavLink to={`${item.id}`}>
                    <img src={item.elements[0]?.assets[0].file ? item.elements[0]?.assets[0].file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={item.elements[0]?.assets[0].typeData.altText ? item.elements[0]?.assets[0].typeData.altText : "Newest new from us"}></img>
                    <h5>{item.webTitle}</h5>
                </NavLink>
            </div>
        }
        else {
            return <div className={`sidebar_new ${theme ? "text-white" : ""}  `}>
                <NavLink to={`${item.id}`}>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s" alt="Newest new from us"></img>
                    <h5>{item.webTitle} </h5>
                </NavLink>
            </div>
        }

    }
    return (
        <>{renderSidebar()}</>
    )
}

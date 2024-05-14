import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SidebarNewsComponent() {
    return (

        <div className='sidebar_new'>
            <NavLink href='https://i1-vnexpress.vnecdn.net/2024/05/08/AurusSenat20251-1715139859-4891-1715140063.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=C5eek_Zd2XWOs_p7fckQ8g'>
                <img src='https://i1-vnexpress.vnecdn.net/2024/05/08/AurusSenat20251-1715139859-4891-1715140063.jpg?w=500&h=300&q=100&dpr=2&fit=crop&s=C5eek_Zd2XWOs_p7fckQ8g' alt='sass'></img>
                <h5>Train strikes halt most services in west of England, Midlands and routes to Scotland and Wales – business live</h5>
            </NavLink>
        </div>

    )
}

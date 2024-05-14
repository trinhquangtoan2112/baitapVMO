
import React from 'react'
import ReadingCompoment from '../../compoment/ContentCompoment/ReadingCompoment';
import SidebarNewsComponent from '../../compoment/ContentCompoment/SidebarNewsComponent';
export default function ReadingPages() {
    return (
        <div className='reading-pages flex flex-row w-4/5 mx-auto mt-4 justify-around'>
            <div className='reading_center basis-7/12'>
                <ReadingCompoment></ReadingCompoment>
            </div>
            <div className='reading-right basis-4/12'>
                <h4>Top news from us</h4>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
                <SidebarNewsComponent></SidebarNewsComponent>
            </div>
        </div>
    )
}


import React, { useEffect, useState } from 'react'
import ReadingCompoment from '../../compoment/ContentCompoment/ReadingCompoment';
import SidebarNewsComponent from '../../compoment/ContentCompoment/SidebarNewsComponent';
import { useLocation } from 'react-router-dom';
import { getContentNewFromID, getSectionFromID } from '../../service/getServiceNewspaper';
export default function ReadingPages() {
    const [contentNew, setContentNew] = useState()
    const [sectionID, setSectionID] = useState()
    const location = useLocation();

    const fullPath = location.pathname.replace('/reading/', '');
    useEffect(() => {
        const getReadingTitle = async () => {
            try {
                let result = await getContentNewFromID(fullPath);
                await setContentNew(result)
                let sectionID = await getSectionFromID(result?.data.response.content.sectionId)
                setSectionID(sectionID)
            } catch (error) {
                console.log(error)
            }
        }
        getReadingTitle()
    }, [])
    useEffect(() => {
        const getReadingTitle = async () => {
            try {
                let result = await getContentNewFromID(fullPath);
                await setContentNew(result)
                let sectionID = await getSectionFromID(result?.data.response.content.sectionId)
                setSectionID(sectionID)
            } catch (error) {
                console.log(error)
            }
        }
        getReadingTitle()
    }, [fullPath])
    const renderAd = () => {
        return sectionID?.data.response.results.map((item, index) => {
            if (item.id !== fullPath)
                return <SidebarNewsComponent item={item} key={index}></SidebarNewsComponent>
        })
    }
    return (
        <div className='reading-pages flex flex-row w-4/5 mx-auto mt-4 justify-around'>
            <div className='reading_center basis-7/12'>
                {contentNew ? <ReadingCompoment contentNew={contentNew}></ReadingCompoment> : <p></p>}

            </div>
            <div className='reading-right basis-4/12'>
                <h4>Top {sectionID?.data.response.section.webTitle} from us</h4>

                {renderAd()}
            </div>
        </div>
    )
}

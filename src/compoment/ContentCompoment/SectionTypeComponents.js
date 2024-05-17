import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getNewsPaperFromSection } from '../../service/getServiceNewspaper';

export default function SectionTypeComponents() {
    const params = useParams();
    const { section } = params;
    const [newsSection, setNewsSection] = useState();
    const getData = async () => {
        const result = await getNewsPaperFromSection(section);

        setNewsSection(result.data.response)
    }
    useEffect(() => {
        getData()
    }, [section])
    const testDemo = (textTest) => {
        if (textTest.length > 75) {
            textTest = textTest.slice(0, 60) + "...";
            return textTest;
        } else {
            return textTest;
        }
    }
    const renderNew = () => {
        return newsSection?.results.map((item1, index) => {
            if (item1?.elements && item1?.elements !== undefined && item1?.elements !== "") {
                return <div className='section_news' key={index}>
                    <NavLink to={`/reading/${item1.id}`}>
                        <img src={item1?.elements[0]?.assets[0]?.file ? item1?.elements[0]?.assets[0]?.file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={item1?.elements[0]?.assets[0]?.typeData?.altText ? item1?.elements[0]?.assets[0]?.typeData?.altText : "Newest new from us"}></img>
                        <h5>{testDemo(item1.webTitle)}</h5>
                        <p>Author: {item1?.fields?.byline}</p>
                    </NavLink>
                </div>
            }
            else {
                return <div className='' key={index}>
                    <NavLink to={`${item1.id}`}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s" alt="Newest new from us"></img>
                        <h5>{testDemo(item1.webTitle)}</h5>
                    </NavLink>
                </div>
            }
        })

    }
    return (
        <div>
            <h4>{newsSection?.section.webTitle}</h4>
            <div className='section_new'>
                <div className='section_content flex flex-row  flex-wrap'>
                    {renderNew()}
                </div>
            </div>
        </div>
    )
}
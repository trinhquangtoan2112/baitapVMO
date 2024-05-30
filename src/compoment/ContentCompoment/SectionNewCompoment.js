import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionNewCompoment(props) {
    const { sectionComponents } = props;
    const color = "orange"
    const testDemo = (textTest) => {
        if (textTest.length > 75) {
            textTest = textTest.slice(0, 60) + "...";
            return textTest;
        } else {
            return textTest;
        }
    }
    const renderSection = () => {
        return sectionComponents.map((item, index) => {
            return <div className='section_new' key={index}>
                <NavLink style={{ borderLeft: `4px solid ${color}` }}>{item[0].sectionName}</NavLink>
                <div className='section_content flex flex-row  flex-wrap'>
                    {item.map((item1, index1) => {
                        if (item1?.elements && item1?.elements !== undefined && item1?.elements !== "") {
                            return <div className='section_news' key={index1}>
                                <NavLink to={`/reading/${item1.id}`}>
                                    <img src={item1?.elements[0]?.assets[0]?.file ? item1?.elements[0]?.assets[0]?.file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={item1?.elements[0]?.assets[0]?.typeData?.altText ? item1?.elements[0]?.assets[0]?.typeData?.altText : "Newest new from us"}></img>
                                    <h5>{testDemo(item1.webTitle)}</h5>
                                    <p>Author: {item1?.fields?.byline}</p>
                                </NavLink>
                            </div>
                        }
                        else {
                            return <div className='section_news' key={index1}>
                                <NavLink to={`/reading/${item1.id}`}>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={"Newest new from us"}></img>
                                    <h5>{testDemo(item1.webTitle)}</h5>
                                    <p>Author: {item1?.fields?.byline}</p>
                                </NavLink>
                            </div>
                        }

                    })}
                </div>
            </div>
        })
    }
    return (
        <>
            {renderSection()}
        </>
    )
}

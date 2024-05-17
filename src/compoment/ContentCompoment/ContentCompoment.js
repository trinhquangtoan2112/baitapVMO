import React from 'react'
import { NavLink } from 'react-router-dom'

export default function ContentCompoment(props) {

    const { ContentArray } = props;

    const arrayRight = ContentArray?.slice(3)
    const renderRight = () => {
        return arrayRight.map((item, index) => {
            if (item?.elements && item?.elements !== undefined && item?.elements !== "") {
                return <div className='content_news_right ' key={index}>
                    <NavLink to={`/reading/${item.id}`}>
                        <img src={item?.elements[0]?.assets[2]?.file && item?.elements[0]?.assets[2]?.file !== undefined ? item?.elements[0].assets[2].file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={item?.elements[0]?.assets[1]?.typeData?.altText ? item?.elements[0]?.assets[1]?.typeData?.altText : item?.webTitle}></img>
                        <h5>{item?.webTitle}</h5>
                    </NavLink>
                </div>
            }
            else {
                return <div className='content_news_right ' key={index}>
                    <NavLink to={`/reading/${item.id}`}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s" alt={item?.webTitle}></img>
                        <h5>{item?.webTitle}</h5>
                    </NavLink>
                </div>
            }

        })
    }
    const renderCompoment = () => {
        if (ContentArray) {
            return <div className='main_content'>
                <h4>Top News</h4>
                <div className='content flex flex-row   '>
                    <div className='col-content col_content_left basis-6/12   '>
                        <NavLink to={`/reading/${ContentArray[0].id}`}>
                            <img src={ContentArray[0]?.elements !== undefined ? ContentArray[0]?.elements[0].assets[2].file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={ContentArray[0]?.elements !== undefined ? ContentArray[0]?.elements[0].assets[0].typeData.altText : ContentArray[0]?.webTitle} ></img>
                            <h5>{ContentArray[0]?.webTitle}</h5>
                            <div className='col_contentLeft_info'>
                                <p>{ContentArray[0]?.fields.trailText}</p>
                                <p>Authors: {ContentArray[0]?.fields.byline}</p>
                            </div>
                        </NavLink>
                    </div>
                    <div className='col-content col-content-center basis-3/12 mx-6 '>
                        <div className='content_news'>
                            <NavLink to={`/reading/${ContentArray[1].id}`}>
                                <img src={ContentArray[1]?.elements !== undefined ? ContentArray[1]?.elements[0].assets[1].file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={ContentArray[1]?.elements !== undefined ? ContentArray[1]?.elements[0].assets[1].typeData.altText : ContentArray[1]?.webTitle}></img>
                                <h5>{ContentArray[1]?.webTitle}</h5>
                            </NavLink>
                        </div>
                        <div className='content_news'>
                            <NavLink to={`/reading/${ContentArray[2].id}`}>
                                <img src={ContentArray[2]?.elements !== undefined ? ContentArray[2]?.elements[0].assets[0].file : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s"} alt={ContentArray[2]?.elements !== undefined ? ContentArray[2]?.elements[0].assets[1].typeData.altText : ContentArray[2]?.webTitle}></img>
                                <h5>{ContentArray[2]?.webTitle}</h5>
                            </NavLink>
                        </div>
                    </div>
                    <div className='col-content col-content-right basis-3/12 '>

                        {renderRight()}
                    </div>
                </div>
                <div className='text-right'>
                    <NavLink>See more</NavLink>
                </div>

            </div>
        }
    }
    return (
        <>   {renderCompoment()}</>

    )
}

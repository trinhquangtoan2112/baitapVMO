import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { hideLoading } from '../../store/Reducer/LoadingReducer';
import { searchFromKeyWord } from '../../service/getServiceNewspaper';
import { NavLink } from 'react-router-dom'

export default function SearchComponents() {
    const dispatch = useDispatch()
    const [data, setData] = useState();
    const testDemo = (textTest) => {

        if (textTest.length > 75) {
            textTest = textTest.slice(0, 60) + "...";
            return textTest;
        } else {
            return textTest;
        }
    }
    useEffect(() => {
        setTimeout(() => { dispatch(hideLoading()) }, 3000)
    }, []);
    const refSeach = useRef();
    const getData = async (e) => {
        const data = await searchFromKeyWord(e.target.value);
        console.log(data)
        setData(data?.data.response.results)

    }
    console.log(data)
    const searching = (e) => {
        if (refSeach.current) {
            clearTimeout(refSeach.current)
        }
        refSeach.current = setTimeout(() => {
            getData(e)
        }, 3000)
    }

    const renderSearch = () => {
        return data?.map((item1, index) => {
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
                return <div className='section_news' key={index}>
                    <NavLink to={`/reading/${item1.id}`}>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s" alt="Newest new from us"></img>
                        <h5>{testDemo(item1.webTitle)}</h5>
                    </NavLink>
                </div>
            }
        })

    }




    return (
        <div>
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form">
                            <i className="fa fa-search" />
                            <input onChange={(e) => {
                                searching(e)
                            }} type="text" className="form-control form-input" placeholder="Search anything..." />

                        </div>
                    </div>
                </div>
            </div>
            <div className='section_new'>
                <div className='section_content flex flex-row  flex-wrap'>
                    {data !== undefined && data.length > 0 ? renderSearch() : <p>Không có</p>}
                </div>
            </div>
        </div>
    )
}

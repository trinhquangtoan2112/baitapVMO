import React, { useEffect, useState } from 'react'
import ContentCompoment from '../../compoment/ContentCompoment/ContentCompoment'
import SectionNewCompoment from '../../compoment/ContentCompoment/SectionNewCompoment'
import { getNewsForHomePage } from '../../service/getServiceNewspaper';
import { useDispatch } from 'react-redux';
import { getLoading, hideLoading } from '../../store/Reducer/LoadingReducer';
import { message } from 'antd';

export default function HomePage() {
    let result;

    const dispatch = useDispatch();
    let objectKey = {};
    const [content, setContent] = useState();
    const [newArray, setNewArray] = useState();
    const [sectionComponents1, setsectionComponents] = useState();
    useEffect(() => {
        document.title = "The newspaper";
        const getNews = async () => {
            dispatch(getLoading())
            try {
                result = await getNewsForHomePage();
                setContent(result.data.response.results.slice(0, 7));
                setNewArray(result.data.response.results.slice(6));
            } catch (error) {
                message.error("Something wrong here")
            }

            dispatch(hideLoading())

        }
        getNews()
    }, []);
    useEffect(() => {

        renderTopSport()
        renderSectionNew()

    }, [newArray])
    const renderTopSport = async () => {
        await newArray?.map((item, index) => {
            if (objectKey.hasOwnProperty(item.sectionId)) {
                objectKey[item.sectionId] += 1;
            } else {
                objectKey[item.sectionId] = 1;
            }
            return null;
        })

    }
    const renderSectionNew = async () => {
        if (newArray) {
            let sectionComponents1 = []
            for (let key in objectKey) {
                let value = objectKey[key];
                let sectionArray;
                if (value > 5) {
                    sectionArray = await newArray.filter(item => item.sectionId === key);
                    await sectionComponents1.push(sectionArray)
                }
            }
            setsectionComponents(sectionComponents1)
        } else {
        }
    };
    return (
        <>
            {
                content ? <ContentCompoment ContentArray={content}></ContentCompoment> : <span></span>
            }

            {
                sectionComponents1 ? <SectionNewCompoment sectionComponents={sectionComponents1}></SectionNewCompoment> : <span></span>
            }
        </>
    )
}

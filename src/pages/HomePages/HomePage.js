import React, { useEffect, useState } from 'react'
import ContentCompoment from '../../compoment/ContentCompoment/ContentCompoment'
import SectionNewCompoment from '../../compoment/ContentCompoment/SectionNewCompoment'
import { getNewsForHomePage } from '../../service/getServiceNewspaper';

export default function HomePage() {
    let result;


    let objectKey = {};
    const [content, setContent] = useState();
    const [newArray, setNewArray] = useState();
    const [sectionComponents1, setsectionComponents] = useState();
    useEffect(() => {
        const getNews = async () => {
            result = await getNewsForHomePage();
            setContent(result.data.response.results.slice(0, 7));
            setNewArray(result.data.response.results.slice(6));
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

import React from 'react'
import parse from 'html-react-parser';
import CommentComponent from '../CommentComponent/CommentComponent';
import { useSelector } from 'react-redux';

export default function ReadingCompoment(props) {
    const { response } = props.contentNew?.data;
    const { body } = response.content.blocks

    const documentTitle = () => {
        document.title = response.content.webTitle;
        window.scrollTo(0, 0);
    }
    const renderNewContent = () => {
        documentTitle()
        return body.map((item, index) => {
            return <div key={index}>
                {
                    parse(item.bodyHtml, {
                        replace(domNode) {
                            if (domNode.tagName === "a") {
                                const dataText = domNode.children[0].data;
                                return <span>{dataText}</span>;
                            }
                            if (domNode.tagName === "strong") {
                                const dataText = domNode.children[0].data;
                                return <span>{dataText}</span>
                            }
                            if (domNode.tagName === "ul") {
                                return <span style={{ display: "none" }}></span>
                            }
                            if (domNode.tagName === "br") {
                                return <span style={{ display: "none" }}></span>
                            }
                            if (domNode.tagName === "figure") {
                                return <span style={{ display: "none" }}></span>
                            }
                        }
                    })
                }
            </div>

        })

    }

    return (
        <div className='reading_content'>
            <div className='reading-title'>
                <h3 className='main_title'>{response?.content.webTitle}</h3>
                <h5 className='sub-title'>{
                    response?.content.fields.trailText
                }</h5>
                <div className='content_info'>
                    <p>By: {
                        response?.content.fields.byline
                    } </p>
                    <p>Public at :{
                        response?.content.webPublicationDate
                    }</p>
                </div>
                <div className='img_info'>
                    {response?.content?.blocks?.main?.elements[0]?.assets[0]?.file ? <img src={response?.content?.blocks?.main?.elements[0]?.assets[0]?.file} alt={response.content.blocks.main.elements[0]?.imageTypeData?.alt}></img>
                        : <span></span>}
                    {response?.content?.blocks?.main?.elements[0]?.imageTypeData?.caption ?
                        <p className='img_title'>{response?.content?.blocks?.main?.elements[0]?.imageTypeData?.caption} By: {response?.content?.blocks?.main?.elements[0]?.imageTypeData?.credit}</p> : <span></span>
                    }

                </div>
            </div>
            <hr></hr>
            <br></br>
            <div className='reading_content'>


                <>
                    {/* {parse(
                        { blocks.body.bodyTextSummary }, {
                        replace(domNode) {
                            if (domNode.tagName === "a") {
                                const dataText = domNode.children[0].data;
                                return <span>{dataText}</span>;
                            }
                            if (domNode.tagName === "strong") {
                                return <span style={{ display: "none" }}></span>
                            }
                            if (domNode.tagName === "ul") {
                                return <span style={{ display: "none" }}></span>
                            }
                        }
                    })
                    } */}
                    {renderNewContent()}
                </>
            </div>
            <CommentComponent></CommentComponent>

        </div>
    )
}

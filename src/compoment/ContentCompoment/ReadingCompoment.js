import React, { useEffect, useRef, useState } from 'react'
import parse from 'html-react-parser';
import CommentComponent from '../CommentComponent/CommentComponent';
import { useDispatch, useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import html2pdf from 'html2pdf.js';
import { addDoc } from 'firebase/firestore';
import { getLoading, hideLoading } from '../../store/Reducer/LoadingReducer';
import { checkBookMark, checkDocs, saveBookMark } from '../../service/firebaseService';
import dayjs from 'dayjs';
import { message } from 'antd';
export default function ReadingCompoment(props) {
    const userDetail = useSelector(state => state.UserReducer.userDetail)

    const [hasbookMark, setHasBookMark] = useState(false)
    const { response } = props.contentNew?.data;
    const { body } = response.content.blocks
    const { pathName } = props;
    let path = pathName.replace(/\//g, "~")

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
    const pdfRef = useRef();
    const downloadPdf = () => {
        const input = pdfRef.current;

        if (!input) {
            console.error("pdfRef is not defined or pointing to a valid element.");
            return;
        }
        html2canvas(input, {

            useCORS: true,
            allowTaint: true,
        }).then((canvas) => {

            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF('p', 'mm', 'a4', false);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = pdfWidth / imgWidth;
            const pageHeight = pdfHeight / ratio;
            let heightLeft = imgHeight;
            let position = 0;
            while (heightLeft > 0) {
                const pdfPageHeight = imgHeight * ratio;
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, pdfPageHeight);
                heightLeft -= pageHeight;
                position -= pdfHeight;
                if (heightLeft > 0) {
                    pdf.addPage();
                }
            }
            pdf.save(`${path}.pdf`);
        }).catch((error) => {
            console.error('Error capturing the canvas:', error);
        });
    }
    const bookmark = async () => {
        let path1 = pathName.replace(/~/g, "/")
        const data = {
            idWeb: path1,
            title: response?.content.webTitle,
            ...(
                response?.content?.blocks?.main?.elements[0]?.assets[0]?.file
                    ? {
                        imgUrl: response.content.blocks.main.elements[0].assets[0].file,
                        alt: response.content.blocks.main.elements[0]?.imageTypeData?.alt || ""
                    }
                    : {
                        imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTJiiwPeAByqPq0xaaE8py0UGtCpqot0U1rIb7mqwCAA&s",
                        alt: "web img"
                    }
            )
        }

        const saveBookMark1 = await saveBookMark(userDetail.localId, path, data);
        getBookMarkList()
    }
    const getBookMarkList = async () => {
        try {
            const getBookmark = await checkDocs(userDetail.localId, path);
            setHasBookMark(getBookmark)

        } catch (error) {
            message.error("Somthing wrong here")
        }

        // const getBookmark = await checkBookMark(userDetail.localId);

    }
    useEffect(() => {
        getBookMarkList()
    }, [userDetail, path])
    return (
        <div className='reading_content w-full'  >

            <div ref={pdfRef}>
                <div className='reading-title'>
                    <h3 className='main_title'>{response?.content.webTitle}</h3>
                    <h5 className='sub-title'>{
                        response?.content.fields.trailText
                    }</h5>
                    <div className='content_info'>
                        <p>By: {
                            response?.content.fields.byline
                        } </p>
                        <p>Public at: {
                            dayjs(response?.content.webPublicationDate).format("HH:mm " + "DD-MM-YYYY")

                        }</p>
                    </div>
                    <div className='img_info'>
                        <div className='img_info'>
                            {response?.content?.blocks?.main?.elements[0]?.assets[0]?.file ? (
                                <img src={response?.content?.blocks?.main?.elements[0]?.assets[0]?.file} alt={response.content.blocks.main.elements[0]?.imageTypeData?.alt} />
                            ) : <span></span>}
                            {response?.content?.blocks?.main?.elements[0]?.imageTypeData?.caption ?
                                <p className='img_title'>{response?.content?.blocks?.main?.elements[0]?.imageTypeData?.caption} By: {response?.content?.blocks?.main?.elements[0]?.imageTypeData?.credit}</p> : <span></span>
                            }

                        </div>
                    </div>
                    <hr></hr>
                    <br></br>
                    <div className='reading_content'>
                        {renderNewContent()}
                    </div>
                    <p>Provide by the newspaper</p>
                    <p></p>
                </div>
            </div>
            <button className='btn btn-primary' onClick={downloadPdf}>Download</button>
            {hasbookMark || userDetail.length === 0 ? <button disabled className='btn btn-primary' onClick={bookmark}>Boorkmark</button> : <button className='btn btn-primary' onClick={bookmark}>Boorkmark</button>}

            <div className='w-full'><CommentComponent pathName={pathName}></CommentComponent></div>


        </div>

    )
}

import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showLoginForm } from '../../store/Reducer/UserReducer';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, query, updateDoc } from 'firebase/firestore';
import { db, realtimeDb } from '../../firebase';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { child, get, getDatabase, onValue, ref, remove, set, update } from 'firebase/database';
import { message } from 'antd';

export default function CommentComponent(props) {
    let { pathName } = props;
    pathName = pathName.replace(/\//g, "`")
    const [show, setShow] = useState(false);
    const [editingComment, setEditingComment] = useState(null);
    const [editedContent, setEditedContent] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const now = new Date();
    let date = dayjs(now).format("HH:mm DD/MM/YYYY")

    const [commentDetail, setCommentDetail] = useState();
    const [comment, setComment] = useState();
    const [ckValue, setCkValue] = useState(true);
    const userDetail = useSelector(state => state.UserReducer.userDetail);
    const [idComment, setIdComment] = useState()
    const hasUser = useSelector(state => state.UserReducer.hasUser);
    const dispatch = useDispatch()
    const showForm = () => {
        dispatch(showLoginForm())
    }
    const comment1 = useRef();
    const lengthRef = useRef();
    const starCountRef = ref(realtimeDb, `commentID/${pathName}`);
    onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data === null || data === undefined) {
            lengthRef.current = 0;
        } else {
            const filteredData = Object.values(data).filter(val => val !== null && val !== undefined);
            const keys = Object.keys(data);
            const lastKey = keys[keys.length - 1];
            const lastCommentId = data[lastKey].idComment;
            lengthRef.current = lastCommentId
            comment1.current = filteredData
            if (filteredData === comment) {

            } else {
                const strValue1 = JSON.stringify(filteredData);
                const strValue2 = JSON.stringify(comment);
                if (strValue1 !== strValue2) {
                    setComment(filteredData);
                }
            }
        }
    });
    const submitComment = async (e) => {
        e.preventDefault();
        const db1 = getDatabase();
        set(ref(db1, `commentID/${pathName}/${lengthRef.current + 1}`), {
            comment: commentDetail,
            dateTime: date,
            idUser: userDetail?.localId,
            name: userDetail?.email,
            idComment: lengthRef.current + 1
        }).then(() => {
            setCkValue(" ")
            setTimeout(() => {
                setCkValue(true)
            }, [1])

            message.success("Commet complete")
        }).catch(() => {
            message.success("Comment error")
        });
    }
    const handleEditClick = (item) => {
        setEditingComment(item.idComment);
        setEditedContent(item.comment);
    };

    const renderComment = () => {
        return comment?.map((item, index) => {
            const commentId = item.idComment;
            const isEditing = editingComment === commentId;
            return <div className={`comment_content mb-2 ${theme ? "text-white" : ""}`} key={index}>
                <div className='comment_contetn_info'>
                    <h4 className='comment_userName'>{item.name}</h4>
                    <p>Date time {item.dateTime}</p>
                </div>
                <p className='content_main'>
                    {isEditing ? (
                        <CKEditor
                            editor={ClassicEditor}
                            config={{ placeholder: "Please enter your comment" }}
                            data={editedContent}
                            onReady={editor => {

                            }}
                            onChange={(_, editor) => setEditedContent(editor.getData().trim())}
                            onBlur={(event, editor) => {

                            }}
                            onFocus={(event, editor) => {

                            }}
                        />
                    ) : (
                        parse(item.comment)
                    )}
                </p>
                {item.idUser === userDetail?.localId ? <>
                    {isEditing ? (
                        <button className=' border-2 hover:border-2 border-blue-500 px-4 py-1 bg-blue-500 transition-all text-yellow-50 hover:bg-white  hover:text-blue-500  ' onClick={() => {
                            editComment(item)
                        }}>Save</button>
                    ) : (
                        <button className=' border-2 hover:border-2 border-blue-500 px-4 py-1 bg-blue-500 transition-all text-yellow-50 hover:bg-white  hover:text-blue-500  ' onClick={() => {
                            handleEditClick(item)
                        }}>Edit</button>
                    )}
                    <button className=' border-2 border-blue-100   px-4 py-1  transition-all text-blue-500 hover:bg-blue-500 hover:text-white ml-3  ' onClick={() => {
                        handleShow()
                        setIdComment(item.idComment)
                    }}>Xóa</button></> : <></>}
            </div>
        })

    }
    const deleteComment = async () => {
        // const testCollection = doc(db, "commentID", `${pathName}`, `${pathName}`, `${idComment}`);
        // await deleteDoc(testCollection).then((data) => {
        //    
        //     checkComment();
        //     
        // }).catch((err) => { })

        const db1 = getDatabase();
        remove(ref(db1, `commentID/${pathName}/${idComment}`), {
        })
            .then(() => {
                message.success("Delete complete")
                setEditingComment(null)
                handleClose()
                onValue(starCountRef, (snapshot) => {

                    const data = snapshot.val();
                    if (data === null || data === undefined) {
                        setComment(null);
                    } else {
                        const filteredData = Object.values(data).filter(val => val !== null && val !== undefined);
                        const keys = Object.keys(data);
                        const lastKey = keys[keys.length - 1];
                        const lastCommentId = data[lastKey].idComment;
                        lengthRef.current = lastCommentId
                        comment1.current = filteredData
                        if (filteredData === comment) {

                        } else {
                            const strValue1 = JSON.stringify(filteredData);
                            const strValue2 = JSON.stringify(comment);
                            if (strValue1 !== strValue2) {
                                setComment(filteredData);
                            }
                        }



                    }
                });
            })
            .catch((error) => {
                message.error("Delete errror")
            });
    }
    const editComment = async (item) => {
        const filteredArray = comment1.current.filter(item1 => item1.idComment === item.idComment);
        const db1 = getDatabase();
        set(ref(db1, `commentID/${pathName}/${item.idComment}`), {
            dateTime: filteredArray[0].dateTime,
            idComment: filteredArray[0].idComment,
            idUser: filteredArray[0].idUser,
            name: filteredArray[0].name,
            comment: editedContent,
        })
            .then(() => {
                message.success("Update complete")
                setEditingComment(null)
            })
            .catch((error) => {
                message.error("Update errror")
            });
    }
    const theme = useSelector(state => state.LoadingReducer.dark)
    return (
        <div className='commentcompoments'>
            <h5>Comment</h5>
            {hasUser ?
                <> <form onSubmit={submitComment}>
                    <p>Writing your thought</p>
                    <CKEditor
                        editor={ClassicEditor}
                        config={{ placeholder: "Please enter your comment" }}
                        data={ckValue}
                        onReady={editor => {
                        }}
                        onChange={(_, editor) => setCommentDetail(editor.getData().trim())
                        }
                        onBlur={(event, editor) => {
                        }}
                        onFocus={(event, editor) => {
                            setEditingComment(null)
                        }}
                    />
                    <button>Add your comment</button>
                </form>
                    <p>Please be polite and respectful of others</p>
                    {renderComment()}</> : <p className='text-red-600'>You need login to comments, <span className='cursor-pointer text-blue-600' onClick={() => {
                        showForm()
                    }}>here</span></p>}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body> <p>Are you sure you want to delete this comment ?</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        deleteComment()
                    }}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

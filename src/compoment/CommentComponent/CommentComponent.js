import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showLoginForm } from '../../store/Reducer/UserReducer';
import { addDoc, collection, deleteDoc, doc, getDocs, limit, query, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import dayjs from 'dayjs';
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { update } from 'firebase/database';

export default function CommentComponent(props) {

    let { pathName } = props;
    pathName = pathName.replace(/\//g, "`")

    useEffect(() => {
        checkComment()
    }, [])
    useEffect(() => {
        checkComment()
    }, [pathName])
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

    const checkComment = async () => {
        const subCollection = collection(db, "commentID", `${pathName}`, `${pathName}`);
        const testq = query(subCollection, limit(5));
        const querySnapshotq = await getDocs(testq);
        console.log(querySnapshotq)
        if (querySnapshotq._snapshot.docChanges[0] === undefined) {
            setComment()
            //  const testCollection = collection(db, "commentID", `${pathName}`, `${pathName}`);
            // addDoc(testCollection, {
            //     comment: "sfafasfsfsasf",
            //     dateTime: "18h 30/01/2002"
            // })

        } else {
            setComment(querySnapshotq._snapshot.docChanges)
        }
    }
    const submitComment = async (e) => {
        e.preventDefault();
        const testCollection = collection(db, "commentID", `${pathName}`, `${pathName}`);
        if (commentDetail !== undefined) {
            await addDoc(testCollection, {
                comment: commentDetail,
                dateTime: date,
                idUser: userDetail?.localId,
                name: userDetail?.email
            }).then((data) => {
                checkComment()
                setCkValue("")

                setTimeout(() => {
                    setCkValue(true)
                }, 1);


            }).catch((err) => {
                console.log(err);
            })
        }
    }
    const handleEditClick = (item) => {
        setEditingComment(item.doc.key.path.segments[item.doc.key.path.segments.length - 1]);
        setEditedContent(item.doc.data.value.mapValue.fields.comment.stringValue);
    };
    const renderComment = () => {
        return comment?.map((item, index) => {
            const commentId = item.doc.key.path.segments[item.doc.key.path.segments.length - 1];
            const isEditing = editingComment === commentId;

            return <div className='comment_content mb-2' key={index}>
                <div className='comment_contetn_info'>
                    <h4 className='comment_userName'>{item.doc.data.value.mapValue.fields.name.stringValue}</h4>
                    <p>Date time {item.doc.data.value.mapValue.fields.dateTime.stringValue}</p>
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
                        parse(item.doc.data.value.mapValue.fields.comment.stringValue)
                    )}
                </p>
                {item.doc.data.value.mapValue.fields.idUser.stringValue === userDetail?.localId ? <>
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
                        setIdComment(item.doc.key.path.segments[item.doc.key.path.segments.length - 1])
                    }}>Xóa</button></> : <></>}
            </div>
        })

    }
    const deleteComment = async () => {
        const testCollection = doc(db, "commentID", `${pathName}`, `${pathName}`, `${idComment}`);
        await deleteDoc(testCollection).then((data) => {
            handleClose()
            checkComment();
            setEditingComment(null)
        }).catch((err) => { console.log(err) })
    }
    const editComment = async () => {
        const testCollection = doc(db, "commentID", `${pathName}`, `${pathName}`, `${editingComment}`);
        if (editedContent !== undefined && editedContent !== "") {
            await updateDoc(testCollection, {
                comment: editedContent,
                dateTime: date,
            }).then((data) => {
                checkComment();
                setEditingComment(null)
            }).catch((err) => { console.log(err) })
        }
    }
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

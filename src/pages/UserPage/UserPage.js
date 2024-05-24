import React, { useEffect, useState } from 'react'
import DetailComponents from '../../compoment/ContentCompoment/DetailComponents'
import { collection, getDocs, limit, query } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { checkBookMark, deleteBookMark } from '../../service/firebaseService';
import { getLoading, hideLoading } from '../../store/Reducer/LoadingReducer';
import { Button, ListGroup, Modal, Table } from 'react-bootstrap';
export default function UserPage() {
    const [show, setShow] = useState(false);
    const [id, setID] = useState();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const userDetail = useSelector(state => state.UserReducer.userDetail)
    console.log(userDetail, "userDetail");
    const [listState, setListState] = useState();
    const dispatch = useDispatch()
    const getBookMarkList = async () => {
        const getBookmark = await checkBookMark(userDetail.localId);
        console.log(getBookmark, "12214")
        setListState(getBookmark)
    }
    useEffect(() => {

    }, [])
    useEffect(() => {
        getBookMarkList()
        setTimeout(() => { dispatch(hideLoading()) }, 3000)
    }, [userDetail]);
    const renderList = () => {
        if (!listState) {
            return <p className='text-center'>Nothing here</p>
        } else {
            return listState.docChanges.map((item, index) => {
                let id = item.doc.key.path.segments[item.doc.key.path.segments.length - 1];
                return <tr key={index} className='align-middle'>
                    <td>{index + 1}</td>
                    <td className='flex justify-center'>  <img className='h-fit w-2/4' src={item.doc.data.value.mapValue.fields.imgUrl.stringValue} alt={item.doc.data.value.mapValue.fields.alt.stringValue}></img></td>
                    <td>  <h5>{item.doc.data.value.mapValue.fields.title.stringValue}</h5></td>
                    <td> <button className='bg-red-600  px-3 py-2 border-2 hover:border-red-500 hover:bg-transparent' onClick={() => {
                        handleShow()
                        setID(id)

                    }}>Delete</button></td>
                </tr>


            })
        }
    }
    const deleteBookMark1 = async (userID, arcticleID) => {
        const delebook = await deleteBookMark(userID, arcticleID);
        console.log(delebook)
        if (delebook) {
            getBookMarkList()
        } else {
        }
    }
    return (
        <div>
            <h2 className='email_detail'>Welcome trinhtoanquang@gmail.com</h2>
            <h3 className='text-center'>Bookmark List</h3>
            <Table className='text-center' striped bordered hover>
                <thead >
                    <tr>
                        <th>Index</th>
                        <th>Img</th>
                        <th>WebTitle</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>


                    {renderList()}
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Warning</Modal.Title>
                </Modal.Header>
                <Modal.Body> <p>Are you sure you want to delete this bookmark ?</p></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        deleteBookMark1(userDetail.localId, id)
                        handleClose()
                    }}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
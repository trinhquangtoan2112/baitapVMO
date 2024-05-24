import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { hideLoginForm } from '../../store/Reducer/UserReducer';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import App from './../../App';

export default function SignUpComponents() {

    const [email, setEmail] = useState();

    const [passwork, setPasswork] = useState();
    const check = async (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, passwork).then((userCredential) => {

        }).catch((error) => {
            console.log(error);
        });


    }
    const dispatch = useDispatch()
    const hideForm = () => {
        setEmail("")
        setPasswork("")
        dispatch(hideLoginForm())
    }
    return (
        <div className='flex flex-row flex-wrap w-11/12 mx-auto'>
            <Form className='w-11/12 mx-auto  my-3
        ' onSubmit={(e) => {
                    check(e)
                }}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={passwork} onChange={(e) => {
                        setPasswork(e.target.value)
                    }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicControlPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Confirm password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <Button className='bg-white text-blue-600   hover:text-black ml-2' onClick={() => {
                    hideForm()
                }}>
                    Cancel
                </Button>
            </Form>

            {/* <div className='basis-2/4'></div> */}
        </div>

    )
}

import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { auth, db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { hideLoginForm } from '../../store/Reducer/UserReducer';
import { collection, getDocs, limit, query } from 'firebase/firestore';
import App from './../../App';
import { message } from 'antd';

export default function SignUpComponents() {

    const [email, setEmail] = useState();
    const [hide, setHide] = useState(true);
    const [cPasswork, setCPasswork] = useState();
    const [passwork, setPasswork] = useState();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const cPasswordRef = useRef(null);
    const [error, setError] = useState(
        {
            email: "",
            passwork: "",
            cPassword: ""
        }
    );
    const [type, setType] = useState("password");
    const changeTypePassword = () => {
        if (type === "password") {
            setType("text");
            setHide(false)
        } else {
            setType("password");
            setHide(true)

        }
    }
    function showHidePassword1() {
        if (type === "password") {
            return <i className={`formStyle.eye_on fa fa-eye absolute top-2/4 -translate-y-1/2`} style={{ right: "2%" }} id='passwordon' onClick={changeTypePassword} />
        }
        else {

            return <i className={`formStyle.eye_on fa fa-eye-slash absolute top-2/4 -translate-y-1/2`} style={{ right: "2%" }} id='passwordoff' onClick={changeTypePassword} />
        }
    }
    const check = async (e) => {
        e.preventDefault();
        const checkEmail = /^(?=.{6,30}$)([^\s@]+@[^\s@]+\.[^\s@]+)$/;
        const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@]).{6,30}$/;
        if (checkEmail.test(email) && checkPassword.test(passwork) && cPasswork === passwork) {
            createUserWithEmailAndPassword(auth, email, passwork).then((userCredential) => {
                hideForm()
                message.success("Sign up successfully, please return sign in form to login");
            }).catch((error) => {
                message.error
                    ("Error")
            });
        }
        if (!checkEmail.test(email)) {
            setError({
                ...error,
                email: "*Email error"
            })
            emailRef.current.focus();
        } else if (!checkPassword.test(passwork)) {


            setError({
                ...error,
                passwork: "*Password error"
            })
            passwordRef.current.focus();
        } else if (cPasswork !== passwork) {

            setError({
                ...error,
                cPassword: "* Confirm Password must like password"
            })
            cPasswordRef.current.focus();
        }



    }
    const dispatch = useDispatch()
    const hideForm = () => {
        setEmail("")
        setPasswork("")
        setCPasswork("")
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
                    <Form.Control ref={emailRef} placeholder=" Email" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        setError({ ...error, email: "" })
                    }} />
                    <Form.Text className='text-red-500'>{error.email}</Form.Text>

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <div className='relative'>
                        {hide ? <Form.Control ref={passwordRef} type="password" placeholder="Password" value={passwork} onChange={(e) => {
                            setPasswork(e.target.value);
                            setError({ ...error, passwork: "" })
                        }} /> : <Form.Control ref={passwordRef} placeholder="Password" value={passwork} onChange={(e) => {
                            setPasswork(e.target.value);
                            setError({ ...error, passwork: "" })
                        }} />}
                        {showHidePassword1()}

                    </div>
                    <Form.Text className='text-red-500'>{error.passwork}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicControlPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <div className='relative'>
                        {hide ? <Form.Control ref={cPasswordRef} type="password" value={cPasswork} placeholder="Confirm password" onChange={(e) => {
                            setCPasswork(e.target.value);
                            setError({ ...error, cPassword: "" })
                        }} />
                            : <Form.Control ref={cPasswordRef} value={cPasswork} placeholder="Confirm password" onChange={(e) => {
                                setCPasswork(e.target.value);
                                setError({ ...error, cPassword: "" })
                            }} />}
                        {showHidePassword1()}

                    </div>
                    <Form.Text className='text-red-500'>{error.cPassword}</Form.Text>
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

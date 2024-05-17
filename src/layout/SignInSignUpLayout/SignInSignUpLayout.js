import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignInComponents from '../../compoment/SignInComponents/SignInComponents';
import SignUpComponents from '../../compoment/SignUpComponents/SignUpComponents';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUserDetail } from '../../store/Reducer/UserReducer';
import { useDispatch, useSelector } from 'react-redux';

export default function SignInSignUpLayout() {
    const hidden = useSelector(state => state.UserReducer.userLogin);

    const auth = getAuth()
    const dispatch = useDispatch()
    const listen = async () => {
        if (auth?.currentUser) {

            await dispatch(getUserDetail(auth?.currentUser?.reloadUserInfo));
        } else {
            setTimeout(() => {
                if (auth?.currentUser) {
                    dispatch(getUserDetail(auth?.currentUser?.reloadUserInfo));
                }
            }, 500)

        }
    }
    const getDatabase = async () => {

    }
    useEffect(() => {

    }, [])
    useEffect(() => {

        if (auth) {
            listen()
        } else {
            dispatch(getUserDetail());
        }


    }, [auth])
    return (
        <div className={`loginn_form ${hidden ? "" : "hideen"}`}>

            <div className='user_form'>
                <Tabs
                    defaultActiveKey="home"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Sign In"  >
                        <SignInComponents></SignInComponents>
                    </Tab>
                    <Tab eventKey="profile" title="Sign Up">
                        <SignUpComponents></SignUpComponents>
                    </Tab>

                </Tabs>
            </div>
        </div>
    );
}
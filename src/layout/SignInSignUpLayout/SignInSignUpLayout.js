import React, { useEffect, useState } from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SignInComponents from '../../compoment/SignInComponents/SignInComponents';
import SignUpComponents from '../../compoment/SignUpComponents/SignUpComponents';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getUserDetail, getUserFromLocalStorage } from '../../store/Reducer/UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

export default function SignInSignUpLayout() {
    const hidden = useSelector(state => state.UserReducer.userLogin);
    let userInformation = localStorage.getItem("userDetail");
    const auth = getAuth()
    const dispatch = useDispatch()
    const listen = async () => {
        if (userInformation != null && userInformation !== undefined && userInformation !== "") {
            userInformation = JSON.parse(userInformation)
            await dispatch(getUserFromLocalStorage(userInformation));
        }
    }
    const user123 = collection(db, "UserDetail");
    const getDatabase = async () => {
        try {
            const data = await getDocs(user123)
            const filter = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id

            }))
        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        getDatabase();
        listen()
    }, [])

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
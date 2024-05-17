import { getAuth, onAuthStateChanged, sign, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useParams } from 'react-router-dom'
import { showLoginForm, signOutDettail } from '../../store/Reducer/UserReducer';
import { Database, getDatabase } from 'firebase/database';


export default function Homelayout() {
    const detail = useSelector(state => state.UserReducer.userDetail);
    const params = useParams();
    const dispatch = useDispatch()
    const { section } = params;
    const database = getDatabase();
    console.log(database)
    const auth = getAuth()
    const signOutUser = () => {
        signOut(auth).then(() => {
            console.log('sign out sucess')
            dispatch(signOutDettail())
        }).catch((err) => {
            console.log(err);
        })
    }
    const showForm = () => {
        dispatch(showLoginForm())
    }
    return (
        <div className='home_main'>
            <section className='header'>
                <h1>
                    The News Newspaper
                </h1>
                <div className='tag_content'>
                    <hr></hr>
                    <ul className='tag_main'>
                        <li className={section === undefined ? "active" : ""}><NavLink to={""}>Home</NavLink></li>
                        <li className={section === "sport" ? "active" : ""}><NavLink to={"/content/sport"}>Sport</NavLink></li>
                        <li className={section === "world" ? "active" : ""}><NavLink to={"/content/world"}>World</NavLink></li>
                        <li className={section === "politics" ? "active" : ""}><NavLink to={"/content/politics"}>Politics</NavLink></li>
                        <li className={section === "society" ? "active" : ""}><NavLink to={"/content/society"}>Society</NavLink></li>
                        <li className={section === "culture" ? "active" : ""}><NavLink to={"/content/culture"}>Culture</NavLink></li>
                        <li className={section === "lifeandstyle" ? "active" : ""}><NavLink to={"/content/lifeandstyle"}>Life and style</NavLink></li>
                    </ul>
                </div>
                <div className='login w-11/12 text-right mx-auto cursor-pointer' >
                    <NavLink>
                        {detail?.email ? <> <span>{detail.email}</span> <button onClick={() => {
                            signOutUser()
                        }}>Sign Out</button> </> : <p onClick={() => {
                            showForm()
                        }}>Sign in<i className="fa fa-user" />
                        </p>}

                    </NavLink>
                </div>
            </section>
            <div className='w-11/12 mx-auto h-2/6'>
                <Outlet></Outlet>
            </div>
            <section className='footer'>
                <hr>
                </hr>
                <div className='footer_main'>
                    <div className='footer_top'>
                        <h3>The News Newspaper</h3>
                    </div>
                    <div className='footer_center'>
                        <div className='footer_center_ul'>
                            <h4>Our main content</h4>
                            <div className='footer_center_content'>
                                <ul >
                                    <li className={section === undefined ? "active" : ""}><NavLink to={""}>Home</NavLink></li>
                                    <li className={section === "sport" ? "active" : ""}><NavLink to={"/content/sport"}>Sport</NavLink></li>
                                </ul>
                                <ul >
                                    <li className={section === "world" ? "active" : ""}><NavLink to={"/content/world"}>World</NavLink></li>
                                    <li className={section === "politics" ? "active" : ""}><NavLink to={"/content/politics"}>Politics</NavLink></li>
                                </ul>
                                <ul >
                                    <li className={section === "society" ? "active" : ""}><NavLink to={"/content/society"}>Society</NavLink></li>
                                    <li className={section === "culture" ? "active" : ""}><NavLink to={"/content/culture"}>Culture</NavLink></li>
                                </ul>
                                <ul >
                                    <li className={section === "lifeandstyle" ? "active" : ""}><NavLink to={"/content/lifeandstyle"}>Life and style</NavLink></li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer_center_info'>
                            <h4>Follow us on social network</h4>
                            <div className='footer_info_social'>
                                <a href="https://www.linkedin.com/in/tr%E1%BB%8Bnh-quang-to%C3%A0n-186941288/" target="_blank" rel="noreferrer"> <i className="fab fa-linkedin" /></a>
                                <a href="https://www.facebook.com/profile.php?id=61559065154891" target="_blank" rel="noreferrer"> <i className="fab fa-facebook" /></a>
                                <a href="https://www.linkedin.com/in/tr%E1%BB%8Bnh-quang-to%C3%A0n-186941288/" target="_blank" rel="noreferrer"><i className="fab fa-twitter" /></a>
                            </div>
                        </div>
                        <div className='footer_center_sub'>
                            <form>
                                <h4>Get news from us</h4>
                                <p>
                                    Don’t miss our exclusive news. We never send spam!
                                </p>
                                <input placeholder='Email....' name='email'></input>
                                <button>Subscribe</button>
                            </form>
                        </div>
                        <div className='footer_center_information'>
                            <iframe title='googlemap' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d7448.165357287849!2d105.78084285667912!3d21.02937757621473!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1715073315764!5m2!1svi!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            <div className='footer_info'>
                                <h5>Address:Số 10 Phố Thiền Quang, Nguyễn Du, Hai Bà Trưng, Hà Nội, Việt Nam</h5>
                                <p>Phone number: 08043176</p>
                            </div>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer_bottom'>
                    <div className='footer_bottom_left'>
                        &copy;2024 The News Newspaper
                    </div>
                    <div className='footer_bottom_center'>
                        <NavLink>Privacy policies</NavLink>
                        <NavLink>Terms of use</NavLink>
                        <NavLink>Sitemap</NavLink>
                    </div>
                    <div className='footer_bottom_right'>
                        Design by Trinh Quang Toan
                    </div>
                </div>
            </section>
        </div>
    )
}

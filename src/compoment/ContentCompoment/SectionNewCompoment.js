import React from 'react'
import { NavLink } from 'react-router-dom'

export default function SectionNewCompoment() {
    let textTest = "Transfer Talk: Europa League exit edges Kai Havertz closer to Chelsea move es Kai Havertz closer to Chelsea move"
    const testDemo = () => {
        if (textTest.length > 75) {
            textTest = textTest.slice(0, 75) + "...";
        }
    }
    testDemo()
    return (
        <div className='section_new'>
            <NavLink>Sports</NavLink>
            <div className='section_content flex flex-row justify-between flex-wrap'>
                <div className='section_news'>
                    <NavLink>
                        <img src='https://cdn3.ivivu.com/2015/05/deo-viet-nam-ivivu.com-1.jpg' alt='124'></img>
                        <h5>{textTest}</h5>
                        <p>Author: Trinh Quang Toan</p>
                    </NavLink>

                </div>
                <div className='section_news'>
                    <NavLink>
                        <img src='https://cdn3.ivivu.com/2015/05/deo-viet-nam-ivivu.com-1.jpg' alt='124'></img>
                        <h5>Transfer Talk: Europa League exit edges Kai Havertz closer to Chelsea move</h5>
                        <p>Author: Trinh Quang Toan</p>
                    </NavLink>

                </div>
                <div className='section_news'>
                    <NavLink>
                        <img src='https://cdn3.ivivu.com/2015/05/deo-viet-nam-ivivu.com-1.jpg' alt='124'></img>
                        <h5>Transfer Talk: Europa League exit edges Kai Havertz closer to Chelsea move</h5>
                        <p>Author: Trinh Quang Toan</p>
                    </NavLink>

                </div>
                <div className='section_news'>
                    <NavLink>
                        <img src='https://cdn3.ivivu.com/2015/05/deo-viet-nam-ivivu.com-1.jpg' alt='124'></img>
                        <h5>Transfer Talk: Europa League exit edges Kai Havertz closer to Chelsea move</h5>
                        <p>Author: Trinh Quang Toan</p>
                    </NavLink>

                </div>
                <div className='section_news'>
                    <NavLink>
                        <img src='https://cdn3.ivivu.com/2015/05/deo-viet-nam-ivivu.com-1.jpg' alt='124'></img>
                        <h5>Transfer Talk: Europa League exit edges Kai Havertz closer to Chelsea move</h5>
                        <p>Author: Trinh Quang Toan</p>
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

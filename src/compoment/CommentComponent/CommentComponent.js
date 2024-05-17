import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { showLoginForm } from '../../store/Reducer/UserReducer';

export default function CommentComponent() {
    const hasUser = useSelector(state => state.UserReducer.hasUser);
    const dispatch = useDispatch()
    const showForm = () => {
        dispatch(showLoginForm())
    }
    console.log(hasUser)
    return (
        <div className='commentcompoments'>
            <h5>Comment</h5>
            {hasUser ? <>
                <form>
                    <p>Writing your thought</p>
                    <input type='text' placeholder='Share you thought' name='comment'></input>
                    <button>Add your comment</button>
                </form>
                <p>Please be polite and respectful of others</p>
                <div className='comment_content'>
                    <div className='comment_contetn_info'>
                        <h4 className='comment_userName'>Bob</h4>
                        <p>Date time :18h30 22/04/2023</p>
                    </div>
                    <p className='content_main'>Trump (T) walks from a CNN interview in 1990:
                        Charles Feldman (CF, CNN): You have been recently awfully thin-skinned.
                        T: The news media get away with murder.  I think more people should have my vengeful attitude, you’d find a lot more accurate reporting, including yours.
                        CF: What was inaccurate so far?
                        T: I thought your demeanor was inaccurate. I though the questions you were posing were inaccurate, and false, and unfair.
                        CF: Questions by definition can’t be inaccurate.
                        T: Questions were put in such a way that made them statements as opposed to questions.
                        CF: Such as?
                        T: It doesn’t matter.  I don't want to embarrass you.
                        CF: No, I don’t think I would be but let’s lets’ talk about what we talked about yesterday.

                        CF: Those in financial community I’m talking about, and we talked about this on the phone yesterday, who are saying, and it is them saying, not me
                        T (interrupting): This is them, who are this them, one or two ppl? And what about the positive people?
                        CF: Five or six people, ones who said negative things
                        T: Here we are, back to the negative, you know what do this interview with someone else
                        CF: But we talked about this on the phone yesterday. This is exactly the thing we talked about yesterday.
                        T: Do this interview with somebody else. Do this interview with somebody else, you don’t need this. Frankly, you are a very negative guy, and I think it’s very unfair.
                        CF: Sorry you feel that way. There’s nothing we didn’t discuss before.”
                        Just sample T's lack of humanity</p>

                </div>
            </> : <p className='text-red-600'>You need login to comments, <a className='cursor-pointer text-blue-600' onClick={() => {
                showForm()
            }}>here</a></p>}


        </div>
    )
}

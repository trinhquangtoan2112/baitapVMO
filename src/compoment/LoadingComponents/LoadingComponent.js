import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function LoadingComponent() {
    let loading = useSelector(state => state.LoadingReducer.loading)
    const [loading1, setLoaidng] = useState();
    useEffect(() => {
        setLoaidng(loading)
    }, [loading])

    return (
        <>
            {loading1 ? <div className='loading_gif'>
                <img src={require("../../assets/loadingImg/ZKZg.gif")} alt='loading'></img>
            </div> : <></>}
        </>

    )
}

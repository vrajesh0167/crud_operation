import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className=' container mt-5'>
            <div className=' d-flex justify-content-center align-items-center '  style={{height:"80vh"}}>
                <CirclesWithBar
                    height="100"
                    width="100"
                    color="#4fa94d"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    outerCircleColor=""
                    innerCircleColor=""
                    barColor=""
                    ariaLabel='circles-with-bar-loading'
                />
            </div>
        </div>
    )
}

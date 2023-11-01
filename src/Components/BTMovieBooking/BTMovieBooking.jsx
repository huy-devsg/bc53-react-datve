import React from 'react'
import data from './data.json'
import { ChairList } from './ChairList'
import { Result } from './Result'

export const BTMovieBooking = () => {
    return (
        <div className="container mt-3 pb-5">
            <h1 className='text-center'>TRANG ĐẶT VÉ XEM PHIM</h1>
            <div className="row">
                <div className="col-9">
                    <div className="p-3 text-white text-center bg-dark fw-bold mb-5">SCREEN</div>
                    <ChairList data={data} />
                </div>
                <div className="col-3">
                    <Result />
                </div>
            </div>
        </div>
    )
}

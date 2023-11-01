import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { btMovieBookingActions } from '../../store/BTMovieBooking/slice'

export const Result = () => {
    const { chairsBooking } = useSelector((state) => state.btMovieBooking)

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Kết quả đặt vé</h2>
            <div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booked" ></div>
                    <span>Ghế đã đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair booking"></div>
                    <span>Ghế đang đặt</span>
                </div>
                <div className="d-flex gap-3 mt-3">
                    <div className="Chair"></div>
                    <span>Ghế chưa đặt</span>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Số ghế</th>
                        <th>Giá</th>
                        <th>Hủy</th>
                    </tr>
                </thead>
                <tbody>
                    {chairsBooking.map((ghe) => {
                        return (
                            <tr>
                                <td>{ghe.soGhe}</td>
                                <td>{ghe.gia}</td>
                                <td className="text-danger">
                                    <button className="btn"
                                    onClick={() => {
                                        dispatch(btMovieBookingActions.removeChairBooked(ghe))
                                    }}>
                                        <i className="fa-solid fa-xmark"></i></button>
                                </td>
                            </tr>
                        )
                    })}
                    <tr>
                        <td>Tổng</td>
                        <td>
                            {chairsBooking.reduce((total, value) => {
                                return (total += value.gia)
                            }, 0)}
                        </td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button
                className="btn btn-success mt-3"
                onClick={() => {
                    dispatch(btMovieBookingActions.setChairsBooked())
                }}
            >
                Thanh toán
            </button>

            {/* <button
                className="btn btn-success"
                onClick={() => {
                    // dispatch({
                    //     type: 'CHANGE_NUMBER',
                    //     payload: 2,
                    // })
                    dispatch(btMovieBookingActions.inCreaseNumber(2))
                }}
            >
                + Number
            </button> */}
        </div>
    )
}

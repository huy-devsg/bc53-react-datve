// rafc
import React from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import {btMovieBookingActions} from '../../store/BTMovieBooking/slice'
import cn from 'classnames'

export const Chair = ({ ghe }) => {
    console.log('ghe: ', ghe);
    const { chairsBooking, chairsBooked } = useSelector((state) => state.btMovieBooking)
    console.log('chairsBooked: ', chairsBooked);

    console.log('chairsBooking: ', chairsBooking)
  

    const dispatch = useDispatch()

    return (
        <div
            className={cn('Chair abc', {
                booking: chairsBooking.find((e) => e.soGhe === ghe.soGhe),
                booked: chairsBooked.find((e) => e.soGhe === ghe.soGhe),
            })}
            onClick={() => {
                const nonClick = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
                const nonClickChair = chairsBooked.find((value) => value.soGhe === ghe.soGhe);
                if (!nonClick.includes(ghe.soGhe) && !nonClickChair) {
                    dispatch(btMovieBookingActions.setChairsBooking(ghe));
                }                
            }}
        >
            {ghe.soGhe}
        </div>
    )
}

import React from 'react'
import ReservationsInput from '../components/ReservationsInput'
import Reservations from '../components/Reservations'

const ReservationsContainer = (props) => {

    return (
        <div>
            <Reservations reservations={props.venue && props.venue, props.venue.reservations}/>
            <ReservationsInput venue={props.venue}/>
        </div>
    )

}
export default ReservationsContainer
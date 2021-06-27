import React from 'react'
import {connect} from 'react-redux'
import {deleteReservation} from '../actions/deleteReservation'

const Reservations = (props) => {

    const handleDelete = (reservation) => {
        console.log(reservation, reservation.id, reservation.venue_id)
        props.deleteReservation(reservation.id, reservation.venue_id)
    }

    return (
        <div className='reservations_list'>
            {props.reservations && props.reservations.length ? "Current Reservations:" : "There are no reservations for this venue"}
            <br></br>
            {props.reservations && props.reservations.map(reservation => 
                <ul key={reservation.id}>
                    <li>{reservation.res_name} {reservation.phone_number} <button onClick={() => handleDelete(reservation)}>Delete</button></li>
                </ul>
            )}
        </div>
    )
}
export default connect(null, {deleteReservation})(Reservations)
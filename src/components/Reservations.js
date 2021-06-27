import React from 'react'
import {connect} from 'react-redux'
import {deleteReservation} from '../actions/deleteReservation'
import {useHistory} from 'react-router-dom'

const Reservations = (props) => {

    let history = useHistory()

    const handleDelete = (reservation) => {
        props.deleteReservation(reservation.id, reservation.venue_id)
        props.venue && history.push(`/venues/${props.venue.id}`)
    }

    return (
        <div className='reservations_list'>
            {props.reservations && props.reservations.length ? "Current Reservations:" : "There are no reservations for this venue"}
            <br></br>
            {props.reservations && props.reservations.map(reservation => 
                <ul key={reservation.id}>
                    <li>NAME : {reservation.res_name}</li>
                    {reservation.phone_number && <li>PHONE : {reservation.phone_number}</li>}
                    <br />
                    <button onClick={() => handleDelete(reservation)}>Delete Reservation</button>
                </ul>
            )}
        </div>
    )
}
export default connect(null, {deleteReservation})(Reservations)
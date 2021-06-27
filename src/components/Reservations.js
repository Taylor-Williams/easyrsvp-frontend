import React from 'react'

const Reservations = (props) => {

    return (
        <div className='reservations_list'>
            {props.reservations && props.reservations.length ? "Current Reservations:" : "There are no reservations for this venue"}
            <br></br>
            {props.reservations && props.reservations.map(reservation => 
                <ul key={reservation.id}>
                    <li>{reservation.res_name}</li>
                    {reservation.phone_number && <li>{reservation.phone_number}</li>}
                </ul>
            )}
        </div>
    )
}
export default Reservations
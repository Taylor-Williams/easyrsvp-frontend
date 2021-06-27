import React from 'react'

const Reservations = (props) => {
    const handleDelete = () => {
        
    }

    return (
        <div className='reservations_list'>
            {props.reservations && props.reservations.length ? "Current Reservations:" : "There are no reservations for this venue"}
            <br></br>
            {props.reservations && props.reservations.map(reservation => 
                <ul key={reservation.id}>
                    <li>{reservation.res_name} {reservation.phone_number} <button onClick={handleDelete}>Delete</button></li>
                </ul>
            )}
        </div>
    )
}
export default Reservations
import React from 'react'

const Venue = (props) => {

    return(
        <li>
            <li className='venueName'>{props.name}</li>
            <li className='venueLocation'>{props.location}</li>
            <li className='venueOccupancy'>occupany: {props.occupancy}</li>
        </li>
    )
}
export default Venue
import React from 'react'
import {Redirect} from 'react-router-dom'

const Venue = (props) => {

    let venue = props.venues[props.match.params.id - 1]
    {/*TODO: ADD LOGIC TO GET CORRECT VENUE IF ID != ARRAY POSITION*/}
    return(
        <ul>
            {/* {venue ? null : <Redirect to='/venues'/>} */}
            {venue ? <li className='venueName'>{venue.name}</li> : null}
            {venue ? <li className='venueLocation'>{venue.location}</li> : null}
            {venue ? <li className='venueOccupancy'>occupany: {venue.occupancy}</li> : null}
        </ul>
    )
}
export default Venue
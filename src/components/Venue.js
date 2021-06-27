import React from 'react'
import {Redirect} from 'react-router-dom'
import ReservationsContainer from '../containers/ReservationsContainer'

const Venue = (props) => {

    let venue = props.venues.filter(venue => venue.id == props.match.params.id)[0]
    return(
        <div>
            <ul>
                {/* {venue ? null : <Redirect to='/venues'/>} */}
                {venue && <li className='venueName'>{venue.name}</li>}
                {venue && <li className='venueLocation'>{venue.location}</li>}
                {venue && <li className='venueOccupancy'>occupancy: {venue.occupancy}</li>}
            </ul>
            <ReservationsContainer venue={venue}/>
        </div>
    )
}
export default Venue
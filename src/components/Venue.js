import React from 'react'
import {Redirect} from 'react-router-dom'
import ReservationsContainer from '../containers/ReservationsContainer'

const Venue = (props) => {

    let venue = props.venues.filter(venue => venue.id == props.match.params.id)[0]
    return(
        <div>
            <ul>
                {/* {venue ? null : <Redirect to='/venues'/>} */}
                {venue && <li className='venueName'>event name: {venue.name}</li>}
                {venue && <li className='venueOccupancy'>date: {venue.display_date}</li>}
                {venue && <li className='venueLocation'>location: {venue.location}</li>}
                {venue && <li className='venueOccupancy'>occupancy: {venue.occupancy}</li>}
                {venue && <li className='venueOccupancy'>contact: {venue.occupancy}</li>}
            </ul>
            <ReservationsContainer venue={venue}/>
        </div>
    )
}
export default Venue
import React from 'react'
import {Redirect} from 'react-router-dom'
import ReservationsContainer from '../containers/ReservationsContainer'

const Venue = (props) => {

    let venue = props.venues.filter(venue => venue.id == props.match.params.id)[0]
    return(
        <div>
            <ul>
                {/* {venue ? null : <Redirect to='/venues'/>} */}
                {venue ? <li className='venueName'>{venue.name}</li> : null}
                {venue ? <li className='venueLocation'>{venue.location}</li> : null}
                {venue ? <li className='venueOccupancy'>occupany: {venue.occupancy}</li> : null}
            </ul>
            <ReservationsContainer venue={venue}/>
        </div>
    )
}
export default Venue
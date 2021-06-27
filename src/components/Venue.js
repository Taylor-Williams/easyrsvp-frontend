import React from 'react'
import ReservationsContainer from '../containers/ReservationsContainer'
import {deleteVenue} from '../actions/deleteVenue'
import {useHistory} from 'react-router-dom'
import {connect} from 'react-redux'

const Venue = (props) => {

    let venue = props.venues.filter(venue => venue.id == props.match.params.id)[0]
    let history = useHistory()

    const handleDelete = (venue) => {
        props.deleteVenue(venue.id)
        history.push("/venues")
    }

    return(
        <div>
            <ul>
                {/* {venue ? null : <Redirect to='/venues'/>} */}
                {venue && <li className='venueName'>event name: {venue.name}</li>}
                {venue && <li className='venueOccupancy'>date: {venue.display_date}</li>}
                {venue && <li className='venueLocation'>location: {venue.location}</li>}
                {venue && <li className='venueOccupancy'>occupancy: {venue.occupancy}</li>}
                {venue && <li className='venueOccupancy'>contact: {venue.occupancy}</li>}
                <button onClick={() => handleDelete(venue)}>Delete Venue</button>
            </ul>
            <ReservationsContainer venue={venue}/>
        </div>
    )
}
export default connect(null, {deleteVenue})(Venue)
import React from 'react'
import { Route, Link } from 'react-router-dom'

const Venues = (props) => {

    return (
        <div className='welcome_venues'>
            <h3>Welcome to the events list! you can RSVP to any event listed</h3>
            <div className='venueList'>         
                {props.venues.map( venue => {
                    return(
                        <div className='venueId-{venue.id}' key={venue.id}>
                            <Link to={`/venues/${venue.id}`}>{venue.name}</Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}
export default Venues
import React from 'react'
import { Route, Link } from 'react-router-dom'

const Venues = (props) => {

    return (
        <div className='venueList'>
            {console.log(props.venues)}          
            {props.venues.map( venue => {
                return(
                    <div className='venueId-{venue.id}' key={venue.id}>
                        <Link to={`/venues/${venue.id}`}>{venue.name}</Link>
                    </div>
                )
            })}
        </div>
    )

}
export default Venues
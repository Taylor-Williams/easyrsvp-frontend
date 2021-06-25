import React from 'react'

const Venues = (props) => {

    return (
        <div className='venueList'>
            hi
            {console.log(props.venues)}          
            {props.venues.map( venue => {
                return(
                    <ul className='venueId-{venue.id}' key={venue.id}>
                        <li className='venueName'>{venue.name}</li>
                        <li className='venueLocation'>{venue.location}</li>
                        <li className='venueOccupancy'>occupany: {venue.occupancy}</li>
                    </ul>
                )
            })}
        </div>
    )

}
export default Venues
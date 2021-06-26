import React from 'react'

const Venues = (props) => {

    return (
        <div className='venueList'>
            {console.log(props.venues)}          
            {props.venues.map( venue => {
                return(
                    <div className='venueId-{venue.id}' key={venue.id}>
                        <Venue props={venue}/>
                    </div>
                )
            })}
        </div>
    )

}
export default Venues
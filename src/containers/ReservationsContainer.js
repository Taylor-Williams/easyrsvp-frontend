import React from 'react'
import ReservationsInput from '../components/ReservationsInput'
import Reservations from '../components/Reservations'
import Venue from '../components/Venue'
import Venues from '../components/Venues'

class ReservationsContainer extends React.Component {

    render() {
        return (
            <div>
                <ReservationsInput />
                <Reservations resevations={this.props.venue && this.props.venue.reservations}/>
            </div>
        )
    }

}
export default ReservationsContainer
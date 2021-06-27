import React from 'react'
import ReservationsInput from '../components/ReservationsInput'
import Reservations from '../components/Reservations'

class ReservationsContainer extends React.Component {

    render() {
        return (
            <div>
                <Reservations reservations={this.props.venue && this.props.venue, this.props.venue.reservations}/>
                <ReservationsInput venue={this.props.venue}/>
            </div>
        )
    }

}
export default ReservationsContainer
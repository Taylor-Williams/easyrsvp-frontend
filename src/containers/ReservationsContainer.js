import React from 'react'
import ReservationsInput from '../components/ReservationsInput'
import Reservations from '../components/Reservations'

class ReservationsContainer extends React.Component {

    render() {
        return (
            <div>
                <ReservationsInput venue={this.props.venue}/>
                <Reservations reservations={this.props.venue && this.props.venue, this.props.venue.reservations}/>
            </div>
        )
    }

}
export default ReservationsContainer
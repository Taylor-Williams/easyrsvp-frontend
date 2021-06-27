import React from 'react'
import {connect} from 'react-redux'
import {addReservation} from '../actions/addReservation'

class ReservationsInput extends React.Component {

    state = {res_name: '', phone_number: '', venue_id: ''}

    handleSubmit = (event) => {
        event.preventDefault()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return(
            <div>
                <h3>RSVP to this event?</h3>
                <br/>
                <form onSubmit={this.handleSubmit}>
                    <label>What is your name?</label>
                    <br/>
                    <input type='text' palceholder='name' name='res_name' value={this.state.name} onChange={this.handleChange}></input>
                    <label>Would you like to provide your phone number?</label>
                    <br/>
                    <input type='text' palceholder='phone number' name='phone_number' value={this.state.phone_number} onChange={this.handleChange}></input>
                </form>
            </div>
        )
    }
}
export default connect(null, {addReservation})(ReservationsInput)
import React from 'react'
import {connect} from 'react-redux'
import {addVenue} from '../actions/addVenue'
import DatePicker from "react-datepicker"

class VenueInput extends React.Component {

    state = {name: '', location: '', occupancy: '', date:'', contact: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addVenue(this.state)
        this.setState({name: '', location: '', occupancy: '', date: '', contact: ''})
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What is the name of your event?</label>
                    <input type='text' placeholder='Event Name' name='name' value={this.state.name} onChange={this.handleChange} />
                    <br/>
                    <label>What day is it being hosted?</label>
                    <DatePicker selected={this.state.date}
                        showTimeSelect dateFormat="MMMM d, yyyy h:mm aa"
                        placeholderText='Date of Event'
                        timeFormat="HH:mm"
                        onChange={(pickedDate) => this.setState({...this.state, date:pickedDate})}
                    />
                    <br />
                    <label>What is the address of your venue?</label>
                    <input type='text' placeholder='Address' name='location' value={this.state.location} onChange={this.handleChange} />
                    <br/>
                    <label>how many people can your venue hold at a time?</label>
                    <input type='text' placeholder='Venue Occupancy' name='occupancy' value={this.state.occupancy} onChange={this.handleChange} />
                    <br/>
                    <label>Would you like to provide a contact?</label>
                    <input type='text' placeholder='Contact' name='contact' value={this.state.contact} onChange={this.handleChange} />
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}
export default connect(null, {addVenue})(VenueInput)
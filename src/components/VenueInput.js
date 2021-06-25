import React from 'react'
import {connect} from 'react-redux'
import {addVenue} from '../actions/addVenue'

class VenueInput extends React.Component {

    state = {name: '', location: '', occupancy: ''}

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addVenue(this.state)
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>What is the name of your venue?</label>
                    <input type='text' placeholder='Venue Name' name='name' value={this.state.name} onChange={this.handleChange} />
                    <br/>
                    <label>What is the address of your venue?</label>
                    <input type='text' placeholder='Address' name='location' value={this.state.location} onChange={this.handleChange} />
                    <br/>
                    <label>how many people can your venue hold at a time?</label>
                    <input type='text' placeholder='Venue Occupancy' name='occupancy' value={this.state.occupancy} onChange={this.handleChange} />
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}
export default connect(null, {addVenue})(VenueInput)
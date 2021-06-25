import React from 'react'
import {connect} from 'react-redux'
import {fetchVenues} from '../actions/fetchVenues'
import Venues from '../components/Venues'
import VenueInput from '../components/VenueInput'

class VenuesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchVenues()
    }

    render() {
        return(
            <div>
                <VenueInput />
                <Venues venues={this.props.venues}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        venues: state.venues
    }
}
export default connect(mapStateToProps, {fetchVenues})(VenuesContainer)
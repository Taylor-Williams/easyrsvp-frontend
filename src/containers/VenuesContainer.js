import React from 'react'
import {connect} from 'react-redux'
import {fetchVenues} from '../actions/fetchVenues'
import Venues from '../components/Venues'
import Venue from '../components/Venue'
import VenueInput from '../components/VenueInput'
import {Route, Switch} from 'react-router-dom'

class VenuesContainer extends React.Component {

    componentDidMount() {
        this.props.fetchVenues()
    }

    render() {
        return(
            <div>
                <Switch>
                    <Route path='/venues/new' component={VenueInput} />
                    <Route path='/venues/:id' render={(routerProps) => <Venue {...routerProps} venues={this.props.venues}/> } />
                    <Route path='/venues' render={(routerProps) => <Venues {...routerProps} venues={this.props.venues}/> } />
                </Switch>
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
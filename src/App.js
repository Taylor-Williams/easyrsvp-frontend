import React from 'react'
import {connect} from 'react-redux'
import fetchVenues from './actions/fetchVenues'
import VenuesContainer from './containers/VenuesContainer'

class App extends React.Component {

  render() {
    return (
      <div className='App'> 
        <VenuesContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    venues: state.venues
  }
}

export default connect(mapStateToProps, {fetchVenues})(App);

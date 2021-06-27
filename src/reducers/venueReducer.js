export default function venueReducer(state= { venues: [] }, action) {
    switch(action.type) {
        case 'FETCH_VENUES' :
            return {venues: action.payload}
        case 'ADD_VENUE' :
            return {...state, venues: [...state.venues, action.payload]}
        case 'DELETE_VENUE' :
            let deletedVenueState = state.venues.filter((venue) => venue.id != action.payload)
            return {...state, venues: deletedVenueState}
        case 'ADD_RESERVATION' :
            {/* iterate to changed venue, make payload that venues attribute */}
            let changedVenue = state.venues.map( venue => {
                if (venue.id === action.payload.id) {
                    return action.payload
                } else {
                    return venue
                }
            })
            return {...state, venues: changedVenue}
        case 'DELETE_RESERVATION' :
            {/* iterate to changed venue, make payload that venues' attribute */}
            let deletedVenueReservation = state.venues.map( venue => {
                if (venue.id === action.payload.id) {
                    return action.payload
                } else {
                    return venue
                }
            })
            return {...state, venues: deletedVenueReservation}
        default:
            return state
    }
}
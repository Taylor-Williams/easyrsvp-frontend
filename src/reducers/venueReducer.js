export default function venueReducer(state= { venues: [] }, action) {
    switch(action.type) {
        case 'FETCH_VENUES' :
            return {venues: action.payload}
        case 'ADD_VENUE' :
            return {...state, venues: [...state.venues, action.payload]}
        case 'ADD_RESERVATION' :
            {/* iterate to changed venue, make payload that venues attribute */}
            let changedVenues = state.venues.map( venue => {
                if (venue.id === action.payload.id) {
                    return action.payload
                } else {
                    return venue
                }
            })
            return {...state, venues: changedVenues}
        default:
            return state
    }
}
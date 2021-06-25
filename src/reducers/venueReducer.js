export default function venueReducer(state= { venues: [] }, action) {
    switch(action.type) {
        case 'FETCH_VENUES' :
            return {venues: action.payload}
        case 'ADD_VENUE' :
            return {...state, venues: [...state.venues, action.payload]}
        default:
            return state
    }
}
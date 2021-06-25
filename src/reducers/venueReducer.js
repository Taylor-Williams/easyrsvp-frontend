export default function venueReducer(state= { venues: [] }, action) {
    switch(action.type) {
        case 'FETCH_VENUES' :
            return {venues: action.payload}
        default:
            return state
    }
}
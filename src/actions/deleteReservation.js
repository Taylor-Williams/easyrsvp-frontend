export const deleteReservation = (reservationId, venueId) => {

    let url = `http:localhost:3000/api/v1/venues/${venueId}/reservations/${reservationId}`

    return (dispatch) => {
        return fetch(url, {method: 'DELETE'})
        .then(res => res.json())
        .then(venue => dispatch({type: 'DELETE_RESERVATION', payload: venue}))
    }
}
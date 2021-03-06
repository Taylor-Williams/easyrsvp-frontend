export const deleteReservation = (reservationId, venueId) => {
    const url = `http://localhost:3000/api/v1/venues/${venueId}/reservations/${reservationId}`
    return (dispatch) => {
        return fetch(url, {
            method: 'DELETE',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(response => response.json())
        .then(venue => {
            if (venue.error) {
                alert(venue.error)
            } else {
                dispatch({type: 'DELETE_RESERVATION', payload: venue})
            }
        })
    }
}
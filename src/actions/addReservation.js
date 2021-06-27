export const addReservation = (data, venueId) => {
    return(dispatch) => {
        fetch(`http://localhost:3000/api/v1/reservations/${venueId}/reservations`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'credentials' : 'same-origin'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(reservation => dispatch({type: 'ADD_RESERVATION', payload: reservation}))
    }
}
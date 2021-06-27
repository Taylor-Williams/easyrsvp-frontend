export const addReservation = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/reservations', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'credentials' : 'same-origin'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(venue => dispatch({type: 'ADD_RESERVATION', payload: venue}))
    }
}
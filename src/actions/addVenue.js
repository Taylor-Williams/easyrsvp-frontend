export const addVenue = (data) => {
    return(dispatch) => {
        fetch('http://localhost:3000/api/v1/venues', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'credentials' : 'same-origin'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(res => res.json())
        .then(venue => {
            if (venue.error) {
                alert(venue.error)
            } else {
                dispatch({type: 'ADD_VENUE', payload: venue})
            }
        })
    }
}
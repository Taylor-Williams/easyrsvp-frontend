export const deleteVenue = (venueId) => {
    const url = `http://localhost:3000/api/v1/venues/${venueId}`
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
                dispatch({type: 'DELETE_VENUE', payload: venue.id})
            }
        })
    }
}
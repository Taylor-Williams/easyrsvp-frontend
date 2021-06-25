export function fetchVenues() {
    return (dispatch => {
        fetch('http://localhost:3000/api/v1/venues')
        .then(response => response.json())
        .then(data => dispatch({
            type: 'FETCH_VENUES',
            payload: data
        }))
    })
}
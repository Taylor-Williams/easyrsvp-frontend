export function fetchVenues() {
    fetch('http://localhost:3000/api/v1/venues')
    .then(response => response.json())
    .then(data => console.log(data))
}
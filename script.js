
// Base link for all endpoints
const BASE_URL = 'https://dogapi.dog/api/v2'

// facts to display
const facts = document.querySelector(".facts")

// Fetch data from API
async function change() {
    fetch(`${BASE_URL}/facts`)
    .then(Response => Response.json())
    .then(data => {
        // change text to display facts
        console.log(data.data)
        facts.textContent = data.data[0].attributes.body

    })
    .catch(err => console.log(err))
}

// Base link for all endpoints
const BASE_URL = 'https://dogapi.dog/api/v2'
const BASE_URL2 = 'https://dog.ceo/api/breeds/image/random'

// facts to display
const facts = document.querySelector(".facts")


// Fetch data from API
async function change() {
    fetch(`${BASE_URL}/facts`)
    .then(Response => Response.json())
    .then(data => {
        // change text to display facts
        console.log(data.data)
        // You need to call the response object to actually get the data
        facts.textContent = data.data[0].attributes.body;
        
        
    })
}
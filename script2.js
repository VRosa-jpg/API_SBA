const photo = document.querySelector(".card-img-top")
async function chang() {

fetch(`${BASE_URL2}`)
    .then(Response => Response.json())
    .then(data => {
        console.log(data)
        photo.src = data.message
    })
    .catch(err => console.log(err))

}
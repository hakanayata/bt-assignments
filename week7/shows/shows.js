const main = document.getElementById("main")
const search_form = document.getElementById("form")
let rendered_shows = []

// display shows on the screen
getShows();

search_form.addEventListener("input", (e) => {
    // pass filtered shows obj into renderShows function 
    const search_text = e.target.value.toLowerCase()
    console.log(search_text)

    const filtered_shows = rendered_shows.filter((show) => {
        return show.show.name.toLowerCase().includes(search_text)
    })

    renderShows(filtered_shows)
})

async function getShows() {
    try {
        const response = await fetch("./shows.json")
        if (!response.ok) { throw new Error("### response error: could not fetch data!") }
        const data = await response.json()
        // a copy of json object
        rendered_shows = data

        renderShows(data)

    } catch (error) {
        console.log("$$$ ERROR $$$", error)
    }
}

function renderShows(shows) {
    main.innerHTML = ""

    shows.forEach(show => {
        const show_card = document.createElement("div")
        show_card.setAttribute("class", "card")
        show_card.setAttribute("style", "width: 18rem;")
        show_card.innerHTML = `
        <img src=${show.image?.medium || show.show?.image?.medium || 'https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?b=1&s=170667a&w=0&k=20&c=WQu-hdK2szE7p7oiA_sC85sUfBI-Jh9yuidyvK3lcms='} class="card-img-top" alt="movie thumbnail">
        <div class="card-body">
            <h5 class="card-title">${show.show.name}</h5>
            <a href=${show.show.url} class="btn btn-primary" target="_blank">Details</a>
        </div>`

        main.appendChild(show_card)

    })

}

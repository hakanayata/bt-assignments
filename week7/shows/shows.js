async function getShows() {
    try {
        const response = await fetch("./shows.json")
        if (!response.ok) { throw new Error("### response error: could not fetch data!") }
        const data = await response.json()
        renderShows(data)

    } catch (error) {
        console.log("$$$ ERROR $$$", error)
    }
}

function renderShows(shows) {

    shows.forEach(show => {

        document.querySelector("main").innerHTML += `<div class="card" style="width: 18rem;">
        <img src=${show.image?.medium || show.show?.image?.medium || 'https://media.istockphoto.com/id/1226328537/vector/image-place-holder-with-a-gray-camera-icon.jpg?b=1&s=170667a&w=0&k=20&c=WQu-hdK2szE7p7oiA_sC85sUfBI-Jh9yuidyvK3lcms='} class="card-img-top" alt="movie thumbnail">
        <div class="card-body">
          <h5 class="card-title">${show.show.name}</h5>
          <a href=${show.show.url} class="btn btn-primary" target="_blank">Details</a>
        </div>
      </div>`

    })

}

getShows();
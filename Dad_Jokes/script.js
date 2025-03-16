const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

getNewJoke ()

jokeBtn.addEventListener('click', getNewJoke)


async function getNewJoke() {
    const config = {
        headers: {
            Accept: 'Application/json',
        },
    }

    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()

    jokeEl.innerHTML = data.joke
}




// function getNewJoke () {
//     const config = {
//         headers: {
//             Accept: 'Application/json',
//         },
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then((res) => res.json())
//         .then((data) => {
//             jokeEl.innerHTML = data.joke
//         })
// }
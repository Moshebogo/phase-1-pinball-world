// Initial fetch.
fetch("http://localhost:3000/games")
.then(resp => resp.json())
.then(data => {
    renderGames(data)
    renderFirstGame(data)
})
.then(() => createHighScore())

// All main elements in global scope.
const gameNav = document.querySelector('#gameNav')
const mainName = document.querySelector('#detail-title')
const mainImg = document.querySelector('#detail-image')
const highScore = document.querySelector('#detail-high-score')

// Render all game names.
function renderGames(data) {
    for (const game of data ) {
        const h5 = document.createElement('h5')
        h5.innerHTML = `${game.name}  (${game.manufacturer_name})`
        gameNav.appendChild(h5)
// Each game event-listener.
        h5.addEventListener('click', e => {
            mainName.innerText = game.name
            mainImg.src = game.image
            highScore.innerText = game.high_score
        })
    }
}

// Render first game
function renderFirstGame(data) {
    mainImg.src = data[0].image
    mainName.innerText = data[0].name
    highScore.innerText = data[0].high_score
}

function createHighScore () {
    const form = document.querySelector('#high-score-form')
    form.addEventListener('submit', e => {
        
        let highScoreNumber = parseInt(document.querySelector('#detail-high-score').textContent)
        const scoreInput = parseInt(document.querySelector('#score-input').value)

        document.querySelector('#detail-high-score').textContent =  highScoreNumber + scoreInput

        console.log(highScoreNumber)
        console.log(scoreInput)


        e.preventDefault()
        form.reset()
    })
}
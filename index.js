import dogsData from './data.js'
import Dog from './Dog.js'

let currentDog = new Dog(dogsData.shift())
let isWaiting = false
let dogsLiked = ""
const likedArray = []

const cardEl = document.getElementById('card')
const badgeEl = document.getElementById('badge')

document.getElementById("liked").addEventListener('click', () => liked(currentDog))
document.getElementById("rejected").addEventListener('click', () => rejected(currentDog))

render()

function render() {
    cardEl.innerHTML = currentDog.getDogHtml()
    badgeEl.innerHTML = ""
}

function getNewDog() {
    if(dogsData.length > 0){
        currentDog = new Dog(dogsData.shift())
        render()
    } else {
        endDogs()
    }
}

function liked(dog) {
    if (!isWaiting) {
        dog.setMatchStatus(true)
        
        dogsLiked += dog.getLikedDogsHtml()
        
        likedArray.push(dog)
        badgeEl.innerHTML = `
            <div class="badges">
                <img class="badge-action" src="/images/badge-like.png"/>
            </div>`
        
        isWaiting = true
        
        setTimeout(() => {
            getNewDog()
            render()
            isWaiting = false
        }, 1500)
    } 
}

function rejected(dog) {
    if (!isWaiting) {

        dog.hasBeenSwiped = true
        badgeEl.innerHTML = `
            <div class="badges">
                <img class="badge-action" src="/images/badge-nope.png"/>
            </div>`
        
        isWaiting = true
        
        setTimeout(() => {
            getNewDog()
            render()
            isWaiting = false
        }, 1500)
    }
}


function endDogs() {
    
    isWaiting = true
    
    const endMessage = dogsLiked ?
        "You liked this cuties 🐶" :
        "You din't liked any dogs! 😔"

        document.body.innerHTML = `
            <div class="end-dogs">
                <div class="end-logo">
                    <a href="/index.html">
                        <img class="logo-small"src="/images/logo.png">
                    </a>
                    <h2 class="logo-title">Tindog</h2> 
                </div>
                <h3 class="text-end-dogs">${endMessage}</h3>
                <div class="dogs-liked">
                    ${dogsLiked}
                </div>
            </div>
            `
}
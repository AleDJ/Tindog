class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    setMatchStatus(bool) {
        this.hasBeenLiked = bool
        this.hasBeenSwiped = false
    }

    getDogHtml(){
        const { name, avatar, age, bio } = this
        return `
        <div class="dog-card">
            <div class="dog-info">
                <h4 class="name"> ${name}, ${age} </h4>
                <div class="bio"> ${bio} </div>
            </div>
            <img class="dog-img" src="${avatar}" />
        </div>`
    }

    getLikedDogsHtml(){
        const { name, avatar, age, bio } = this
        return `
        <div class="liked-card">
        <img class="liked-img" src="${avatar}" />
            <div class="liked-info">
                <h4 class="liked-name"> ${name}, ${age} </h4>
                <div class="liked-bio"> ${bio} </div>
            </div>
        </div>`
    }
}

export default Dog
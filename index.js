let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0


function increaseScoreHome(score) {
    homeScore += score
    console.log("+" + score)
    console.log(homeScore)
    homeScoreEl.textContent = homeScore
}

function increaseScoreGuest(score) {
    guestScore += score
    console.log("+" + score)
    console.log(guestScore)
    guestScoreEl.textContent = guestScore
}
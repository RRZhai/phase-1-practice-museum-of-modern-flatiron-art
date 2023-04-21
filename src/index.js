// global Viable
const exhibitTitle = document.getElementById('exhibit-title')
const exhibitImg = document.getElementById('exhibit-image')
const exhibitDes = document.getElementById('exhibit-description')
const exhibitComment = document.getElementById('comments-section')
const commentForm = document.getElementById('comment-form')
const buyBtn = document.getElementById('buy-tickets-button')

// // add exhibit details to the page
const addDetails = (exhibitData) => {
    exhibitTitle.textContent = `${exhibitData.title} - ${exhibitData['artist_name']}`
    exhibitImg.src = exhibitData.image
    exhibitDes.textContent = exhibitData.description
    const commentArr = exhibitData['comments']
    commentArr.forEach(commentList => addCommentList(commentList))
}

const addCommentList = (comment) => {
    const pComment = document.createElement('p')
    exhibitComment.appendChild(pComment)
    pComment.textContent = comment
}

// #2 submit the form
const submitForm = (e) => {
    e.preventDefault()
    const pComment = document.createElement('p')
    exhibitComment.appendChild(pComment)
    pComment.textContent = commentForm['comment-input'].value
    commentForm.reset()
}
commentForm.addEventListener('submit', submitForm)

// #3 add click event listener to buy button, number of ticket increase
const addTicket = () => {
    const ticketBought = document.getElementById('tickets-bought')
    let count = ticketBought.textContent.replace(' Tickets Bought', '')
    ticketBought.textContent = Number(count) + 1 + ' Tickets Bought'
}
buyBtn.addEventListener('click', addTicket)

// #1 fetch the data
const fetchData = () => {
    fetch('http://localhost:3000/current-exhibits')
    .then(resp => resp.json())
    // .then(exhibit => {debugger})
    .then(exhibit => exhibit.forEach(exhibitData => {
        addDetails(exhibitData)
    }))
}
fetchData()
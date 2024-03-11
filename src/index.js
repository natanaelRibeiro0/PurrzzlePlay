// when all these elements have turned true, a alert will be show in the browser page
const puzzleState = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false] // --> Variavel que auxilia no reconhecimento de final do puzzle

const puzzleArea = document.querySelector(".puzzle-area"); // --> square that fit in the pieces
const piecesArea = document.querySelector("aside") // --> where the pieces start
const referenceImage = document.querySelector(".resolution") // --> image reference off the resolution of the puzzle

// function that create the pieces
// ***createPieces***
function createPieces() {
  for (let index = 0; index < 15; index++) {
    
    // make a new piece
    const piece = document.createElement("img")
    piece.src = `./img/puzzlePiecesImage/puzzleImg${index + 1}.png`
    piece.alt = "piece-image"
    piece.className = `piece` 
    piece.draggable = "true"
    piece.dataset.position = index 

    // put the piece in a area (based in the size of the window)
    placePieces(innerWidth, piece)

    // add the piece event to drag
    piece.addEventListener("dragstart", (event) => {
      event.target.classList.add("is-dragging") 
    })
  }
}

  // event that handle with a try to fit a piece
  //***fit pieces***
  puzzleArea.addEventListener("drop", async (event) => {
    event.preventDefault(event)

    const element = event.target // Event
    const pieceBeingDraged = document.querySelector(".is-dragging")// Piece that was used to fit
  
      // if true: will add the piece and handle with remove of classes
      // if false: will remove "is-dragging" class from the piece

    if (pieceBeingDraged.dataset.position === element.dataset.position) {
      event.target.appendChild(pieceBeingDraged) 
  
      pieceBeingDraged.style.top = "0px"  
      pieceBeingDraged.style.right = "0px"
  
      pieceBeingDraged.classList.remove("is-dragging") 
      pieceBeingDraged.classList.remove("piece")       
      pieceBeingDraged.classList.add("piece-positioned") 
      
      pieceBeingDraged.draggable = false

      // will check if the puzzle have been resolved
      puzzleResolveVerify(pieceBeingDraged.dataset.position)
    }
    pieceBeingDraged.classList.remove("is-dragging")   
  })

  // event that handle with the drop of the piece inside the piece square.
    // ***push pieces***
    piecesArea.addEventListener("drop", (event) =>{
    event.preventDefault()
    const pieceBeingDraged = document.querySelector(".is-dragging")

    const height = event.clientY // height where the piece was dropped
    const width = event.clientX //  width where the piece was dropped
    
    pieceBeingDraged.style.top = `${height}px` // will change the position of the piece
    pieceBeingDraged.style.left = `${width}px` // will change the position of the piece
    
    pieceBeingDraged.classList.remove("is-dragging")
  })

// event that will handle with the double click in the resolution image
// ***incress reference image*** 
referenceImage.addEventListener("dblclick", () => {  
  if(referenceImage.classList.contains("displayAnimation")){
    referenceImage.classList.remove("displayAnimation")
    referenceImage.classList.add("recallAnimation")
  } else {
    referenceImage.classList.remove("recallAnimation")
    referenceImage.classList.add("displayAnimation")
  }
})

// generate a random number based in two number in the param (used to generate a random position to the pieces)
// ***generateNumber***
function generateNumber(a, b) {
  const number = Math.floor(Math.random() * (b - a + 1)) + a
  return (`${number}px`)
}

// event that change the array "puzzleState" and, if all true, return a alert and finish the game
// ***puzzleResolveVerify***
function puzzleResolveVerify(positionData){
  puzzleState[positionData] = true
  if((puzzleState.includes(false))){
    alert("Puzzle resoleve. Congratulations!! :D")
    alert("Restart the page to play the game")
  }
}

// will check the size of the screen and put the pieces in the right area (extremely important because of the responsivity)
// ***placePieces***
function placePieces(pageWidht, piece){
  //812px (Tablet) position
  if(pageWidht >= 812 && pageWidht < 1024){
    piece.style.top = generateNumber(700, 790) 
    piece.style.right = generateNumber(50, 690) 
    // Adiciona as imagems no seu espaço
    piecesArea.append(piece)
  }

  //1037px (Laptop) position
  if(pageWidht >= 1024 && pageWidht < 1920){
    piece.style.top = generateNumber(690, 750) 
    piece.style.right = generateNumber(50, 850) 
    // Adiciona as imagems no seu espaço
    piecesArea.append(piece)
  }

  //1920px (Monitor)position
  if(pageWidht >= 1920){
    piece.style.top = generateNumber(720, 80) 
    piece.style.right = generateNumber(350, 50) 
    // Adiciona as imagems no seu espaço
    piecesArea.append(piece)
  }
}

// that event's is extremely important, because the event need to alternate from the default event
// ***dependence***
function dependence() {
  puzzleArea.addEventListener("dragenter", (event) => {
      event.preventDefault()
    })
  
    puzzleArea.addEventListener("dragover", (event) => {
      event.preventDefault()
    })
  
    piecesArea.addEventListener("dragenter", (event) => {
      event.preventDefault()
    })
    piecesArea.addEventListener("dragover", (event) => {
      event.preventDefault()
    })
}

// will call functions
dependence()
createPieces()
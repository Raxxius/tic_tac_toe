
const checkWin = (gameBoard, a, b, c) => {
  if ((gameBoard[a].fill !== '') && (gameBoard[b].fill !== '') && (gameBoard[c].fill !== '')) {
    if ((gameBoard[a].fill === gameBoard[b].fill) && (gameBoard[a].fill === gameBoard[c].fill)) {
      return true
    }
  }
  else return false
}

export function checkWinner(gameBoard, player) {
  let gamewon = false
  /* check verticles */
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 3, 6)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 1, 4, 7)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 2, 5, 8)
  }
  /* check horizontals */
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 1, 2)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 3, 4, 5)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 6, 7, 8)
  }
  /* check diagonals */
    if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 0, 4, 8)
  }
  if (gamewon !== true) {
    gamewon = checkWin(gameBoard, 2, 4, 6)
  }
  if (gamewon === true) {
    return player
  }
  if (gameBoard.some(e => e.fill === '')) {
    return ''
  }
  return "Tie"
}

export function handleReset(setGameState, setGameBoard, setGameWinner) {
      setGameState("Next player: X")
      setGameBoard([{id:0, fill:""}, {id:1, fill:""}, {id:2, fill:""}, {id:3, fill:""}, {id:4, fill:""}, {id:5, fill:""}, {id:6, fill:""}, {id:7, fill:""}, {id:8, fill:""}])
      setGameWinner("");
}

export function processGameState(id, gameState, setGameState, gameBoard, setGameBoard, gameWinner, setGameWinner) {
        if (gameWinner !== '') {
        return
      }

      if (gameBoard[id].fill === '') {
        
        const playerTurn = () => {
          if (gameState === "Next player: X") {
              return "Next player: O"
            }
          else {
            return "Next player: X"
          }
        }

        const setPlayer = () => {
          if (gameState === "Next player: X") {
              return "X"
            }
          else {
              return "O"
          }
      }

    const turn = playerTurn()
    const player = setPlayer()
    setGameState(turn)

    const newGameBoard = gameBoard.map(board => {
      if (board.id === id) {
        if (board.fill === "") {
          return {...board, fill: player}
        }
      }
      return board
    })

    setGameBoard(newGameBoard)
    const winner = checkWinner(newGameBoard, player)
    setGameWinner(winner)
  }

}

/*
const playerColor = {
	white: 0,
	black: 1
}
const pieceColor = {
	brown: 0,
	green: 1,
	red: 2,
	yellow: 3,
	pink: 4,
	purple: 5,
	blue: 6,
	orange: 7
}
*/
let ArrayToCal = new Array(64)
let nextMover = 0
function piecesUpdate(){
	let tempPieces = document.getElementsByClassName("piece")
	for(let i = 0; i<64; i++){
		let tempP = Object.keys(playerColor)
		let tempT = Object.keys(tileColor)
		tempPieces[i].style = "width: 6vh;height: 6vh;border-radius: 50%;border: 2vh solid " +tempP[parseInt(gameBoard[i].empty/8)]+ ";background-color: " + tempT[gameBoard[i].empty%8] +";margin-top: 1vh;margin-left: 1vh;box-shadow: 0.5vh 0.5vh 1vh black;"
		if(gameBoard[i].empty == 16){
			tempPieces[i].style = ""
		}
		ArrayToCal[i]=0
	}
	for(let i = 0; i<8; i++){
		if(gameBoard[i].empty>7 && gameBoard[i].empty<16){
			alert("Black Wins!")
			printBoard()
		}
	}
	for(let i = 63; i>55; i--){
		if(gameBoard[i].empty>=0 && gameBoard[i].empty<8){
			alert("White Wins!")
			printBoard()
		}
	}
}

function wherePieceCanMove(num, player){
	let tempPieces = document.getElementsByClassName("piece")
	if(player == 0){
		for(let i=num+8; i<64;){
			if(gameBoard[i].empty != 16){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i += 8
		}
		for(let i=num+7; i<64;){
			if(gameBoard[i].empty != 16){
				break
			}
			if(parseInt((i-7)/8) == parseInt(i/8)){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i += 7
		}
		for(let i = num+9; i<64;){
			if(gameBoard[i].empty != 16){
				break
			}
			if(parseInt((i-9)/8)+2 == parseInt(i/8)){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i += 9
		}
	}
	if(player == 1){
		for(let i=num-8; i>=0;){
			if(gameBoard[i].empty != 16){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i -= 8
		}
		for(let i=num-9; i>=0;){
			if(gameBoard[i].empty != 16){
				break
			}
			if(parseInt((i+9)/8) == parseInt(i/8)+2){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i -=9

		}
		for(let i = num-7; i>=0;){
			if(gameBoard[i].empty != 16){
				break
			}
			if(parseInt((i+7)/8) == parseInt(i/8)){
				break
			}
			tempPieces[i].style = "width: 8vh; height: 8vh; border-radius: 50%; border: 1vh solid grey; margin-top: 1vh; margin-left: 1vh;"
			ArrayToCal[i]=2
			i -= 7
		}
	}
}

function pieceMove(num) {
	piecesUpdate()
	let infoOfPlayer = parseInt(gameBoard[num].empty/8)	//0: white piece 1: black piece 2: empty space
	if(infoOfPlayer == 2 || infoOfPlayer != turn){
		return	// it means this space is empty
	}
	let infoOfPieceColor = gameBoard[num].empty%8
	ArrayToCal[num] = 1 
	wherePieceCanMove(num, infoOfPlayer)
}

function wannaMove(destination){
	let tempPieces = document.getElementsByClassName("piece")
	if(ArrayToCal[destination]==2){
		let temp = ArrayToCal.indexOf(1)
		gameBoard[destination].empty = gameBoard[temp].empty
		gameBoard[temp].empty = 16
		piecesUpdate()
		turn = (turn+1)%2
		nextMover = (turn*8)+gameBoard[destination].colorOfTile()
		let tempor = 0
		for(let i = 0; i<64; i++){
			if(gameBoard[i].empty == nextMover){
				tempor = i
				console.log(tempor)
			}
		}
		pieceMove(tempor)
	}
	else{
		alert("try again!")
	}
} 


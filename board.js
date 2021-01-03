let turn = 0
const tileColor = {
	brown: 0,
	green: 1,
	red: 2,
	yellow: 3,
	pink: 4,
	purple: 5,
	blue: 6,
	orange: 7
}
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
class tiles{
	constructor(order){
	    this.xCord = order%8
		this.yCord = parseInt(order/8)
        this.empty = 16 //0~15 = pieces, 16 = empty
    }
	colorOfTile(){
		if((7 * this.yCord + this.xCord) % 8 == 0){
            return tileColor.brown
        }
        if((5 * this.yCord + this.xCord) % 8 == 1){
           return tileColor.green
        }
        if((3 * this.yCord + this.xCord) % 8 == 2){
            return tileColor.red
        }
        if((1 * this.yCord + this.xCord) % 8 == 3){
            return tileColor.yellow
        }
        if((7 * this.yCord + this.xCord) % 8 == 4){
            return tileColor.pink
        }
        if((5 * this.yCord + this.xCord) % 8 == 5){
            return tileColor.purple
        }
        if((3 * this.yCord + this.xCord) % 8 == 6){
            return tileColor.blue
        }
        if((1 * this.yCord + this.xCord) % 8 == 7){
			return tileColor.orange
		}
	}
}

let gameBoard = new Array(64)


function printBoard() {	//set the board to the game starts
	let tempTiles = document.getElementsByClassName("tile")
	let tempPieces = document.getElementsByClassName("piece")
	for(let i = 0; i<64; i++){
		for(let i =0; i<64; i++){
			gameBoard[i] = new tiles(i)
			if(i>=0 && i<8){
				gameBoard[i].empty = i
			}
			if(i<64 && i>=56){
				gameBoard[i].empty = (63-i)+8
			}
		}
		let tempT = Object.keys(tileColor)
		let tempP = Object.keys(playerColor)
		tempTiles[i].style.background = tempT[gameBoard[i].colorOfTile()]
		if(gameBoard[i].empty == 16){
			continue
		}
		tempPieces[i].style = "width: 6vh;height: 6vh;border-radius: 50%;border: 2vh solid " +tempP[parseInt(gameBoard[i].empty/8)]+ ";background-color: " + tempT[gameBoard[i].empty%8] +";margin-top: 1vh;margin-left: 1vh;box-shadow: 0.5vh 0.5vh 1vh black;"
    }
}

/* tile이 가져야하는 정보
1. 색깔 <- 칸 자신의 색
2. 위치 <- 칸 자신의 위치
3. 해당 칸 위에 말의 존재 여부 
*/
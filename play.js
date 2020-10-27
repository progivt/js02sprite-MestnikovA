// холст для рисования - игровое поле
let board = document.getElementById('cnv').getContext('2d');

// фоновая клетка 32×32 - трава
let bg = document.getElementById('grass');
let tree = document.getElementById('treewood');
let treeleafs = document.getElementById('treeleafs');
// персонаж, спрайт 32×32 – привидение из пакмана
let char = document.getElementById('ghost');

// координаты персонажа, столбец и строка, считая с нуля
let ghostCol = 1, ghostRow = 0;

// абзац с сообщением 
let msg = document.getElementById('msg');
var ghostPosX = 0;
var ghostPosY = 0;

document.onkeypress = function(event){
	//Работает только на английской раскладке :(
	moveGhost = event.keyCode;
	//left
	if(moveGhost==97){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosX-1>=0 && ((ghostPosX-1!=5 || ghostPosY!=5)&&(ghostPosX-1!=6 || ghostPosY!=4)&&(ghostPosX-1!=6 || ghostPosY!=3))){ghostPosX = ghostPosX - 1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
		
	}
	//right
	if(moveGhost==100){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosX+1<=15 && ((ghostPosX+1!=5 || ghostPosY!=5)&&(ghostPosX+1!=4 || ghostPosY!=4)&&(ghostPosX+1!=4 || ghostPosY!=3))){ghostPosX = ghostPosX + 1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	//down
	if(moveGhost==115){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosY+1<=9 && ((ghostPosX!=4 || ghostPosY+1!=3)&&(ghostPosX!=5 || ghostPosY+1!=3)&&(ghostPosX!=6 || ghostPosY+1!=3))){ghostPosY = ghostPosY +1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	//up
	if(moveGhost==119){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosY-1>=0 && ((ghostPosX!=5 || ghostPosY-1!=5)&&(ghostPosX!=4 || ghostPosY-1!=4)&&(ghostPosX!=6 || ghostPosY-1!=4))){ghostPosY = ghostPosY -1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
}
// после загрузки картинок рисуем начальное состояние поля
function init(){
	for (let col = 0; col < 16; col++){
		for(var i = 0; i < 17; i++){
			board.drawImage(bg, col*32, i*32);
		}
		if (col === ghostCol) board.drawImage(char, 0*32, 0);
		board.drawImage(tree, 5*32, 5*32);
		board.drawImage(tree, 5*32, 4*32);
		board.drawImage(treeleafs, 4*32, 4*32);
		board.drawImage(treeleafs, 4*32, 3*32);
		board.drawImage(treeleafs, 5*32, 3*32);
		board.drawImage(treeleafs, 6*32, 3*32);
		board.drawImage(treeleafs, 6*32, 4*32);
	}	
};

function moveOnce(event){
	//up
	if(event.clientX<1000 && event.clientX>500 && event.clientY<90){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosY-1>=0 && ((ghostPosX!=5 || ghostPosY-1!=5)&&(ghostPosX!=4 || ghostPosY-1!=4)&&(ghostPosX!=6 || ghostPosY-1!=4))){ghostPosY = ghostPosY -1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	
	//down
	if(event.clientX<1000 && event.clientX>500 && event.clientY>400){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosY+1<=9 && ((ghostPosX!=4 || ghostPosY+1!=3)&&(ghostPosX!=5 || ghostPosY+1!=3)&&(ghostPosX!=6 || ghostPosY+1!=3))){ghostPosY = ghostPosY +1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	//left
	if(event.clientX<500 && event.clientY<400 && event.clientY>90){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosX-1>=0 && ((ghostPosX-1!=5 || ghostPosY!=5)&&(ghostPosX-1!=6 || ghostPosY!=4)&&(ghostPosX-1!=6 || ghostPosY!=3))){ghostPosX = ghostPosX - 1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	//right
	if(event.clientX>1000 && event.clientY<400 && event.clientY>90){
		board.drawImage(bg, ghostPosX*32, ghostPosY*32);
		if(ghostPosX+1<=15 && ((ghostPosX+1!=5 || ghostPosY!=5)&&(ghostPosX+1!=4 || ghostPosY!=4)&&(ghostPosX+1!=4 || ghostPosY!=3))){ghostPosX = ghostPosX + 1;}
		board.drawImage(char, ghostPosX*32, ghostPosY*32);
	}
	
	msg.value = "Клик в "+ event.clientX + ", "+ event.clientY +"!";
}


	
window.onload = init;
document.onmouseup = moveOnce;

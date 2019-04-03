(() => {
console.log("javascript linked up");



let item = document.querySelectorAll('.draggable')

let dzBunny = document.getElementById('dz1');
let dzFox = document.getElementById('dz2');
let dzOwl = document.getElementById('dz3');
let dzSquirrel = document.getElementById('dz4');

let dragZone = document.querySelector('.dragZone');
let resetZone = document.querySelector('.resetZone');


let bunny = document.getElementById('bunny');
let fox = document.getElementById('fox');
let owl = document.getElementById('owl');
let squirrel = document.getElementById('squirrel');

let bunnyAud = new Audio('audio/rabit.mp3');
let owlAud = new Audio('audio/owl.wav');
let foxAud = new Audio('audio/fox.aiff');
let squirrelAud = new Audio('audio/squirrel.wav');
let ambient = new Audio('audio/Jungle_Atmosphere_Afternoon.mp3');



////////////////////////////////AUDIO FUNCTION///////////////////// NEEDS FIX
	
function playAmbient(){
	ambient.currentTime = 0;
	ambient.loop = true;
	ambient.play();
};


function playBunny(){
		bunnyAud.currentTime = 0;
		bunnyAud.loop = true;
		bunnyAud.play();
	};

function playFox(){
		foxAud.currentTime = 0;
		foxAud.loop = true;
		foxAud.play();
	};

function playOwl(){
		owlAud.currentTime = 0;
		owlAud.loop = true;
		owlAud.play();
	};

function playSquirrel(){
		squirrelAud.currentTime = 0;
		squirrelAud.loop = true;
		squirrelAud.play();
	};

/////////////////////////////////DRAG//////////////////////////////// GOOD
function drag() {
	dragZone.querySelectorAll('img').forEach(img =>{
		img.addEventListener('dragstart', function(e){
			console.log('dragging...');
			e.dataTransfer.setData('text/plain', this.id);
		});
	});
}

/////////////////////////////RESET BOARD//////////////////////////// GOOD
//function resetBoard() {
//	bunny.classList.add('invisible');
//	fox.classList.add('invisible');
//	owl.classList.add('invisible');
//	squirrel.classList.add('invisible');
//}

//resetZone.addEventListener('click', resetBoard);


///////Console Log Drop//////
dropZone.addEventListener('dragover', function(e){
	e.preventDefault();
	console.log('drop?')
});
/////////////////////////////////DROP 1/////////////////////////////////
dz1.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped');
		bunny.classList.remove('invisible');
		playBunny();

	//ADD PLAY AUDIO FUNCTION
});

/////////////////////////////////DROP 2/////////////////////////////////
dz2.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped');
		owl.classList.remove('invisible')
		playOwl();

	//ADD PLAY AUDIO FUNCTION
});

/////////////////////////////////DROP 3/////////////////////////////////
dz3.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped');
		fox.classList.remove('invisible')
		playFox();

	//ADD PLAY AUDIO FUNCTION
});

/////////////////////////////////DROP 4/////////////////////////////////
dz4.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped');
		squirrel.classList.remove('invisible')
		playSquirrel();

	//ADD PLAY AUDIO FUNCTION
});

window.onload.playAmbient();

})();
(() => {
console.log("javascript linked up");



let item = document.querySelectorAll('.draggable')

let dropZone = document.querySelector('.dropZone');
let dragZone = document.querySelector('.dragZone');
let resetZone = document.querySelector('.resetZone');


let bunny = document.getElementById('bunny')
let fox = document.getElementById('fox')
let owl = document.getElementById('owl')
let squirrel = document.getElementById('squirrel')



////////////////////////////////AUDIO FUNCTION///////////////////// NEEDS FIX
//function playAudio(e){
//		let audio = document.querySelector(`audio[data-key='${e.keyCode}']`);
//
//		if (!audio) { return; }
//
//		audio.currentTime = 0;
//		audio.loop = true;
//		audio.play();
//	}

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
function resetBoard() {
	bunny.classList.remove('visible');
	fox.classList.remove('visible');
	owl.classList.remove('visible');
	squirrel.classList.remove('visible');
}

resetZone.addEventListener('click', resetBoard);





/////////////////////////////////DROP///////////////////////////////// NEEDS FIX
dropZone.addEventListener('dragover', function(e){
	e.preventDefault();
	console.log('drop?')
});

dropZone.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped');
		this.classList.add('visible')
		//bunny.classList.toggle('visible');
		//fox.classList.toggle('visible');
		//owl.classList.toggle('visible');
		//squirrel.classList.toggle('visible');
	//ADD PLAY AUDIO FUNCTION
});


})();
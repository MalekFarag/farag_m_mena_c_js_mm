(() => {
console.log("javascript linked up");

const item = document.querySelectorAll('.draggable')

let dropZone = document.querySelector('.dropZone');
let dragZone = document.querySelector('.dragZone');
let resetZone = document.querySelector('.resetZone');



/////////////////////////////////DRAG////////////////////////////////
function drag() {
	dragZone.querySelectorAll('img').forEach(img =>{
		img.addEventListener('dragstart', function(e){
			console.log('dragging...');
			e.dataTransfer.setData('text/plain', this.id);
		});
	});
}

/////////////////////////////RESET BOARD////////////////////////////
function resetBoard() {
	dropZone.removeAllFiles();
}

resetZone.addEventListener('click', resetBoard);


/////////////////////////////////DROP/////////////////////////////////
dropZone.addEventListener('dragover', function(e){
	e.preventDefault();
	console.log('drop?')
});

dropZone.addEventListener('drop', function(e){
	e.preventDefault();
	console.log('dropped')
	item.audio.play();// *********check here for errors

});


})();
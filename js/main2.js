(() => {
console.log('JS Linked');
			//Drag Zone Animals
const	dragZone	 = document.getElementById('dragDiv'),

		dragBun		 = document.getElementById('dragBun'),
		dragOwl		 = document.getElementById('dragOwl'),
		dragFox 	 = document.getElementById('dragFox'),
		dragSqui 	 = document.getElementById('dragSqui'),

			//Drop Zone Animals
		bunny		 = document.getElementById('bunny'),
		owl 		 = document.getElementById('owl'),
		fox 		 = document.getElementById('fox'),
		squirrel 	 = document.getElementById('squirrel'),

			//Other Zones
		dropZone 	 = document.getElementById('dropBorder'),
		resetZone 	 = document.getElementById('resetZone'),

		springOp 	 = document.getElementById('spring'),
		fallOp 		 = document.getElementById('fall'),
		winterOp 	 = document.getElementById('winter'),
		summerOp 	 = document.getElementById('summer'),

			//Audio Tracks
		bunnyAud 	 = new Audio('audio/rabit.mp3'),
		owlAud		 = new Audio('audio/owl.wav'),
		foxAud		 = new Audio('audio/fox.aiff'),
		squirrelAud  = new Audio('audio/squirrel.wav'),
		ambient		 = new Audio('audio/Jungle_Atmosphere_Afternoon.mp3');


	//Drag & Drop Functions
		//Ondrag Events
		function lightOn() {
			console.log('dragging...');
			if(target.id == 'dragBun'){
				bunny.classList.add('active');
			};

			if(this.id == 'dragOwl'){
				owl.classList.add('active');
			};

			if(this.id == 'dragFox'){
				fox.classList.add('active');
			};

			if(this.id == 'dragSqui'){
				squirrel.classList.add('active');
			};

			console.log('drop zone active');

			dragZone.querySelectorAll('img').forEach(img=>{
			img.addEventListener('dragend', lightOff);
		});

			};

		function lightOff(){
			bunny.classList.remove('active');
			owl.classList.remove('active');
			fox.classList.remove('active');
			squirrel.classList.remove('active');

			console.log('drop zone no longer active')
		};

		//Drop Events
		function playAnimal(){
			console.log('dropped');
			if(this.id == 'bunny'){
				bunny.classList.add('on');
				playBunny();
			};

			if(this.id == 'owl'){
				owl.classList.add('on');
				playOwl();
			};

			if(this.id == 'fox'){
				fox.classList.add('on');
				playFox();
			};

			if(this.id == 'squirrel'){
				squirrel.classList.add('on');
				playSquirrel();
			};
		};

	// Audio functions
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
		

		

	dragZone.querySelectorAll('img').forEach(img=>{
		img.addEventListener('dragstart', lightOn);
	});

	dropZone.addEventListener('drop', playAnimal);
})();			
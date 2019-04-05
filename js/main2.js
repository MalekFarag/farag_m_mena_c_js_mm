(() => {
console.log('JS Linked');
			//Drag Zone Animals
const	dragZone	 = document.getElementById('dragDiv'),

		dragBun		 = document.getElementById('dragBun'),
		dragOwl		 = document.getElementById('dragOwl'),
		dragFox 	 = document.getElementById('dragFox'),
		dragSqui 	 = document.getElementById('dragSqui'),

			//Animals
		bunny		 = document.getElementById('bunny'),
		owl 		 = document.getElementById('owl'),
		fox 		 = document.getElementById('fox'),
		squirrel 	 = document.getElementById('squirrel'),

			//Drop Zone Animals
		dzB			 = document.getElementById('dz1'),
		dzO			 = document.getElementById('dz2'),
		dzF			 = document.getElementById('dz3'),
		dzS			 = document.getElementById('dz4'),

			//Other Zones
		dropZone 	 = document.getElementById('dropZone'),
		resetZone 	 = document.getElementById('resetZone'),

		springOp 	 = document.getElementById('spring'),
		fallOp 		 = document.getElementById('fall'),
		winterOp 	 = document.getElementById('winter'),
		summerOp 	 = document.getElementById('summer'),

			//Audio Tracks
		// bunnyAud 	 = new Audio('audio/rabit.mp3'),
		// owlAud		 = new Audio('audio/owl.wav'),
		// foxAud		 = new Audio('audio/fox.aiff'),
		// squirrelAud  = new Audio('audio/squirrel.wav'),
		ambient		 = new Audio('audio/Jungle_Atmosphere_Afternoon.mp3');

		


	// Drag & Drop Functions
		// Ondrag Events
		function lightOn(e) {
			console.log('dragging...');
			if(this.id == 'dragBun'){
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

			e.dataTransfer.setData('text/plain', this.id);
			});
		};

		function lightOff(){
			bunny.classList.remove('active');
			owl.classList.remove('active');
			fox.classList.remove('active');
			squirrel.classList.remove('active');

			console.log('drop zone no longer active');
		};

		// Drop Functions
			// Dragover
				
				dropZone.addEventListener('dragover', function(e) {
  					e.preventDefault();
  					console.log('drop?');
				});
			
			//Drop
					dropZone.addEventListener('drop', function(e) {
					let animals = e.dataTransfer.getData("text/plain");
						e.preventDefault();

						if (bunny.classList.contains("active")) {
							bunny.classList.remove("invisible");
							dragBun.classList.add("off");
						}
						 if (owl.classList.contains("active")) {
							owl.classList.remove("invisible");
							dragOwl.classList.add("off");
						}
						if (fox.classList.contains("active")) {
							fox.classList.remove("invisible");
							dragFox.classList.add("off");
						}
						if (squirrel.classList.contains("active")) {
							squirrel.classList.remove("invisible");
							dragSqui.classList.add("off");
						}

						console.log(`${animals} was dropped`);
						let animalSound = document.createElement("audio");
						animalSound.src = `audio/${animals}.wav`;

						animalSound.play();

					animalSound.addEventListener('ended', function() {
    					this.currentTime = 0;
    					this.play();
    		});
					});

	// Audio functions
		function playAmbient(){
			ambient.currentTime = 0;
			ambient.loop = true;
			ambient.play();
			console.log('ambient audio playing');
		};


		function stopAudio(e){
		};

		
	dragZone.querySelectorAll('img').forEach(img=>{
		img.addEventListener('dragstart', lightOn);
	});

	// Background Change	
		function springChange(){
			dropZone.style.backgroundImage = 'url(images/forest_spring.png)';
		};

		function fallChange(){
			dropZone.style.backgroundImage = 'url(images/forest_fall.png)';
		};

		function winterChange(){
			dropZone.style.backgroundImage = 'url(images/forest_winter.png)';
		};

		function summerChange(){
			dropZone.style.backgroundImage = 'url(images/forest_summer.png)';
		};


			springOp.addEventListener('click', springChange);
			fallOp.addEventListener('click', fallChange);
			winterOp.addEventListener('click', winterChange);
			summerOp.addEventListener('click', summerChange);

	// Reset Button
		function reset(){
			springChange();
			stopAudio();

			console.log('all audio stopped');

			bunny.classList.remove('on');
			owl.classList.remove('on');
			fox.classList.remove('on');
			squirrel.classList.remove('on');
			console.log('all animals off');
		};

		resetZone.addEventListener('click', reset);
	
})();			
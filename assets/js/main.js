"use strict";

// ===================================================
//      	 JS-Vertiefung – BOM Stray Cat
// ===================================================

console.log("%c JS-Vertiefung – BOM Stray Cat", "color: tomato");

// Aufgabenstellung:

// Schreibe drei Funktionen, die die Katze steuern, mit den Namen walk, pause, turn.
// Der HTML und CSS Code befindet sich im Kommentar und hier findest du die Bilder.

// Nutzen kannst Du:
// setInterval()
// clearInterval()
// window.innerWidth 
// Boolean true/false


let pos = 0;
let rt = 2;
let motor;
const cat = document.querySelector("#cat");

const animation = () => {
	cat.style.left = `${pos}px`;
	pos += rt;

	const windowWidth = window.innerWidth;

	if (pos >= windowWidth - cat.clientWidth) {
		cat.style.transform = "scaleX(-1)";
		rt = -2;
	}

	if (pos <= 0) {
		cat.style.transform = "scaleX(1)";
		rt = 2;
	}
};

const catWalk = () => {
	pause();
	motor = setInterval(animation, 20);
};

const pause = () => {
	clearInterval(motor);
};

const turn = () => {
	const currentScaleX = cat.style.transform;

	if (currentScaleX === "" || currentScaleX === "scaleX(1)") {
		cat.style.transform = "scaleX(-1)";
		rt = -Math.abs(rt); // Stelle sicher, dass die Katze vorwärts läuft
	} else {
		cat.style.transform = "scaleX(1)";
		rt = Math.abs(rt); // Stelle sicher, dass die Katze vorwärts läuft
	}
};

const catSpeed = () => {
	pause();
	motor = setInterval(animation);
};

// Füge ein Event-Listener für die Veränderung der Fensterbreite hinzu
window.addEventListener("resize", () => {
	// Setze die Position auf den Anfang, wenn das Fenster neu skaliert wird
	pos = 0;
});

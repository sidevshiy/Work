var tabs = document.querySelectorAll('.main-btn');
var tabContent = document.querySelectorAll('.wrapper');
var noteTab = document.querySelectorAll('.note');
var leftStick = document.querySelectorAll('.left');
var rightStick = document.querySelectorAll('.right');


function showContent (a) {
	for(var i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = 'none';
	}
	tabContent[a].style.display = 'block';
}

function makeActive (a) {
	for(var i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove('activeted');
		tabs[i].style.zIndex = '0';
	}
	tabs[a].classList.add('activeted');
	tabs[a].style.zIndex = '10';
}

function rotate (a) {
	for(var i = 0; i < leftStick.length; i++) {
		leftStick[i].style.transform = "rotate(-45deg)";
		rightStick[i].style.transform = "rotate(45deg)";
		leftStick[i].style.background = "#8288a2";
		rightStick[i].style.background = "#8288a2";
	}
	rightStick[a].style.transform = "rotate(135deg)";
	leftStick[a].style.transform = "rotate(-135deg)";
	leftStick[a].style.background = "#212bff";
	rightStick[a].style.background = "#212bff";
}

document.addEventListener('click',function(event) {
	var target = event.target;
	if(target.classList.contains('main-btn')) {
		for(var i = 0; i < tabs.length; i++) {
			if(target == tabs[i]) {
				makeActive(i);
				showContent(i);
			}
		}
	}
	if(target.classList.contains('note')) {
		for(var i = 0; i < noteTab.length; i++) {
			if(target == noteTab[i]) {
				rotate(i);
				showContent(i);
			}
		}
	}
	if(target.classList.contains('btn')) {
		event.preventDefault();
		target.classList.add('pressed');
	}
});

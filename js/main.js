'use strict';

// Burder menu===========================================
const burgerButton = document.getElementById('burger');

if (burgerButton) {
	const menuBody = document.getElementById('menu-body');
	burgerButton.addEventListener('click', function (e) {
		document.body.classList.toggle('_lock');
		burgerButton.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Accordeon=============================================
const headerAccordeon = document.querySelectorAll(
	'[data-name="accordeon-title"]'
);
function initAccordeon() {
	headerAccordeon.forEach(function (item) {
		item.addEventListener('click', function () {
			this.nextElementSibling.classList.toggle('_hidden');
		});
	});
}
function addHiddenAccordeon() {
	headerAccordeon.forEach(function (item) {
		item.nextElementSibling.classList.add('_hidden');
	});
}
if (window.innerWidth <= 768) {
	addHiddenAccordeon();
	initAccordeon();
}

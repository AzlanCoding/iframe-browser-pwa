"use strict";

var JS_VER = 'JS0001';

window.onload = () => {

	document.getElementById('id-jsver').textContent = JS_VER;

	navigator.serviceWorker.register('sw.js').then(reg => {
		if (navigator.serviceWorker.controller === null) return;
		if (reg.waiting) confirmUpdate(reg);
		reg.onupdatefound = () => {
			if (reg.installing) {
				reg.installing.onstatechange = event => {
					switch(event.target.state) {
						case 'installed': confirmUpdate(reg); break;
						case 'activated':	window.location.reload(); break;
					}
				}
			}
		}
	});
};

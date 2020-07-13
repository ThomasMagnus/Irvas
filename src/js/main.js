import './slider';
import modal from './modal';
import getForm from './form';
import tabs from './tabs';
import timer from './timer';
import photos from './photos'

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	modal();
	getForm();
	tabs();
	timer();
	photos();
})
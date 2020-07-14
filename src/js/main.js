import './slider';
import modal from './modal';
import calcModalCheck from './calcModalCheck';
import popapCalc from './popapCalc';
import getForm from './form';
import tabs from './tabs';
import timer from './timer';
import photos from './photos';
import modalCalcState from './modalCalcState';

window.addEventListener('DOMContentLoaded', () => {
	'use strict'

	let dateState = {};

	modal({
		btnSelector: '.popup_engineer_btn',
		modalSelector: '.popup_engineer',
		closeSelector: 'popup_engineer'
	});
	modal({
		btnSelector: '#popapBtn',
		modalSelector: '.popup_engineer',
		closeSelector: 'popup'
	});
	modal({
		btnSelector: '#popap-link',
		modalSelector: '.popup_engineer',
		closeSelector: 'popup'
	});
	calcModalCheck();
	popapCalc();
	getForm(dateState);
	tabs();
	timer();
	photos();
	modalCalcState(dateState);
})
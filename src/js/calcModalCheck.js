export const hideModal = (modal) => {
	
	modal.style.display = 'none';
	document.body.style.overflow = ''
}

export const showNextModal = (prevModal, nextModal) => {
	prevModal.style.display = 'none'
	nextModal.style.display = 'block';
	document.body.style.overflow = 'hidden'
}

const calcModalCheck = () => {
	const popupCalcButton = document.querySelector('.popup_calc_button'),
		  width = document.getElementById('width'),
		  height = document.getElementById('height'),
		  popupCalcProfile = document.querySelector('.popup_calc_profile'),
		  popupCalc = document.querySelector('.popup_calc');

	popupCalcButton.addEventListener('click', () => {
		if (width.value != '' && !isNaN(width.value) && height.value != '' && !isNaN(height.value)) {

			showNextModal(popupCalc, popupCalcProfile);

			width.value = '';
			height.value = '';

			width.style.border = '';
			height.style.border = '';
		} else {
			width.style.border = `1px solid red`;
			height.style.border = `1px solid red`;
		}
	})

	popupCalcProfile.addEventListener('click', (e) => {
		const target = e.target;

		if (target.nodeName == 'STRONG' || target.classList.contains('popup_calc_end')) {
			hideModal(popupCalcProfile)
		}
	})
}

export default calcModalCheck;
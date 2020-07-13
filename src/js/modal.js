const modal = () => {
	const modalBtn = document.querySelector('.popup_engineer_btn'),
		  modal = document.querySelector('.popup_engineer'),
		  popap = document.querySelector('.popup'),
		  popapBtn = document.getElementById('popapBtn'),
		  popapLink = document.getElementById('popap-link'),
		  popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
		  popupCalc = document.querySelector('.popup_calc');

	const getModal = (modalSelector, btn, closeSelector) => {

		btn.addEventListener('click', (e) => {
			e.preventDefault();

			modalSelector.style.display = 'block';
			document.body.style.overflow = 'hidden';

			clearTimeout(timeout)
		})
	
		const showModal = (e) => {
			const target = e.target;
		
			if (target.nodeName == 'STRONG' || target.classList.contains(closeSelector)) {
				modalSelector.style.display = 'none';
				document.body.style.overflow = ''
			}
		}

		modalSelector.addEventListener('click', showModal)
	}

	const getModalCalc = () => {

		popupCalcBtn.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
	
				popupCalc.style.display = 'block';
				document.body.style.overflow = 'hidden';
			})
		})

		popupCalc.addEventListener('click', (e) => {
			const target = e.target;
	
			if (target.nodeName == 'STRONG' || target.classList.contains('popup_calc')) {
				popupCalc.style.display = 'none';
				document.body.style.overflow = ''
			}
		})
	}

	const timeout = setTimeout(() => {
		modal.style.display = 'block';
	}, 60000)

	const popupCalcButton = document.querySelector('.popup_calc_button'),
		  width = document.getElementById('width'),
		  height = document.getElementById('height'),
		  popupCalcEnd = document.querySelector('.popup_calc_end');

	getModal(modal, modalBtn, 'popup_engineer')
	getModal(popap, popapBtn, 'popup')
	getModal(popap, popapLink, 'popup')
	getModalCalc()

	popupCalcButton.addEventListener('click', () => {
		if (width.value != '' && !isNaN(width.value) && height.value != '' && !isNaN(height.value)) {

			popupCalc.style.display = 'none'
			popupCalcEnd.style.display = 'block';
			document.body.style.overflow = 'hidden'

			width.value = '';
			height.value = '';

			width.style.border = '';
			height.style.border = '';
		} else {
			width.style.border = `1px solid red`;
			height.style.border = `1px solid red`;
		}
	})
	
	const showModal = (e) => {
		const target = e.target;
	
		if (target.nodeName == 'STRONG' || target.classList.contains('popup_calc_end')) {
			popupCalcEnd.style.display = 'none';
			document.body.style.overflow = ''
		}
	}

	popupCalcEnd.addEventListener('click', showModal)
}

export default modal
import {hideModal} from './calcModalCheck';
import {showNextModal} from './calcModalCheck';

const popapCalc = () => {
	
	const popupCalcBtn = document.querySelectorAll('.popup_calc_btn'),
		  popupCalc = document.querySelector('.popup_calc'),
		  popupCalcProfileButton = document.querySelector('.popup_calc_profile_button'),
		  popupCalcProfile = document.querySelector('.popup_calc_profile'),
		  popupCalcEnd = document.querySelector('.popup_calc_end');

	const getModalCalc = () => {

		popupCalcBtn.forEach(item => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
	
				popupCalc.style.display = 'block';
				document.body.style.overflow = 'hidden';
			})
		})

		popupCalcProfileButton.addEventListener('click', () => {
			showNextModal(popupCalcProfile, popupCalcEnd)
		})

		const closeModal = (closeBtn) => {

			closeBtn.addEventListener('click', (e) => {
				const target = e.target;
	
				if (target.nodeName == 'STRONG') {
					hideModal(closeBtn)
				}
			})
		}

		closeModal(popupCalc)
		closeModal(popupCalcEnd)
	}
	
	getModalCalc()
}

export default popapCalc
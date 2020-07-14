const modal = ({btnSelector, modalSelector, closeSelector}) => {
	const modalBtn = document.querySelector(btnSelector),
		  modal = document.querySelector(modalSelector);
		  scroll = scrollWidth();

	function scrollWidth() {
		const div = document.createElement('div')
		div.style.width = '50px'
		div.style.height = '50px'
		div.style.overflowY = 'scroll'
		div.style.visibility = 'hidden'

		document.body.append(div)

		const scroll = div.offsetWidth - div.clientWidth

		div.remove()

		return scroll;
		
	}

	scrollWidth()

	modalBtn.addEventListener('click', (e) => {
		e.preventDefault();

		modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
		document.body.style.marginRight = `${scroll}px`;

		clearTimeout(timeout)
	})

	const hideModal = (e) => {
		const target = e.target;
	
		if (target.nodeName == 'STRONG' || target.classList.contains(closeSelector)) {
			modal.style.display = 'none';
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}
	}

	modal.addEventListener('click', hideModal)

	const timeout = setTimeout(() => {
		modal.style.display = 'block';
	}, 60000)

}

export default modal
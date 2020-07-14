const modalCalcState = (state) => {
	const balconIconsImg = document.querySelectorAll('.balcon_icons_img'),
		  width = document.querySelectorAll('#width'),
		  height = document.querySelectorAll('#height'),
		  viewType = document.querySelectorAll('#view_type'),
		  checkbox = document.querySelectorAll('.checkbox');

	const getValid = (inputVal) => {
		const input = document.querySelector(inputVal)

		input.addEventListener('input', () => {
			input.value = input.value.replace(/\D/, '');
		})
	}

	getValid('#width');
	getValid('#height');

	const getProperties = (event, elem, prop) => {

		elem.forEach((item, i) => {
			item.addEventListener(event, () => {
				switch(item.nodeName) {
					case 'SPAN' :
						state[prop] = i;
						break;
					case 'INPUT' :
						if (item.getAttribute('type') === 'checkbox') {
							elem.forEach((box, j) => {
								box.checked = false;
								if (i == j) {
									box.checked = true;
								}
							})
							i === 0 ? state[prop] = 'Холодное' : state[prop] = 'Теплое'
						} else {
							state[prop] = item.value;
							state[prop] = item.value;
						}
						break;
					case 'SELECT' :
						state[prop] = item.value;
						break;
				}
			})

		})
	}

	getProperties('click', balconIconsImg, 'form')
	getProperties('input', width, 'width')
	getProperties('input', height, 'height')
	getProperties('change', viewType, 'type')
	getProperties('change', checkbox, 'check')
}

export default modalCalcState;
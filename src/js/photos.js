const photos = () => {
	const worksBtn = document.querySelectorAll('.works a');
	const div = document.createElement('div');
	const img = document.createElement('img');

	worksBtn.forEach(item => {
		item.addEventListener('click', (e) => {
			e.preventDefault();

			div.style.cssText = `
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 9;
				background-color: rgba(0, 0, 0, 0.8);
			`

			img.src = `${item.href}`;
			img.style.cssText = `
				position: fixed;
				top: 5%;
				left: 50%;
				max-height: 700px;
				transform: translateX(-50%);
			`

			div.append(img);

			document.body.append(div)

		})
	})

	div.addEventListener('click', (e) => {
		const target = e.target;
		if (target.tagName === 'DIV') {
			div.remove()
			img.remove()
		}
	})
}

export default photos 
import {getData} from './services'

const getForm = () => {
	const form = document.querySelectorAll('form'),
		  phone = document.querySelectorAll('input[name="user_phone"]');

	const URL = './assets/server.php';

	const message = {
		sucsess: 'Спасибо за обращение!',
		loading: 'Загрузка...',
		error: 'Ошибка загрузки',
	}

	phone.forEach(item => {
		item.addEventListener('input', () => {
			item.value = item.value.replace(/\D/, '')
		})
	})

	form.forEach(item => {
		item.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(item);

			const status = document.createElement('p');
			status.classList.add('status');
			item.appendChild(status)

			status.textContent = message.loading;

			getData(URL, formData)
				.then(response => {
					console.log(response);
					status.textContent = message.sucsess;
					setTimeout(() => {
						status.remove()
					}, 4000)
				})
				.catch(() => status.textContent = message.error)
				.finally(() => {
					item.reset();
				})
		})
	})
}

export default getForm;
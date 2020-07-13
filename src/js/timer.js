const timer = () => {
	const deadTime = '2020-08-07';

	const days = document.getElementById('days'),
		  hours = document.getElementById('hours'),
		  minutes = document.getElementById('minutes'),
		  seconds = document.getElementById('seconds'),
		  description = document.querySelectorAll('.description1');

	const [dayVal, hourVal, minuteVal, secondVal] = description;

	const getTimeRemaining = endTime => {

		const t = Date.parse(endTime) - Date.parse(new Date);
		
		const day = Math.floor(t / (1000 * 60 * 60 * 24)),
			  hour = Math.floor(t / (100 * 60 *60) % 24),
			  minute = Math.floor(t / (1000 * 60) % 60),
			  second = Math.floor(t / 1000 % 60);

		return {
			total: t,
			day,
			hour,
			minute,
			second,
		}
	}

	const getZero = (num) => {
		if (num < 10) {
			return '0' + num
		} else {
			return num
		}
	}

	let numToStr = function(num, arrText) {
		if (num % 10 === 1 && num % 100 !== 11) { 
		  return arrText[0];
		} else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
		  return arrText[1];            
		}
		return arrText[2];
	}
	
	const setClock = () => {
		const t = getTimeRemaining(deadTime);

		days.innerHTML = getZero(t.day);
		hours.innerHTML = getZero(t.hour);
		minutes.innerHTML = getZero(t.minute);
		seconds.innerHTML = getZero(t.second);

		if (t.total <= 0) {
			clearInterval(interval);
			days.innerHTML = '00';
			hours.innerHTML = '00';
			minutes.innerHTML = '00';
			seconds.innerHTML = '00';
		}

		dayVal.innerHTML = numToStr(t.day, ['День', 'Дня', 'Дней'])
		hourVal.innerHTML = numToStr(t.hour, ['Час', 'Часа', 'Часов'])
		minuteVal.innerHTML = numToStr(t.minute, ['Минута', 'Минуты', 'Минут'])
		secondVal.innerHTML = numToStr(t.second, ['Секунда', 'Секунды', 'Секунд'])

	}

	const interval = setInterval(setClock, 1000)

	
}

export default timer;
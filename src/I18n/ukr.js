export default {
	// home
	app_description:
		'Щиро вдячний за те, що читаєте цей месадж !!! Ця аплікуха - демонстратор фронт-енд технологій. '+
		'Для авторизації використовується API Firebase від Google. ' + 
		'Структура компонентів створена згідно концепції ATOMIC DESIGN => ATOMS => '+
		'MOLECULES => ORGANISMS => ... Для дій юзається redux saga, для створення "чистих",' +
		'але повнофункціональних компонентів використовується recompose.js . Щоб код css був "чистий", використовується бібліотека aphrodite.js .' +
		'А для інтерналізації юзається І18n-js. Для того, щоб додаток коректно працював зі старими версіями браузерів, такими як ІЕ, ' +
		'використовується транспайлер BABEL. А для виводу еррор мессаджів - використано react-toastify.',

	more_info:
		'Про додаток: при переході на "список постів", реалізована система динамічної пагінації, скрипт визначає скільки постів поміститься,в залежності від ширини вікна браузера, ' +
		'і рендерить тільки необхідну кількість постів. Клікнувши на будь-який з них, ви отримаєте коментарі до цього посту. Окрім того, ви можете просто набрати у строці запиту '+
		'/post-detail/{номер поста} і отримати безпосередьно інфу про данний пост. Якщо перейти на "улюблений фільм" - ви можете знайти основну інформацію про картину, яка вас цікавить. '+
		'Фіча додатку - "погода у вашому місті", при переході на вкладку  запит на спеціальний сервіс автоматично визначае ваше місто, після чого запитом на інший сервер отримується '+
		'інформація про погоду безпосередьно у вашому місті. ',
	
	simulation:
		"Для симуляції повільного з'єднання з сервером спробуйте у дебаггері режим slow 3G, а для симулювання помилки при з'єднанні" +
		" - просто поміняйте значення відповідної константи в constantsAPI.js .",
	//header
	header_title: 'Аплікуха API-PARTY :)',
	//Menu
	favorite_film: 'Інфа про улюблений фільм',
	post_list: 'Отримати список постів',
	weather_in_your_city: 'Погода в твоєму місті',
	//buttons
	home: 'Головна',
	sign_out: 'Вийти',
	//weather
	city_name: 'Твоє місто',
	temp_now: 'температура зараз:',
	temp_max: 'максимальна температура:',
	temp_min: 'мінімальна температура:',
	wind_speed: 'швидкість вітру:',
	m_sec: 'м/сек',
	pressure: 'тиск:',
	mm_hg: 'мм.рт.ст.',
	//film
	film_title: 'назва фільму:',
	film_year: 'рік:',
	film_runtime: 'тривалість:',
	film_rating: 'рейтинг IMDB:',
	enter_film_name: 'уведіть назву фільму',
	search_info: 'знайти інфу',
};

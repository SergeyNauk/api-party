export default {
	//home
	app_description:
		'Sincerely grateful for reading this message !!! This. demonstrator front-end technologies. '+
		'The structure of components is created according to the concept of ATOMIC DESIGN => ATOMS => '+
		'MOLECULES => ORGANISMS => ... For action used redux saga, to create a "clean",' +
		'but full-featured components used recompose.js. For css code to be "clean", the aphrodite.js library is used.'+
		'And for the internalization of used I18n-js. To ensure that the application works correctly with older versions of browsers such as IE,' +
		'the BABEL transponder is used. And to output the errore of message, used react-toastify.',

	more_info:
		'About the app: when you click on the "list of posts", system dynamic pagination,  determines how many posts will fit, depending on the '+
		'width of the browser window and renders only the required number of posts. By clicking on any of them, you will receive comments to this '+
		'post. In addition, you can simply type in the query line /post-detail/{post number} and get the info directly about this post. If you go '+
		'to" favorite movie " - you can find basic information about the picture you are interested in. Feature application "weather in your city", '+
		'when you click on the tab, the special service automatically determines your city, then request to another server, receive weather '+
		'information directly in your city.',
	simulation:
		'To simulate slow connection with the server try debugger mode slow 3G, and self-correction of errors when connecting'+ 
		'- just change the constants in constantsAPI.js .',
	//header
	header_title: 'THIS IS API-PARTY APP :)',
	//menu
	favorite_film: 'Your favorite film info',
	post_list: 'Get posts list',
	weather_in_your_city: 'Weather in your city',
	//buttons
	home: 'Home',
	sign_out: 'Sign out',
	//weather
	city_name: 'Your city is',
	temp_now: 'temperature now:',
	temp_max: 'temperature max:',
	temp_min: 'temperature min:',
	wind_speed: 'Wind speed:',
	m_sec: 'm/sec',
	pressure: 'pressure:',
	mm_hg: 'mm hg',
	//film
	film_title: 'Title:',
	film_year: 'Year:',
	film_runtime: 'Runtime:',
	film_rating: 'IMDB rating:',
	enter_film_name: 'enter the name of the movie',
	search_info: 'Search info',
};

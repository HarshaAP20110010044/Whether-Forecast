export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fc2a05f257msh0ac9b6dd59ca97ap11097bjsne60c0ab6ada8',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

// try {
// 	const response = await fetch('/cities', geoApiOptions);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";

export const WEATHER_API_KEY = "b892bec42678dc2a1ff6817bfccbde49";

Promise.all([
	fetch('https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=1'),
	fetch('https://movies-tvshows-data-imdb.p.rapidapi.com/?type=get-random-movies&page=2')
]).then(function (responses) {
	// Get a JSON object from each of the responses
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	// Log the data to the console
	// You would do something with both sets of data here
	console.table(data);
}).catch(function (error) {
	console.log(error);
});
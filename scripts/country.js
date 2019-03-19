
function getAPIdata() {

	fetch('https://restcountries.eu/rest/v2/all').then(function(response) {
		return response.json();
	})
	.then(function(response) {
		console.log(response);
		document.getElementById('name').innerHTML = response[1].name;
		document.getElementById('language').innerHTML = response[1].capital;
	 })
	 .catch(function (error) {
	 	console.log('Request failed', error);
	 });

}

getAPIdata();

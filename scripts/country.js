
function getAPIdata() {

	fetch('https://restcountries.eu/rest/v2/all').then(function(response) {
		return response.json();
	})
	.then(function(response) {
	//Informatie over de landingsplaats (Nederland, Amsterdam)
		console.log(response);
		document.getElementById('name').innerHTML = response[157].name;
		document.getElementById('capital').innerHTML = response[157].capital;
		document.getElementById('population').innerHTML = response[157].population;
		document.getElementById('flag').src = response[157].flag;
	 })
	 .catch(function (error) {
	 	console.log('Request failed', error);
	 });

}

getAPIdata();


function getAPIdata() {

	var url = "https://api.openweathermap.org/data/2.5/weather";
	var apiKey ="4fd792807839ef3185fdca5e830ab9bb";
	var city = "Amsterdam";

	// construct request
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city;

	// get current weather
	fetch(request)

	// parse to JSON format
	.then(function(response) {
		return response.json();
	})

	// render weather per day
	.then(function(response) {
		// render weatherCondition
    onAPISucces(response);

	})

	// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}


function onAPISucces(response) {
	// get type of weather in string format
	var type = response.weather[0].description;

	// get temperature in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

  if(degC < -10){
    alert("Test");
  }

// Geef aan of het veilig of niet veilig is om te landen met betrekking tot het weer

  if(type.includes("clouds")) {
    document.getElementById('advies').innerHTML = "It's safe to land";
    document.getElementById('picture').src = "images/success.png";
  }

  if(type.includes("rain")) {
    document.getElementById('advies').innerHTML = "It's safe to land";
    document.getElementById('picture').src = "images/success.png";
  }

  if(type.includes("snow")) {
    document.getElementById('advies').innerHTML = "It's unsafe to land";
    document.getElementById('picture').src = "images/error.png";
  }

  if(type.includes("clear")) {
    document.getElementById('advies').innerHTML = "It's safe to land";
    document.getElementById('picture').src = "images/success.png";
  }

  if(type.includes("atmosphere")) {
    document.getElementById('advies').innerHTML = "It's safe to land";
    document.getElementById('picture').src = "images/success.png";
  }

  if(type.includes("drizzle")) {
    document.getElementById('advies').innerHTML = "It's safe to land";
    document.getElementById('picture').src = "images/success.png";
  }

	if(type.includes("mist")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("thunderstorm")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("smoke")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("haze")) {
		document.getElementById('advies').innerHTML = "It's safe to land";
		document.getElementById('picture').src = "images/success.png";
	}

	if(type.includes("sand")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("fog")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("dust")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("mist")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("ash")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("squalls")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	if(type.includes("tornado")) {
		document.getElementById('advies').innerHTML = "It's unsafe to land";
		document.getElementById('picture').src = "images/error.png";
	}

	// render weather in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + "&#176;C <br>" + type;
}


function onAPIError(error) {
	console.error('Fetch request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = 'No weather data available <br /> Did you enter a valid city?';
}

// init data stream

	getAPIdata();


//Animatie
TweenMax.from("#picture", 1, {opacity: 0, x:-600, rotation:800, scale:0.5, delay: 0});

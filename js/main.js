document.querySelector('#searchButton').addEventListener('click', getFetch);

function getFetch() {
    const location = document.querySelector('#location').value.toLowerCase();
    const geoUrl = `http://api.weatherapi.com/v1/search.json?key=db8d3fd23d48455aa3751445240110&q=${location}`;

    fetch(geoUrl)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const locationData = data[0];
            document.querySelector('#state').innerText = `Region: ${locationData.region}`;
            document.querySelector('#country').innerText = `Country: ${locationData.country}`;
            document.querySelector('#latitude').innerText = `Latitude: ${locationData.lat}`;
            document.querySelector('#longitude').innerText = `Longitude: ${locationData.lon}`;

            const forecastUrl = `http://api.weatherapi.com/v1/forecast.json?key=db8d3fd23d48455aa3751445240110&q=${locationData.lat},${locationData.lon}&days=1`;
            return fetch(forecastUrl);
        })

        .then(res => res.json())
        .then(forecastData => {
            const current = forecastData.current;
            const temp = current.temp_c;
            const feelsLike = current.feelslike_c;
            const humidity = current.humidity;
            const forecastTime = current.last_updated_epoch;
            const weatherIcon = current.condition.icon;
            const weatherText = current.condition.text;

            document.querySelector('#weatherIcon').src = weatherIcon;
            document.querySelector('#weatherIcon').style.display = 'block';
            document.querySelector('#weatherText').innerText = weatherText;
            document.querySelector('#weatherText').style.display = 'block';

            document.querySelector('#currentTemp').innerText = `Current Temperature: ${temp}°C`;
            document.querySelector('#feelsLike').innerText = `Feels Like: ${feelsLike}°C`;
            document.querySelector('#humidity').innerText = `Humidity: ${humidity}%`;

            const windSpeed = current.wind_kph;
            const uvIndex = current.uv;
            const visibility = current.vis_km;
            const precipitation = current.precip_mm;
            const cloudCoverage = current.cloud;

            document.querySelector('#windSpeed').innerText = `Wind Speed: ${windSpeed} kph`;
            document.querySelector('#uvIndex').innerText = `UV Index: ${uvIndex}`;
            document.querySelector('#visibility').innerText = `Visibility: ${visibility} km`;
            document.querySelector('#precipitation').innerText = `Precipitation: ${precipitation} mm`;
            document.querySelector('#cloudCoverage').innerText = `Cloud Coverage: ${cloudCoverage}%`;

            document.querySelector('#showExtendedInfo').style.display = 'block';
            document.querySelector('#extendedWeatherInfo').style.display = 'none';

            function convertEpochToGMT(epoch) {
                const date = new Date(epoch * 1000);
                const dateString = date.toGMTString();
                return dateString;
            }

            const gmtTime = convertEpochToGMT(forecastTime);
            document.querySelector('#forecastedTime').innerHTML = `Last Forecast: ${gmtTime}`;
            document.querySelector('#resetButton').style.display = 'block';
        })
        .catch(err => {
            console.log(`error ${err}`);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Location not found! Try another location",
            });
        });
}

document.querySelector('#showExtendedInfo').addEventListener('click', () => {
    const extendedInfoDiv = document.querySelector('#extendedWeatherInfo');
    const showButton = document.querySelector('#showExtendedInfo');

    if (extendedInfoDiv.style.display === 'none') {
        extendedInfoDiv.style.display = 'block';
        showButton.textContent = 'Hide Extended Weather Information';
    } else {
        extendedInfoDiv.style.display = 'none';
        showButton.textContent = 'Show Extended Weather Information';
    }
});

document.querySelector('#resetButton').addEventListener('click', () => {
    document.querySelector('#location').value = '';

    document.querySelector('#currentTemp').textContent = '';
    document.querySelector('#feelsLike').textContent = '';
    document.querySelector('#humidity').textContent = '';
    document.querySelector('#state').textContent = '';
    document.querySelector('#country').textContent = '';
    document.querySelector('#latitude').textContent = '';
    document.querySelector('#longitude').textContent = '';
    document.querySelector('#forecastedTime').textContent = '';

    document.querySelector('#weatherIcon').src = '';
    document.querySelector('#weatherIcon').style.display = 'none';
    document.querySelector('#weatherText').textContent = '';
    document.querySelector('#weatherText').style.display = 'none';

    document.querySelector('#extendedWeatherInfo').style.display = 'none';
    document.querySelector('#resetButton').style.display = 'none';
    document.querySelector('#showExtendedInfo').style.display = 'none';
});

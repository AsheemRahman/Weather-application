# Weather Application

This is a simple weather application built using HTML, CSS, and JavaScript. The app fetches real-time weather data from a public API and displays the current weather for any city entered by the user.

## Table of Contents
- [Features](#features)
- [Screenshots](#screenshots)
- [Live Demo](#live-demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Usage](#api-usage)
- [How to Use](#how-to-use)
- [Contributing](#contributing)

## Features
- Search for current weather by city name
- Display temperature, weather condition, humidity, and wind speed
- Responsive design for mobile and desktop screens

## Live Demo
[Click here](https://asheemrahman.github.io/Weather-application/) to see the live demo.

## Technologies Used
- **HTML5**: Structure of the web page
- **CSS3**: Styling and responsive design
- **JavaScript**: Fetching data from the weather API and updating the UI dynamically
- **API**: [OpenWeatherMap](https://openweathermap.org/api)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/AsheemRahman/Weather-application.git
    ```
2. Navigate to the project folder:
    ```bash
    cd weather-app
    ```
3. Open `index.html` in your browser:
    ```bash
    open index.html
    ```
   Alternatively, you can use a live server to view it.

## API Usage

This app uses the [OpenWeatherMap API](https://openweathermap.org/api) to fetch weather data. To use this API:

1. Sign up on the OpenWeatherMap website and get your free API key.
2. In your JavaScript file, replace the placeholder in the API URL with your API key:
    ```javascript
    const apiKey = 'YOUR_API_KEY';
    ```

## How to Use

1. Open the app in your browser.
2. Enter the name of the city in the search bar.
3. Click the search button or press Enter to get the weather details.
4. The app will display the current temperature, weather condition, humidity, and wind speed for the entered city.

## Contributing

If you want to contribute to this project, feel free to submit issues or pull requests. Contributions are welcome!

### Steps for Contributing:
1. Fork this repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-branch
    ```
3. Commit your changes:
    ```bash
    git commit -m 'Add new feature'
    ```
4. Push the changes to your branch:
    ```bash
    git push origin feature-branch
    ```
5. Create a new pull request.

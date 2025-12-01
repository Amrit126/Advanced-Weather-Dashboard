export function getWeatherImage(current) {
    const main = current.weather[0].main
    const isDay = current.dt >= current.sys.sunrise && current.dt < current.sys.sunset;
    switch (main) {
        case "Clear":
            return isDay ? "clear-day.png" : "clear-night.png";

        case "Clouds":
            return "clouds.png";

        case "Rain":
            return "rain.png";

        case "Thunderstorm":
            return "thunder.png";

        case "Snow":
            return "snow.png";

        case "Drizzle":
            return "drizzle.png";

        case "Mist":
        case "Fog":
        case "Haze":
        case "Smoke":
            return "fog.png";

        default:
            return "default.png";
    }
}

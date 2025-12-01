export function cloudiness(num) {
    if (num <= 10) {
        return "Clear"
    } else if (num <= 30) {
        return "Mostly Clear"
    } else if (num <= 60) {
        return "Partly Cloudy"
    } else if (num <= 90) {
        return "Cloudy"
    } else {
        return "Overcast"
    }
}
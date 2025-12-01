export function feelsLike(num) {
    if (num < 0) {
        return "Freezing"
    } else if (num <= 10) {
        return "Cold"
    } else if (num <= 18) {
        return "Cool"
    } else if (num <= 26) {
        return "Comfortable"
    } else if (num <= 32) {
        return "Warm"
    } else if (num <= 38) {
        return "Hot"
    } else {
        return "Extreme"
    }
}
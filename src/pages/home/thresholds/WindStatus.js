export function windStatus(num) {
    num = num * 3.6
    if (num <= 5) {
        return "Calm"
    } else if (num <= 15) {
        return "Light"
    } else if (num <= 30) {
        return "Breezy"
    } else if (num <= 45) {
        return "Windy"
    } else if (num <= 60) {
        return "Strong"
    } else {
        return "Stormy"
    }
}
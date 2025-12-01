export function visibility(num) {
    if (num < 1) {
        return "Very Poor"
    } else if (num <= 2) {
        return "Poor"
    } else if (num <= 5) {
        return "Moderate"
    } else if (num <= 10) {
        return "Clear"
    } else {
        return "Very Clear"
    }
}
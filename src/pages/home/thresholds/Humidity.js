export function humidity(num) {
    if (num <= 30) {
        return "Dry"
    } else if (num <= 50) {
        return "Comfortable"
    } else if (num <= 70) {
        return "Humid"
    } else {
        return "Very Humid"
    }
}
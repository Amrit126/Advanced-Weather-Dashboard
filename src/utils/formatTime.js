import dayjs from 'dayjs'

export function convertToDate(seconds, date) {
    let time = seconds * 1000
    let now
    if (date) {
        now = dayjs(time).format("dddd, MMMM D")
    } else {
        now = dayjs(time).format("h:mm A")
    }

    return now
}
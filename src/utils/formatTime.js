import dayjs from 'dayjs'

export function convertToDate(seconds, date) {
    let time = seconds
    let now
    if (date) {
        now = dayjs.unix(time).format("dddd, MMMM D")
    } else {
        now = dayjs.unix(time).format("h:mm A")
    }

    return now
}

console.log(convertToDate(1764520970, false))
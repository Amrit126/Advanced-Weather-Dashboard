import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';

dayjs.extend(utc);
dayjs.extend(timezone);

export function convertToDate(seconds, date, offsetInSeconds) {
    // We convert the offset from seconds to minutes (46800 / 60 = 780 minutes)
    const offsetInMinutes = offsetInSeconds / 60;

    // We tell Day.js to take the UTC timestamp, and apply this specific offset
    const timeInZone = dayjs.unix(seconds).utcOffset(offsetInMinutes);

    if (date) {
        return timeInZone.format("dddd, MMMM D");
    } else {
        return timeInZone.format("h:mm A");
    }
}
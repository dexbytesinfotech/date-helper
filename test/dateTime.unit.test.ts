import moment from 'moment';
import { DateHelper, DateFormat } from '../src'; // Importing DateHelper and DateFormat enum from the source directory


describe('DateHelper', () => {
    describe('DateHelper.isDate', () => {
        it('should return true for a valid date string', () => {
            const dateString = '2024-03-29';
            expect(DateHelper.isDate(dateString)).toBe(true);
        });

        it('should return false for an invalid date string', () => {
            const dateString = '2024-35-29';
            expect(DateHelper.isDate(dateString)).toBe(false);
        });
    })

    // Testing getUtc function
    describe('getUtc', () => {
        it('should return a UTC date as Date object', () => {
            expect(DateHelper.getUtc('2024-03-29')).toEqual(new Date('2024-03-29T00:00:00.000Z'));
        });
    });

    // Testing getUtcString function
    describe('getUtcString', () => {
        it('should return a UTC date as ISO string', () => {
            expect(DateHelper.getUtcString('2024-03-29')).toBe('2024-03-29T00:00:00.000Z');
        });

        it('should return the current UTC date as ISO string when no date is provided', () => {
            const currentUtcDate = new Date().toISOString();
            expect(DateHelper.getUtcString()).toBe(currentUtcDate);
        });
    });

    // Testing getUtcFormat function
    describe('getUtcFormat', () => {
        it('should return a UTC date in a specific format', () => {
            expect(DateHelper.getUtcFormat('2024-03-29')).toBe('2024-03-29T12:00:00');
        });

        it('should return the current UTC date in a specific format when no date is provided', () => {
            const currentUtcDate = new Date().toISOString().slice(0, 19);
            expect(DateHelper.getUtcFormat()).toBe(currentUtcDate);
        });
    });

    // Testing scheduleFromNow function
    describe('scheduleFromNow', () => {
        it('should schedule a date from now', () => {
            const int = 1;
            const unit = 'days';
            const timezone = 'America/New_York';

            const scheduledDate = DateHelper.scheduleFromNow(int, unit, timezone);
            expect(scheduledDate);
        });
    });

    // Testing formatDateTime function
    describe('formatDateTime', () => {
        it('should format a date time', () => {
            const date = '2024-03-29';
            const format = DateFormat.YYYY_MM_DD_HH_MM_SS;
            const timezone = 'America/New_York';

            const formattedDateTime = DateHelper.formatDateTime(date, format, timezone);
            expect(formattedDateTime);
        });
    });

    // Testing formatDateTimeRaw function
    describe('formatDateTimeRaw', () => {
        it('should format a date time without timezone', () => {
            const date = '2024-03-29';
            const format = DateFormat.YYYY_MM_DD_HH_MM_SS;
            const formattedDateTime = DateHelper.formatDateTimeRaw(date, format);
            expect(formattedDateTime);
        });
    });

    // Testing getDateTimeForTimezone function
    describe('getDateTimeForTimezone', () => {
        it('should get date time for a specific timezone', () => {
            const date = '2024-03-29';
            const timezone = 'America/New_York';

            const dateTimeForTimezone = DateHelper.getDateTimeForTimezone(date, timezone);
            expect(dateTimeForTimezone);
        });
    });

    // Testing addDate function
    describe('addDate', () => {
        it('should add days to a date', () => {
            const fromDate = '2024-03-29';
            const addValue = 1;
            const unit = 'days';

            const addedDate = DateHelper.addDate(fromDate, addValue, unit);
            expect(addedDate);
        });
    });

    // Testing subtractDate function
    describe('subtractDate', () => {
        it('should subtract days from a date', () => {
            const fromDate = '2024-03-29';
            const subtractValue = 1;
            const unit = 'days';

            const subtractedDate = DateHelper.subtractDate(fromDate, subtractValue, unit);
            expect(subtractedDate);
        });
    });

    // Testing getStartOf function
    describe('getStartOf', () => {
        it('should get the start of a date unit', () => {
            const date = '2024-03-29';
            const unit = 'month';

            const startOfDate = DateHelper.getStartOf(date, unit);
            const parsedStartOfDate = moment(startOfDate);

            const expectedStartOfDate = moment(date).startOf(unit);

            expect(parsedStartOfDate.isSame(expectedStartOfDate, unit)).toBe(true);
        });
    });

    // Testing getEndOf function
    describe('getEndOf', () => {
        it('should get the end of a date unit', () => {
            const date = '2024-03-29';
            const unit = 'month';

            const endOfDate = DateHelper.getEndOf(date, unit);
            expect(endOfDate);
        });
    });

    // Testing dateDiffFormatted function
    describe('dateDiffFormatted', () => {
        it('should return formatted date difference', () => {
            const startDate = '2024-03-27T12:00:00';
            const endDate = '2024-03-29T12:00:00';
            expect(DateHelper.dateDiffFormatted(startDate, endDate, 'days')).toBe('12 hours and 2 minutes');
        });
    });

    // Testing durationFromNowInMinutes function
    describe('durationFromNowInMinutes', () => {
        it('should return duration from now in minutes', () => {
            const date = '2024-03-29';
            expect(DateHelper.durationFromNowInMinutes(date)).toBeGreaterThan(0);
        });
    });

    // Testing durationFromNowAsString function
    describe('durationFromNowAsString', () => {
        it('should return duration from now as string', () => {
            const date = '2024-03-29';
            expect(DateHelper.durationFromNowAsString(date));
        });
    });
});

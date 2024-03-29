import moment from 'moment-timezone';

/**
 * Enumeration for various date formats.
 */
export enum DateFormat {
    YYYY_MM_DD = "YYYY-MM-DD",
    DD_MM_YYYY = "DD-MM-YYYY",
    YYYY_MM_DD_HH_MM_SS = "YYYY-MM-DD HH:mm:ss",
    DD_MMM_YYYY = "DD MMM YYYY",
    MMM_DD_YYYY = "MMM DD, YYYY",
    // Add your date formats here
}

/**
 * Function signature for scheduling a time from now.
 * @param int The number of units to add.
 * @param unit The unit of time to add (e.g., 'days', 'hours', 'minutes').
 * @param timezone The timezone to schedule the time in (default: 'America/New_York').
 * @returns A string representing the scheduled time.
 */
interface ScheduledTime {
    (int: number, unit: moment.unitOfTime.DurationConstructor, timezone?: string): string;
}

/**
 * Function signature for formatting a date time.
 * @param date The date string to format.
 * @param format The desired format for the date.
 * @param timezone The timezone to format the date in (default: 'America/New_York').
 * @returns A string representing the formatted date time.
 */
interface FormattedDateTime {
    (date: string, format: DateFormat, timezone?: string): string;
}

/**
 * Function signature for getting a date time for a specific timezone.
 * @param date The date or string to convert to the specified timezone.
 * @param timezone The timezone to convert the date to (default: 'America/New_York').
 * @returns A Date object representing the converted date time.
 */
interface DateTimeForTimezone {
    (date: string | Date, timezone?: string): Date;
}

/**
 * Function signature for modifying a date.
 * @param fromDate The base date to modify.
 * @param value The value to add or subtract from the date.
 * @param unit The unit of time to add or subtract (e.g., 'days', 'hours', 'minutes').
 * @returns A Date object representing the modified date.
 */
interface DateModifier {
    (fromDate: string, value: number, unit: moment.unitOfTime.DurationConstructor): Date;
}

/**
 * Function signature for getting the start of a date.
 * @param date The date string to get the start of.
 * @param unit The unit of time to get the start of (e.g., 'day', 'month', 'year').
 * @returns A Date object representing the start of the specified date.
 */
interface StartOfDate {
    (date: string, unit: moment.unitOfTime.StartOf): Date;
}

/**
 * Function signature for getting the end of a date.
 * @param date The date string to get the end of.
 * @param unit The unit of time to get the end of (e.g., 'day', 'month', 'year').
 * @returns A Date object representing the end of the specified date.
 */
interface EndOfDate {
    (date: string, unit: moment.unitOfTime.StartOf): Date;
}

/**
 * Function signature for calculating the difference between two dates.
 * @param biggerDate The larger date.
 * @param smallerDate The smaller date.
 * @param unit The unit of time to calculate the difference in (e.g., 'days', 'hours', 'minutes').
 * @returns The difference between the two dates in the specified unit of time.
 */
interface DateDifference {
    (biggerDate: any, smallerDate: any, unit: any): number;
}

/**
 * Function signature for calculating the formatted difference between two dates.
 * @param biggerDate The larger date.
 * @param smallerDate The smaller date.
 * @param unit The unit of time to calculate the difference in (e.g., 'days', 'hours', 'minutes').
 * @returns A string representing the formatted difference between the two dates.
 */
interface FormattedDateDifference {
    (biggerDate: any, smallerDate: any, unit: any): string;
}

/**
 * Function signature for calculating the duration from now in minutes.
 * @param date The date to calculate the duration from now.
 * @returns The duration from now in minutes.
 */
interface DurationFromNowInMinutes {
    (date: any): number;
}

/**
 * Function signature for calculating the duration from now as a string.
 * @param date The date to calculate the duration from now.
 * @returns A string representing the duration from now.
 */
interface DurationFromNowAsString {
    (date: any): string;
}

/**
 * Utility class for date manipulation.
 */
export class DateHelper {
    /**
     * Checks if a string is a valid date.
     * @param text The string to check.
     * @returns True if the string is a valid date, otherwise false.
     */
    static isDate(text: string): boolean {
        try {
            const date = new Date(text);
            return date instanceof Date && !isNaN(date.valueOf());
        } catch (error) {
            throw new Error(`${text} is a bad input as date: ${error}`);
        }
    }

    /**
     * Gets the current UTC date.
     * @param date Optional date string to convert to UTC.
     * @returns A Date object representing the current UTC date.
     */
    static getUtc(date: string | null = null): Date {
        try {
            return date ? moment.utc(date).toDate() : moment.utc().toDate();
        } catch (error) {
            throw new Error("Failed to get UTC date: " + error);
        }
    }

    /**
     * Gets the current UTC date as a string.
     * @param date Optional date string to convert to UTC.
     * @returns A string representing the current UTC date.
     */
    static getUtcString(date: string | null = null): string {
        try {
            return date ? moment.utc(date).toISOString() : moment.utc().toISOString();
        } catch (error) {
            throw new Error("Failed to get UTC string: " + error);
        }
    }

    /**
     * Gets the current UTC date in a specific format.
     * @param date Optional date string to convert to UTC.
     * @returns A string representing the current UTC date in the specified format.
     */
    static getUtcFormat(date: string | null = null): string {
        try {
            return date ? moment.utc(date).format("YYYY-MM-DDThh:mm:ss") : moment.utc().format("YYYY-MM-DDThh:mm:ss");
        } catch (error) {
            throw new Error("Failed to get UTC format: " + error);
        }
    }

    /**
     * Schedules a date from now.
     * @param int The number of units to add.
     * @param unit The unit of time to add (e.g., 'days', 'hours', 'minutes').
     * @param timezone The timezone to schedule the time in (default: 'America/New_York').
     * @returns A string representing the scheduled time.
     */
    static scheduleFromNow: ScheduledTime = (int, unit, timezone = "America/New_York") => {
        try {
            return moment.utc().add(int, unit).tz(timezone).format("YYYY-MM-DDThh:mm:ss");
        } catch (error) {
            throw new Error("Failed to schedule from now: " + error);
        }
    };

    /**
     * Formats a date time.
     * @param date The date string to format.
     * @param format The desired format for the date.
     * @param timezone The timezone to format the date in (default: 'America/New_York').
     * @returns A string representing the formatted date time.
     */
    static formatDateTime: FormattedDateTime = (date, format, timezone = "America/New_York") => {
        try {
            return moment.utc(date).tz(timezone).format(format);
        } catch (error) {
            throw new Error("Failed to format date time: " + error);
        }
    };

    /**
     * Formats a date time without timezone conversion.
     * @param date The date string to format.
     * @param format The desired format for the date.
     * @returns A string representing the formatted date time.
     */
    static formatDateTimeRaw(date: string, format: DateFormat): string {
        try {
            return moment.utc(date).format(format);
        } catch (error) {
            throw new Error("Failed to format date time raw: " + error);
        }
    }

    /**
     * Gets a date time for a specific timezone.
     * @param date The date or string to convert to the specified timezone.
     * @param timezone The timezone to convert the date to (default: 'America/New_York').
     * @returns A Date object representing the converted date time.
     */
    static getDateTimeForTimezone: DateTimeForTimezone = (date, timezone = "America/New_York") => {
        try {
            return moment.utc(date).tz(timezone).toDate();
        } catch (error) {
            throw new Error("Failed to get date time for timezone: " + error);
        }
    };

    /**
     * Adds a specified duration to a date.
     * @param fromDate The base date to add the duration to.
     * @param addValue The value to add to the date.
     * @param unit The unit of time to add (e.g., 'days', 'hours', 'minutes').
     * @returns A Date object representing the modified date.
     */
    static addDate: DateModifier = (fromDate, addValue, unit) => {
        try {
            return moment.utc(fromDate).add(addValue, unit).toDate();
        } catch (error) {
            throw new Error("Failed to add date: " + error);
        }
    };

    /**
     * Subtracts a specified duration from a date.
     * @param fromDate The base date to subtract the duration from.
     * @param subtractValue The value to subtract from the date.
     * @param unit The unit of time to subtract (e.g., 'days', 'hours', 'minutes').
     * @returns A Date object representing the modified date.
     */
    static subtractDate: DateModifier = (fromDate, subtractValue, unit) => {
        try {
            return moment.utc(fromDate).subtract(subtractValue, unit).toDate();
        } catch (error) {
            throw new Error("Failed to subtract date: " + error);
        }
    };

    /**
     * Gets the start of a specified date.
     * @param date The date string to get the start of.
     * @param unit The unit of time to get the start of (e.g., 'day', 'month', 'year').
     * @returns A Date object representing the start of the specified date.
     */
    static getStartOf: StartOfDate = (date, unit) => {
        try {
            return moment.utc(date).startOf(unit).toDate();
        } catch (error) {
            throw new Error("Failed to get start of date: " + error);
        }
    };

    /**
     * Gets the end of a specified date.
     * @param date The date string to get the end of.
     * @param unit The unit of time to get the end of (e.g., 'day', 'month', 'year').
     * @returns A Date object representing the end of the specified date.
     */
    static getEndOf: EndOfDate = (date, unit) => {
        try {
            return moment.utc(date).endOf(unit).toDate();
        } catch (error) {
            throw new Error("Failed to get end of date: " + error);
        }
    };

    /**
     * Calculates the difference between two dates.
     * @param biggerDate The larger date.
     * @param smallerDate The smaller date.
     * @param unit The unit of time to calculate the difference in (e.g., 'days', 'hours', 'minutes').
     * @returns The difference between the two dates in the specified unit of time.
     */
    static dateDiff: DateDifference = (biggerDate, smallerDate, unit) => {
        try {
            const date1 = moment.utc(biggerDate);
            const date2 = moment.utc(smallerDate);
            return date1.diff(date2, unit);
        } catch (error) {
            throw new Error("Failed to calculate date difference: " + error);
        }
    };

    /**
     * Calculates the formatted difference between two dates.
     * @param biggerDate The larger date.
     * @param smallerDate The smaller date.
     * @param unit The unit of time to calculate the difference in (e.g., 'days', 'hours', 'minutes').
     * @returns A string representing the formatted difference between the two dates.
     */
    static dateDiffFormatted: FormattedDateDifference = (biggerDate, smallerDate, unit) => {
        try {
            const date1 = moment.utc(biggerDate);
            const date2 = moment.utc(smallerDate);
            return moment(date1.diff(date2, unit), "minutes").format("h [hours] [and] m [minutes]");
        } catch (error) {
            throw new Error("Failed to calculate formatted date difference: " + error);
        }
    };

    /**
     * Calculates the duration from now in minutes.
     * @param date The date to calculate the duration from now.
     * @returns The duration from now in minutes.
     */
    static durationFromNowInMinutes: DurationFromNowInMinutes = (date) => {
        try {
            const date1 = moment(new Date(date), moment.ISO_8601);
            const date2 = moment();
            return date2.diff(date1, "minutes");
        } catch (error) {
            throw new Error("Failed to calculate duration from now in minutes: " + error);
        }
    };

    /**
     * Calculates the duration from now as a string.
     * @param date The date to calculate the duration from now.
     * @returns A string representing the duration from now.
     */
    static durationFromNowAsString: DurationFromNowAsString = (date) => {
        try {
            const date1 = moment(new Date(date), moment.ISO_8601);
            const date2 = moment();
            return date2.to(date1, true);
        } catch (error) {
            throw new Error("Failed to calculate duration from now as string: " + error);
        }
    };
}

# date-helper

The `date-helper` package is a comprehensive utility for handling date and time operations in JavaScript applications. With its intuitive API and robust functionality, it simplifies common tasks such as date validation, formatting, timezone conversion, and date arithmetic.

## Features

- **Date Validation**: Check the validity of date strings.
- **Current UTC Date and Time**: Obtain the current UTC date and time.
- **Date Scheduling**: Schedule dates from the current time.
- **Date Formatting**: Format dates according to various formats.
- **Timezone Conversion**: Convert dates to different timezones.
- **Date Arithmetic**: Add and subtract time intervals from dates.
- **Date Unit Calculation**: Compute the start and end of specific date units.
- **Date Difference Calculation**: Calculate the difference between two dates.

## Installation

To use the `DateHelper` class in your project, you need to install the `date-helper` package. You can install it via npm:
```bash
npm install date-helper
```
You can visit our repository by using this link  https://github.com/dexbytesinfotech/date-helper.git
## Usage

Import the `DateHelper` class into your project:

```typescript
import { DateHelper, DateFormat } from 'date-helper';
```

### isDate

Check if a string is a valid date:

```typescript
const dateString = '2024-03-29';

if (DateHelper.isDate(dateString)) {
    console.log(`${dateString} is a valid date.`);
} else {
    console.log(`${dateString} is not a valid date.`);
}
// Expected output: "2024-03-29 is a valid date."
```

### getUtc

Get the current UTC date:

```typescript
const utcDate = DateHelper.getUtc();
console.log('Current UTC date:', utcDate);
// Expected output: Current UTC date: [Current UTC date and time]
```

### getUtcString

Get the current UTC date as a string:

```typescript
const utcDateString = DateHelper.getUtcString();
console.log('Current UTC date string:', utcDateString);
// Expected output: Current UTC date string: [Current UTC date and time as a string]
```

### getUtcFormat

Get the current UTC date in a specific format:

```typescript
const formattedUtcDate = DateHelper.getUtcFormat(DateFormat.YYYY_MM_DD_HH_MM_SS);
console.log('Formatted UTC date:', formattedUtcDate);
// Expected output: Formatted UTC date: [Formatted UTC date and time according to specified format]
```

### scheduleFromNow

Schedule a date from now:

```typescript
const scheduledDate = DateHelper.scheduleFromNow(1, 'days');
console.log('Scheduled date from now:', scheduledDate);
// Expected output: Scheduled date from now: [Date and time one day from now]
```

### formatDateTime

Format a date time:

```typescript
const formattedDateTime = DateHelper.formatDateTime('2024-03-29', DateFormat.YYYY_MM_DD_HH_MM_SS);
console.log('Formatted date time:', formattedDateTime);
// Expected output: Formatted date time: [Formatted date and time string]
```

### formatDateTimeRaw

Format a date time without timezone:

```typescript
const rawFormattedDateTime = DateHelper.formatDateTimeRaw('2024-03-29', DateFormat.YYYY_MM_DD_HH_MM_SS);
console.log('Raw formatted date time:', rawFormattedDateTime);
// Expected output: Raw formatted date time: [Raw formatted date and time string]
```

### getDateTimeForTimezone

Get date time for a specific timezone:

```typescript
const dateTimeForTimezone = DateHelper.getDateTimeForTimezone('2024-03-29', 'India/Kolkata');
console.log('Date time for timezone:', dateTimeForTimezone);
// Expected output: Date time for timezone: [Date and time adjusted to specified timezone]
```

### addDate

Add days to a date:

```typescript
const newDate = DateHelper.addDate('2024-03-29', 1, 'days');
console.log('New date after addition:', newDate);
// Expected output: New date after addition: [Date after adding one day]
```

### subtractDate

Subtract days from a date:

```typescript
const newDate = DateHelper.subtractDate('2024-03-29', 1, 'days');
console.log('New date after subtraction:', newDate);
// Expected output: New date after subtraction: [Date after subtracting one day]
```

### getStartOf

Get the start of a date unit:

```typescript
const startOfMonth = DateHelper.getStartOf('2024-03-29', 'month');
console.log('Start of month:', startOfMonth);
// Expected output: Start of month: [Start date of the month containing the given date]
```

### getEndOf

Get the end of a date unit:

```typescript
const endOfMonth = DateHelper.getEndOf('2024-03-29', 'month');
console.log('End of month:', endOfMonth);
// Expected output: End of month: [End date of the month containing the given date]
```

### dateDiff

Calculate date difference:

```typescript
const difference = DateHelper.dateDiff('2024-03-29T12:00:00', '2024-03-27T12:00:00', 'days');
console.log('Date difference:', difference);
// Expected output: Date difference: [Difference in days between the two dates]
```

### dateDiffFormatted

Calculate formatted date difference:

```typescript
const formattedDifference = DateHelper.dateDiffFormatted('2024-03-29T12:00:00', '2024-03-27T12:00:00', 'days');
console.log('Formatted date difference:', formattedDifference);
// Expected output: Formatted date difference: [Formatted difference in days between the two dates]
```

### durationFromNowInMinutes

Calculate duration from now in minutes:

```typescript
const durationInMinutes = DateHelper.durationFromNowInMinutes('2024-03-29');
console.log('Duration from now in minutes:', durationInMinutes);
// Expected output: Duration from now in minutes: [Duration from now to the specified date in minutes]
```

### durationFromNowAsString

Calculate duration from now as a string:

```typescript
const durationAsString = DateHelper.durationFromNowAsString('2024-03-29');
console.log('Duration from now as string:', durationAsString);
// Expected output: Duration from now as string: [Human-readable duration from now to the specified date]
```

## Contribution

If you have any questions about contributing to this project, feel free to reach out to us at [contact@dexbytes.com](mailto:contact@dexbytes.com).

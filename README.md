
# Calterm

A JSON calendar utility right in your command-line!

Expected format (pay attention to keys)-
```
{
  "events": [
    {
      "occasion": "Birthday party",
      "invited_count": 120,
      "year": 2015,
      "month": 3,
      "day": 14
    },
    {
      "occasion": "Technical discussion",
      "invited_count": 23,
      "year": 2015,
      "month": 4,
      "day": 24
    },
    {
      "occasion": "Press release",
      "invited_count": 64,
      "year": 2015,
      "month": 6,
      "day": 7,
      "cancelled": true
    },
    {
      "occasion": "New year party",
      "invited_count": 55,
      "year": 2016,
      "month": 1,
      "day": 1
    }
  ]
}
```

`Cancelled` is an optional field that defaults to 'No' (_false_),
but the rest are required.

## Setup

Assuming you have Node 0.12.x+ (though now Node 5 is LTS; and thus, NPM) installed, simply clone this repo
locally and fetch dependencies + precompile ES6/7 to ES5 via `npm install` in
the root of the project directory.

## Usage

To execute the CLI, run `npm start` in the root of the project directory.
The script accepts a file path argument (like `npm start gcal.json`) that should
point to a `.json` file (or a `.js` file exporting an object), but if none is
provided, it will default to `./calendars.json`.

# Random CSV Data Generator

This project generates a CSV file with random records based on specified parameters such as timestamp, age, gender, education, employment, and response values.

## Features

- Generates random timestamps in the format: `YYYY/MM/DD HH:MM:SS AM/PM GMT+5`.
- Randomly assigns age groups, genders, education levels, employment statuses, and response values.
- Allows customization by passing different parameters for dynamic data generation.
- Outputs the data into a CSV file named `random_records_values.csv`.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/random-csv-generator.git
   cd random-csv-generator
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

## Usage

1. Run the script to generate a CSV file:
   ```sh
   node index.js
   ```
2. Modify the function call in `index.js` to generate different datasets.

## Customization

Modify the function call in `index.js` to pass different values for:

- `filePath`: Output CSV file name.
- `numRecords`: Number of records to generate.
- `ageGroups`: Array of age group options.
- `genders`: Array of gender options.
- `educationLevels`: Array of education levels.
- `employmentStatuses`: Array of employment statuses.
- `responses`: Array of response values.

Example:

```js
generateCSV(
  "new_data.csv",
  100,
  ["18-24", "25-34"],
  ["Male", "Female"],
  ["Graduate"],
  ["Employed"],
  [1, 2, 3]
);
```

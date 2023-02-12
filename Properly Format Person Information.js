person = {
  "name": "john vanderbilt",
  "city_name": "salt lake city",
  "country": "usa",
  "zip_code": "84103"
}

const personName = person["name"];
const cityName = person["city_name"];
const countryName = person["country"];
const zipCode = person["zip_code"];

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// Person Name
const nameParts = personName.split(" ");
const capitalizedName = nameParts.map(namePart => capitalize(namePart)).join(" ");

// City Name
const cityNameParts = cityName.split(" ");
const capitalizedCityName = cityNameParts.map(cityNamePart => capitalize(cityNamePart)).join(" ");

// Country Name
const upCasedCountryName = countryName.toUpperCase();

//Print
console.log(capitalizedName);
console.log(`${capitalizedCityName}, ${upCasedCountryName} ${zipCode}`);
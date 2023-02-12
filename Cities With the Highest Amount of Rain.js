const data = {
  "Houston": 104,
  "Atlanta": 113,
  "Austin": 88,
  "Baltimore": 116,
  "Boston": 126,
  "Dallas": 81
};

const dataEntries = Object.entries(data);
const citiesWithRain = dataEntries.reduce((cities, keyAndValue) => {
  if(keyAndValue[1] > 100) return [...cities, keyAndValue[0]];

  return cities
}, [])

console.log(citiesWithRain)
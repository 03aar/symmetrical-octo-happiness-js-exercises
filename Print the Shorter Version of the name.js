const name = "Paul Thomas Anderson";

// split name and assign
const [firstName, middleName, lastName] = name.split(" ");

const firstLetterOfFirstName = firstName[0];
const firstLetterOfMiddletName = middleName[0];

// Print
console.log(`${firstLetterOfFirstName}.${firstLetterOfMiddletName}.${lastName}`);
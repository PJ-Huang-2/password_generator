// define generatePassword function
function generatePassword() {
  // define things user night want
  const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  const upperCaseLetters = lowerCaseLetters.toUpperCase();
  const numbers = "1234567890";
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/';

  // define dummy data
  const options = {
    length: "12",
    lowercase: "on",
    uppercase: "on",
    numbers: "on",
    excludeCharacters: "40",
  };

  // create a collection to store things user picked up
  let collection = [];

  if (options.lowercase === "on") {
    collection = collection.concat(lowerCaseLetters.split(""));
  }

  if (options.uppercase === "on") {
    collection = collection.concat(upperCaseLetters.split(""));
  }

  if (options.numbers === "on") {
    collection = collection.concat(numbers.split(""));
  }

  if (options.symbols === "on") {
    collection = collection.concat(symbols.split(""));
  }

  // remove things user don't need
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`);
    collection = collection.filter(
      (character) => !options.excludeCharacters.includes(character)
    );
    // if the character includes in 'excludeCharacters',
    // return false to remove the character in the collection

    /* if (options.excludeCharacters.includes(character) === true) {
        return false;
        // otherwise, return true to keep characters in collection
      } else {
        return true;
      } */
    // return
  }
  console.log("collection", collection);

  // start generating password

  // return the generated password
  console.log("This function will generate password");
}

// invoke generatePassword function
generatePassword();

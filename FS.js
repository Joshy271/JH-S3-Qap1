const fs = require("fs");

// Read the contents of the "Piano-Man.txt" file
fs.readFile("./Files/Piano-Man.txt", (err, data) => {
  if (err) throw err;
  // If an error occurs while reading the file, throw the error
  console.log(data.toString());
  // Display the contents of the file as a string
});

// Write the text "Billy Joel Is Amazing" into a file called "Undeniable-Truth.txt"
fs.writeFile("./Files/Undeniable-Truth.txt", "Billy Joel Is Amazing", (err) => {
  if (err) throw err;
  // If an error occurs while writing to the file, throw the error
  console.log("We Did It!!!");
  // Display a success message if the file writing operation is successful
});

const { connect } = require("./client");
const { setupInput } = require("./input");

console.log("Connecting ...");

// setupInput(handleUserInput);
setupInput(connect());
// why calling setupInput, the codes in handleUserInput will work

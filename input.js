/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

// const connect = require("./client");
let connection;

const setupInput = function(conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(stdin);
  // why we can invoke this function inside of this function without parameter
  return stdin;
};

const handleUserInput = function(stdin) {
  stdin.on("data", key => {
    if (key === "\u0003") {
      process.exit();
    } else if (key === "w") {
      connection.write("Move: up");
    } else if (key === "a") {
      connection.write("Move: left");
    } else if (key === "s") {
      connection.write("Move: down");
    } else if (key === "d") {
      connection.write("Move: right");
    } else if (key === "2") {
      connection.write("Say: :))");
    }
  });
};

module.exports = { setupInput };

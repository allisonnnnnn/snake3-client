/**
 * Establishes connection with the game server
 */
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log(data);
  });

  // inside the connect function, use the .on method on our conn object to register a "connect" handler (a callback function)
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: CCC");

    // setInterval(() => {
    //   conn.write("Move: up");
    // }, 500);
  });

  return conn;
};

module.exports = { connect };

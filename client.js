const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  conn.on('connect', () => {
    console.log('Successfully connected to game server')
    conn.write('Name: KJF');
  });

  conn.on('data', (data) => {
    console.log('data: ', data);
  });

  
 
  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");


module.exports = {connect};
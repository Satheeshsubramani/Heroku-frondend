const express = require('express');
const http = require('http');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/heroku-frontend'));
app.get("/*", function (request, response) {
  response.sendFile(path.join(__dirname + '/dist/heroku-frontend/index.html'));
});
const server = http.createServer(app);
server.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening %d in %s mode", this.address().port, app.settings.env);
});

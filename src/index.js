// TODO: check how to properly set nodejs config and if needed
process.env.NODE_CONFIG_DIR = "./src/config"


const config = require("./config/config");

const express = require('express'),
  path = require("path"),
  error = require("./error"),
  fs = require("fs"),
  // http = require('http'),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  app = express(),
  https = require('https').createServer({key:fs.readFileSync(config.key_path), cert:fs.readFileSync(config.cert_path), passphrase : "test"}, app),
  debug = require("./util/log")(module);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static(__dirname+'/public'));
https.listen (config.port)


debug.info("running on port "+config.port);



/*

/home/dceub4m/https_certs

Certificate_ca-root_test-apis-vwfce.com.pem
Certificate_intermediate_test-apis-vwfce.com.pem
Certificate_server_test-apis-vwfce.com.pem
test-apis-vwfce.com-key-20200414-093623.pem

*/

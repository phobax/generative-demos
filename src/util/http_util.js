var request = require('request-promise'),
  https = require("https"),
  fs = require("fs"),
  path = require("path"),
  key = fs.readFileSync(path.join(__dirname,"../key.pem")),
  cert = fs.readFileSync(path.join(__dirname,"../cert.pem")),
  debug = require("./log")(module);

process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

module.exports = {

  getHttps : function (host, port, path, params, verbose=false) {

    var agentOptions = {
      host,
      port,
      path,
      key,
      cert,
      rejectUnauthorized: false
    };

    var agent = new https.Agent(agentOptions);
    var url = "https://"+host+":"+port+path;

    if (Object.keys(params).length>0) {
      url += "?";
      for (var key of Object.keys(params)) {
        url += key+"="+params[key]+"&"
      }
    }

    if (verbose) {
      debug.info(url);
    }

    var options = {
      method : "GET",
      uri : url,
      json : true
    }
    return request(options);
  },

  post : function (url, data) {
    var options = {
      method : "POST",
      uri : url,
      body : data,
      json : true
    }

    return request(options);
  },

  postHttps : function (host, port, path, data) {

    var agentOptions = {
      host,
      port,
      path,
      key,
      cert,
      rejectUnauthorized: false
    };

    var agent = new https.Agent(agentOptions);
    var url = "https://"+host+":"+port+path;

    return request({
      url : url,
      method : 'POST',
      agent : agent,
      body : JSON.stringify(data)
    })
  }
}

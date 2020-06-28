const Deployer = require('ssh-deploy-release');

const options = {
    localPath : '.',
    host : '85.214.240.130',
    username : 'dceub4m',
    password : '',
    deployPath : '/home/dceub4m/test_server',
    privateKeyFile : "../strato/private_key_dceub4m_openssl.ppk",
    currentReleaseLink : "current"
};

function deploy() {
  const deployer = new Deployer(options);
  deployer.deployRelease(() => {
    console.log('Ok !')
  });
}



var myArgs = process.argv.slice(2);

switch (myArgs[0]) {
  case "deploy":
    deploy();
    break;
  default:
    console.log("no");
    break;
}
console.log('myArgs: ', myArgs);

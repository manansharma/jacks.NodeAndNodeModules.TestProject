
//Secure SSL in globalAgent
var constants = require('constants');
  
https.globalAgent.options.secureProtocol = 'SSLv2_method';
https.globalAgent.options.secureOptions = constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2;

// globalAgent options in JSON object
https.globalAgent.options = {
  secureProtocol: 'SSLv3_method',
  secureOptions: constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2
}

// Explicitly setting the secureProtocol attribute to 'SSLv2_method'
var options = {
  secureProtocol: 'SSLv2_method',
  secureOptions: constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2
};

// Explicitly setting the secureProtocol attribute to 'SSLv3_method'
var options_2 = {
  secureProtocol: 'SSLv3_method',
  secureOptions: constants.SSL_OP_NO_SSLv3 | constants.SSL_OP_NO_SSLv2
};
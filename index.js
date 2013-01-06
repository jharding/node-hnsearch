var request = require('request')
  , qs = require('querystring')
  , f = require('util').format;

var endpoints = {
  items: 'http://api.thriftdb.com/api.hnsearch.com/items/_search'
, users: 'http://api.thriftdb.com/api.hnsearch.com/users/_search'
};

module.exports = {
  submissions: function(query, cb) {
    query['filters[fields][type]'] = 'submission';
    search(endpoints.items, query, cb);
  }

, comments: function(query, cb) {
    query['filters[fields][type]'] = 'comment';
    search(endpoints.items, query, cb);
  }

, users: function(query, cb) {
    search(endpoints.users, query, cb);
  }
};

function search(endpoint, query, cb) {
  var opts = {
    url: f('%s?%s', endpoint, qs.stringify(query))
  , json: true
  };

  request.get(opts, function(err, response, body) { cb(err, body); });
}

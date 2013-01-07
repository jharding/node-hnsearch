[![build status](https://secure.travis-ci.org/jharding/node-hnsearch.png?branch=master)](http://travis-ci.org/jharding/node-hnsearch)

node-hnsearch
=============

node-hnsearch is a thin wrapper around the [HNSearch REST API][1]. Since node-hnsearch is such a thin wrapper, consulting the documentation provided by HNSearch is highly advised.

Installation
------------

### Download

```
$ npm install hnsearch
```

### Require

```javascript
var hnsearch = require('hnsearch');
```

API
---

### hnsearch.submissions(query, cb)
### hnsearch.comments(query, cb)
### hnsearch.users(query, cb)

Use for querying submissions, comments, and users, respectively, against HNSearch's search API. `query` is the object containing the key-value pairs that the query string will be composed of. `cb` is the callback function that will be called when the response from HNSearch is received. It should support a `(err, response)` signature.

Details about the query fields and the `response` object can be found on the [HNSearch API website][1].

Example
-------

```javascript
var hnsearch = require('hnsearch');

hnsearch.submissions({ q: 'javascript semicolons' }, function(err, response) {
  if (err) { process.exit(1); }

  console.log('Comments about semicolons and javascript!');
  response.results.forEach(function(result) { 
    console.log(result.item.text); 
  });
});
```

Testing
-------

No tests yet! As soon as there are some though, you'll be able to run them as follows:

```
$ cd node-hnsearch
$ npm test
```

Issues
------

Found a bug? Create an issue on GitHub.

https://github.com/jharding/node-hnsearch/issues

Versioning
----------

For transparency and insight into the release cycle, releases will be numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

License
-------

Copyright (c) 2013 [Jake Harding](http://thejakeharding.com)  
Licensed under the MIT License.

[1]: http://www.hnsearch.com/api

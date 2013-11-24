more
====

[![NPM][1]](https://nodei.co/npm/node-more/)

Terminal pager of long output for nodejs

Installation
------------

Install with `npm`:

``` bash
$ npm install node-more
```

Or add it to the `"dependencies"` section of your _package.json_ file.

Example
-------

``` js
var print = require('node-more');

print(Array(100).join('long text\n')).done(function(){
    process.stdin.pause();
    console.log('end');
});
```

[1]: https://nodei.co/npm/node-more.png?downloads=true&stars=true
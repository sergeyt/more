[![Deps Status](https://david-dm.org/sergeyt/more.png)](https://david-dm.org/sergeyt/more)
[![devDependency Status](https://david-dm.org/sergeyt/more/dev-status.svg)](https://david-dm.org/sergeyt/more#info=devDependencies)

[![NPM](https://nodei.co/npm/node-more.png?downloads=true&stars=true)](https://nodei.co/npm/node-more/)

# more

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

# is-file-promise [![Build Status][travis-image]][travis-url]
> Promise version of is-file

## Install

`npm install is-file-promise`

## Usage

```javascript
var isFileP = require("is-file-promise");

isFileP("Downloads/monkey.txt").then(function(ret){
    console.log("Found it!");
    return;
}).catch(function(e){
    throw Error(e);
});
```

## Copyright

2015 Adam Stokes <adam.stokes@ubuntu.com>

## License

MIT

[travis-image]: https://travis-ci.org/battlemidget/is-file-promise.svg?branch=master
[travis-url]: https://travis-ci.org/battlemidget/is-file-promise


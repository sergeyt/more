var Q = require('q'),
    waitkey = require('waitkey');

Array.prototype.take = function(count) {
    var result = [];
    for (var i = 0; i < this.length && i < count; i++) {
        result.push(this[i]);
    }
    return result;
};

Array.prototype.skip = function(count) {
    if (this.length === 0){
        return [];
    }
    var result = [];
    var i = 0;
    while (i < count && i < this.length){
        i++;
    }
    while (i < this.length) {
        result.push(this[i++]);
    }
    return result;
};

function print(text, max) {
    if (arguments.length <= 1){
        max = 25;
    }

    var lines = text.split('\n');
    if (lines.length <= max){
        process.stdin.resume();
        console.log(text);
        return Q(text);
    }

    console.log(lines.take(max).join('\n'));
    var rest = lines.skip(max).join('\n');
    var def = Q.defer();

    waitkey(['space','enter'], function(){
        print(rest, max).done(function(v){
            def.resolve(v);
        });
    });

    return def.promise;
}

module.exports = print;
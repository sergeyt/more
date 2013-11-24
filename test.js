var print = require('./index');

print(Array(100).join('long text\n')).done(function(){
    process.stdin.pause();
    console.log('end');
});

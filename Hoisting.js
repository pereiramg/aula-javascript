function fn() {
    console.log(text);
    var text = 'exemplo';
    console.log(text);
}
fn();

function fn2() {
    log('hoisting de funcao');
    function log(value) {
        console.log(value);
    }
}
fn2();
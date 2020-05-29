function init(){
    const exemplo = 'Essa variavel';
    return function () {
        console.log(`1 - O valor da variavel exemplo e: ${exemplo}`);
        return function () {
            console.log(`2 - O valor da variavel exemplo e: ${exemplo}`);
            return function () {
                console.log(`3 - O valor da variavel exemplo e: ${exemplo}`);
            }
        }
    }
}
const initfn1 = init();
const initfn2 = initfn1();
const initfn3 = initfn2();
initfn3();
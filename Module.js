function myFunction() {
    console.log('hello from myfunction!');
}
function myFunction2() {
    console.log('hello from myfunction2!');
}

//firest export
module.exports=myFunction;

//second export
module.exports=myFunction2



module.exports = {
    foo:'bar',
    myFunction1:myFunction,
    myFunction2:myFunction2,
}
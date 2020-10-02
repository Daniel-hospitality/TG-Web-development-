const defaultResult = 0;
let currenResult = defaultResult;
//var let en const zijn globolscope is const let of var  in de function dan is het geen globolscope//

function add(num1, num2) {
    const result = num1 + num2;
    // alert('the results is ' + result);
    return result;

}
//calls the function//
 currentResult = add(1, 2);
//  currentResult = add(5, 5);

//currenResult = (currenResult + 10) * 3 / 2 - 1; // reken voorbeeld//

let calculationDescription = `(${defaultResult} + 10) *3 / 2 -1`;

//String=text voorbeeld//
// template literal ${} methode and ` `qoutes//


outputResult(currentResult, calculationDescription);

//behandeld Let, Const, Function, callfunction, datatypes, number, strings, operators//



// Switch
function calculate(number1, operator, number2){
  let result
switch (operator){
    case '+':
        result =number1 + number2
        break
    case '-':
        result =number1 - number2
        break        
    case '*':
        result =number1 * number2
        break
    case '/':
        result =number1 / number2
        break
        default:
            console.log('Sem expreção');
            break  
        }
        return result
}
console.log(calculate(89, '*', 8));
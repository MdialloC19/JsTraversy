// Challenge calculator

function calculator(num1,num2,opp){
    switch(opp){
        case "+":
            console.log(`sum of ${num1}+${num2}=${num1+num2}`);
            break;
        case "-":
            console.log(`diff of ${num1}-${num2}=${num1-num2}`);
            break;
        case "*":
            console.log(`multiplication of ${num1}*${num2}=${num1*num2}`);
            break;
        case "/":
            console.log(`sdiv of ${num1}/${num2}=${num1/num2}`);
        break;
        default:
            console.log("Operation invalid");
    }
}

calculator(1,1,"-");
function calculator(block) {
    let flag = false;
    let calc = {};
    //console.log(this.getelementsbyclassname('result'));
    for (let i = 0; i < block.children.length; i++) {
        //console.log(block.children[i]);
        console.log(block.children[i].classList[0]);
        switch (block.children[i].classList[0]){
            case 'result':
                calc.result = block.children[i];
                calc.result.addEventListener('input', ()=>{
                    //clear word and duble operator
                    calc.result.value = calc.result.value.replace(/[^[\d\*\+-\/]/g,'');
                    calc.result.value = calc.result.value.replace(/(\+[\+\-\*\/])$/,'\+');
                    calc.result.value = calc.result.value.replace(/(\*[\+\-\*\/])$/,'\*');
                    calc.result.value = calc.result.value.replace(/(\-[\+\-\*\/])$/,'\-');
                    calc.result.value = calc.result.value.replace(/(\/[\+\-\*\/])$/,'\/');
                });
                break;
            case 'backspace':
                block.children[i].onclick = ()=>{
                    calc.result.value = calc.result.value.slice(0,-1);
                };
                break;
            case 'clean':
                block.children[i].onclick = ()=>{
                    calc.result.value = '';
                    flag = false;
                };
                break;
            case 'enter':
                block.children[i].onclick = ()=>{
                    let operator = calc.result.value.replace(/\d/g, '').split('');
                    let expression = calc.result.value.split(/[\+\-\*\/]/);
                    if (expression.includes('')) {
                        calc.result.value = 'error!';
                        return;
                    }
                    if (operator.includes('=') || (expression.length === 1)) return;
                    let result = expression[0];
                    for (let i = 1; i < expression.length; i++) {
                        switch (operator[i-1]) {
                            case '+': result += expression[i]; break;   
                            case '-': result -= expression[i]; break;
                            case '*': result *= expression[i]; break;
                            case '/': result /= expression[i]; break;
                                
                        }
                    }
                    flag = true;
                    calc.result.value = calc.result.value + ' = ' + result;
                };
                break;
            default:
                block.children[i].onclick = ()=>{
                    if (flag) {
                        calc.result.value = '';
                        flag = false;
                    }
                    if (calc.result.value == 'error!') calc.result.value = '';
                    if ( /[\*\+-\/]/.test(block.children[i].innerHTML) ) {
                        if ( !/[\*\+-\/]/.test(calc.result.value.at(-1)) ) calc.result.value += block.children[i].innerHTML;
                    } else calc.result.value += block.children[i].innerHTML;
                };
                break;
        }
    }
}


calculator(document.getElementById('calculator'));

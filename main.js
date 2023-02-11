function calculator1(block) {
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
// calculator1(document.getElementById('calculator'));

class Calculator{
    constructor(setting){
        this.setting = setting;
    }
    create_button(tag_type,tag_class,tag_innder = ''){
        console.log(123);
        let elem = document.createElement(tag_type);
        elem.setAttribute('class',tag_class);
        if (tag_innder != '') elem.innerHTML = tag_innder;
        setting.block.append(elem);
    }
}

function new_calculator(setting){
    let calculator = new Calculator(setting);
    console.log(setting.block);
    //create buttons
    calculator.create_button('input','result');
    calculator.create_button('div','plus','+');
    calculator.create_button('div','minus','-');
    calculator.create_button('div','multiply','*');
    calculator.create_button('div','divide','-');
    calculator.create_button('div','n_1 num','1');
    calculator.create_button('div','n_2 num','2');
    calculator.create_button('div','n_3 num','3');
    calculator.create_button('div','n_4 num','4');
    calculator.create_button('div','n_5 num','5');
    calculator.create_button('div','n_6 num','6');
    calculator.create_button('div','n_7 num','7');
    calculator.create_button('div','n_8 num','8');
    calculator.create_button('div','n_9 num','9');
    calculator.create_button('div','n_0 num','0');
    calculator.create_button('div','enter','enter');
    calculator.create_button('div','clean','clean');
    calculator.create_button('div','backspace','backspace');
    // let buttons = [
    //     'div','plus','+'
    //     'div','minus','-'
    //     'div','multiply','*'
    //     'div','divide','/'
    //     'div','n_1 num','1'
    //     'div','n_2 num','2'
    //     'div','n_3 num','3'
    //     'div','n_4 num','4'
    //     'div','n_5 num','5'
    //     'div','n_6 num','6'
    //     'div','n_7 num','7'
    //     'div','n_8 num','8'
    //     'div','n_9 num','9'
    //     'div','n_0 num','0'
    //     'div','enter',
    //     'div','clean',
    //     'div','backspace',
    // ]
}


let setting = {
    block: document.getElementById('calculator'),
    width: null,
    height: null,
    style: null,
    history: null,
}
console.log(new_calculator(setting));
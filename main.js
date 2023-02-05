class Calculator{
    constructor(main_block,default_style){
        if (default_style){
            main_block.style.display = "flex";
            main_block.style.flexDirection = "column";
            main_block.style.backgroundColor = "silver";
        }
        let buttons = [1,2,3,4,5,6,7,8,9,'current','result','plus','multiply','divide','clear','enter','backspase'];
        let elem;
        for (let i = 0; i < buttons.length; i++) {
            elem = document.createElement('div');
            elem.innerHTML = buttons[i];
            if (typeof(buttons[i]) === 'number') elem.setAttribute('class','num')
            else elem.setAttribute('class',buttons[i]);
            main_block.append(elem);
        }
    }
}

let c = new Calculator(document.getElementById('calc'),true);
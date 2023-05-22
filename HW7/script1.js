let Calc = function(){
    this.state = false;
    this.a = null;
    this.b = null;
    this.operation = null;

    this.calcStart = function(newState){
        let reg = /(?:on|off)/g;
        if (!reg.test(newState)) return;
        if (newState === 'on'){
            this.state = true;
        }else{
            this.state = false;
            this.a = null;
            this.b = null;
            this.operation = null;
        }
    }

    this.getA = function(){
        if(!this.state) return;
        return this.a;
    };

    this.getB = function(){
        if(!this.state) return;
        return this.b;
    };

    this.setA = function(numA){
        if(!this.state) return;
        if (isNan(numA)) return;
        this.a = +numA;
    };

    this.setB = function(numB){
        if(!this.state) return;
        if (isNan(numB)) return;
        this.b = +numB;
    };

    this.setOperation = function(oper){
    if(!this.state) return;
    let reg = /[\+\-\*\/]/g;
    if (oper.length > 1) return;
    if (!reg.test(oper)) return;
    this.operation = oper;
    };

    this.getRezult = function(){
        if(!this.state) return;
        if (this.a === null || 
            this.b === null ||
            !this.operation) return;
        switch (this.operation){
            case '+':
                return this.a + this.b;
            case '-':
                return this.a - this.b;
            case '*':
                return this.a * this.b;
            case '/':
                return this.a / this.b;
            default:
                return; 
        }
    }
}


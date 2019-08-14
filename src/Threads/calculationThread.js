let calculationThread = {
    prevNumber: 0,
    nextNumber: 0,
    result: 0,
    haveToCalculate: false,

    start: function(screen, operation){
        if(this.haveToCalculate){
            this.nextNumber = parseFloat(screen);
            this.operate(operation);
        }
        else{
            this.setPrevNumber(screen);
        }
    },

    setPrevNumber: function(screen){
        this.prevNumber = parseFloat(screen);
        this.haveToCalculate = true;
    },

    operate: function(operation){
        if(operation === "+"){
            this.result += this.prevNumber + this.nextNumber;
        }
        if(operation === "-"){
            this.result += this.prevNumber - this.nextNumber;
        }
        this.reset();
    },

    reset: function(){
        this.prevNumber = 0;
        this.nextNumber = 0;
    },
}

export default calculationThread;
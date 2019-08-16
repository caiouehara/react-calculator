let calculationThread = {
    prevNumber: 0,  // First Number
    nextNumber: 0,
    result: 0,
    haveToCalculate: false,
    workingNumber: "",

    start: function(workingNumber, operation){
        if(this.haveToCalculate){
            this.nextNumber = parseFloat(workingNumber);
            console.log(workingNumber);
            this.operate(operation);
        }
        else{
            this.setPrevNumber(workingNumber);
        }
    },

    setPrevNumber: function(workingNumber){
        this.prevNumber = parseFloat(workingNumber);
        this.haveToCalculate = true;
    },

    operate: function(operation){
        if(operation === "+"){
            this.result += this.prevNumber + this.nextNumber;
        }
        if(operation === "-"){
            this.result += this.prevNumber - Math.abs(this.nextNumber) ;
        }
        console.log(this.prevNumber,this.nextNumber, this.result);
        this.reset();
    },
    
    reset: function(){
        this.prevNumber = 0;
        this.nextNumber = 0;
    },
}

export default calculationThread;
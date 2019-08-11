let calculationThread = {

    screen: "",
    toBeCalculated: [],
    result: undefined,

    update: function (newScreen) {
        this.screen += newScreen;
    },

    calculate: function (operation) {
        this.toBeCalculated.push(parseInt(this.screen));
        this.screen = "";

        if(operation === "+"){
            this.result = this.toBeCalculated.reduce((accumulator, currentValue)=> accumulator + currentValue);
        }

        console.log(this.result);
    }


}

export default calculationThread;
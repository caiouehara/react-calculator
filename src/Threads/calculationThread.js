let calculationThread = {
    
    toBeCalculated: "",

    update: function(newScreen){
        this.toBeCalculated += newScreen;
    }

}

export default calculationThread;
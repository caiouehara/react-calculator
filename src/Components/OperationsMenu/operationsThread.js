let operationsThread = {
    // Control Conditionals for Operation
    controlWire: {
        
    },

    // data for Numbers and operations
    operationsToDo: [],

    results: 0,

    operationsDo() {
        // Delete repeat operationType (Have to fix)
        this.operationsToDo.splice(3, 1);

        // Single Operation
        this.operationsToDo.map((currentValue, index, array) => {
            if (currentValue === "SUM") {
                this.results = (parseInt(array[0]) + parseInt(array[2]));
            }
        });

    },

    operationsFinish() {
        this.operationsToDo = [];
        return String(this.results);
    },
}

export default operationsThread;
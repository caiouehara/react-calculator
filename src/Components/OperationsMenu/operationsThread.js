let operationsThread = {
    // Control Conditionals for Operation
    controlWire: {
        firstOperationDone: false,
    },
    // data for Numbers and operations
    operationsToDo: [],

    results: [],

    operationsDo() {
        // Sum Results
        if (this.controlWire.firstOperationDone) {
            this.results.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            });
        }

        // Delete repeat operationType (Have to fix)
        this.operationsToDo.splice(3,1);

        // Single Operation
        this.operationsToDo.map((currentValue, index, array) => {
            if (currentValue === "SUM") {
                this.results.push(parseInt(array[0]) + parseInt(array[2]));
                this.operationsFinish();
            }
        });

    },

    operationsFinish() {
        this.controlWire.firstOperationDone = true;
        this.operationsToDo = [];
    },
}

export default operationsThread;
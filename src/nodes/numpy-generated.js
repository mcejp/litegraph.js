//////////////////////////////////////////////////////////////////////////
// FILE GENERATED FROM MODULE graphexec.nodes.numpy. DO NOT EDIT BY HAND.
//////////////////////////////////////////////////////////////////////////

(function(global) {
    const LiteGraph = global.LiteGraph;


    //////////////////////////////////////////////////////////////////////////

    function numpy_add() {
        this.addInput("a", "numpy.ndarray,number");
        this.addInput("b", "numpy.ndarray,number");
        this.addOutput("result", "numpy.ndarray");

        this.properties = {
        };


    }

    numpy_add.title = "Add";
    numpy_add.desc = "TODO";


    LiteGraph.registerNodeType("numpy/add", numpy_add);

    //////////////////////////////////////////////////////////////////////////

    function numpy_div() {
        this.addInput("a", "numpy.ndarray,number");
        this.addInput("b", "numpy.ndarray,number");
        this.addOutput("result", "numpy.ndarray");

        this.properties = {
        };


    }

    numpy_div.title = "Divide";
    numpy_div.desc = "TODO";


    LiteGraph.registerNodeType("numpy/div", numpy_div);

    //////////////////////////////////////////////////////////////////////////

    function numpy_mul() {
        this.addInput("a", "numpy.ndarray,number");
        this.addInput("b", "numpy.ndarray,number");
        this.addOutput("result", "numpy.ndarray");

        this.properties = {
        };


    }

    numpy_mul.title = "Multiply";
    numpy_mul.desc = "TODO";


    LiteGraph.registerNodeType("numpy/mul", numpy_mul);
})(this);
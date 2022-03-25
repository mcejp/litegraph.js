//////////////////////////////////////////////////////////////////////////
// FILE GENERATED FROM MODULE symbolgen_ops. DO NOT EDIT BY HAND.
//////////////////////////////////////////////////////////////////////////

(function(global) {
    const LiteGraph = global.LiteGraph;


    //////////////////////////////////////////////////////////////////////////

    function symbolgen_rng() {
        this.addOutput("rng", "Rng");

        this.properties = {
            seed: 0,
        };

        this.addWidget("slider", "Seed", this.properties.seed, undefined, { property: "seed", min: 0, max: 1000, resolution: 1 });

    }

    symbolgen_rng.title = "RNG";
    symbolgen_rng.desc = "TODO";



    LiteGraph.registerNodeType("symbolgen/rng", symbolgen_rng);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_binary_noise() {
        this.addInput("rng", "Rng");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            width: 5,
            height: 6,
            symmetry: "NONE",
            minThreshold: 0.5,
            maxThreshold: 0.8,
        };

        this.addWidget("slider", "Width", this.properties.width, undefined, { property: "width", min: 2, max: 10, resolution: 1 });
        this.addWidget("slider", "Height", this.properties.height, undefined, { property: "height", min: 2, max: 10, resolution: 1 });
        this.addWidget("combo", "Symmetry", this.properties.symmetry, undefined, { property: "symmetry", values: ["NONE", "HORIZONTAL", "VERTICAL", "QUADRANT"] });

    }

    symbolgen_binary_noise.title = "Binary noise";
    symbolgen_binary_noise.desc = "TODO";


    symbolgen_binary_noise.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/binary_noise", symbolgen_binary_noise);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_convolution() {
        this.addInput("images", "numpy.ndarray");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            func: "single",
            omega: 1.5,
        };

        this.addWidget("combo", "Func", this.properties.func, undefined, { property: "func", values: "single dist dist_2 exp_dist sinc_dist cos_dist2 sin_dist2" });
        this.addWidget("slider", "Omega", this.properties.omega, undefined, { property: "omega", min: 0, max: 10 });

    }

    symbolgen_convolution.title = "Convolution";
    symbolgen_convolution.desc = "TODO";


    symbolgen_convolution.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/convolution", symbolgen_convolution);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_scale() {
        this.addInput("images", "numpy.ndarray");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            cellSize: 16,
            order: 0,
        };

        this.addWidget("slider", "Cell size", this.properties.cellSize, undefined, { property: "cellSize", min: 2, max: 40, resolution: 1 });
        this.addWidget("slider", "Order", this.properties.order, undefined, { property: "order", min: 0, max: 4, resolution: 1 });

    }

    symbolgen_scale.title = "Scale";
    symbolgen_scale.desc = "TODO";


    symbolgen_scale.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/scale", symbolgen_scale);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_threshold() {
        this.addInput("images", "numpy.ndarray");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            percentile: 50,
        };

        this.addWidget("slider", "Percentile", this.properties.percentile, undefined, { property: "percentile", min: 0, max: 100 });

    }

    symbolgen_threshold.title = "Threshold";
    symbolgen_threshold.desc = "TODO";


    symbolgen_threshold.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/threshold", symbolgen_threshold);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_mosaic() {
        this.addInput("images", "numpy.ndarray");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            type: "NONE",
        };

        this.addWidget("combo", "Type", this.properties.type, undefined, { property: "type", values: ["NONE", "ALTERNATING_DIAGONAL", "FOUR_CORNERS", "DELAUNAY"] });

    }

    symbolgen_mosaic.title = "Mosaic";
    symbolgen_mosaic.desc = "TODO";


    symbolgen_mosaic.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/mosaic", symbolgen_mosaic);

    //////////////////////////////////////////////////////////////////////////

    function symbolgen_colorize() {
        this.addInput("rng", "Rng");
        this.addInput("images", "numpy.ndarray");
        this.addOutput("images", "numpy.ndarray");

        this.properties = {
            s_min: 0.2,
            s_max: 0.8,
            l_min: 0.3,
            l_max: 0.7,
        };

        this.addWidget("slider", "Saturation min", this.properties.s_min, undefined, { property: "s_min", min: 0, max: 1 });
        this.addWidget("slider", "Saturation max", this.properties.s_max, undefined, { property: "s_max", min: 0, max: 1 });
        this.addWidget("slider", "Lightness min", this.properties.l_min, undefined, { property: "l_min", min: 0, max: 1 });
        this.addWidget("slider", "Lightness max", this.properties.l_max, undefined, { property: "l_max", min: 0, max: 1 });

    }

    symbolgen_colorize.title = "Colorize";
    symbolgen_colorize.desc = "TODO";


    symbolgen_colorize.prototype.onDrawBackground = symbolgen_imshow1;

    LiteGraph.registerNodeType("symbolgen/colorize", symbolgen_colorize);
})(this);
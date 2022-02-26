//////////////////////////////////////////////////////////////////////////
// FILE GENERATED FROM MODULE hexland_ops. DO NOT EDIT BY HAND.
//////////////////////////////////////////////////////////////////////////

(function(global) {
    const LiteGraph = global.LiteGraph;


    //////////////////////////////////////////////////////////////////////////

    function hexland_rng() {
        this.addOutput("rng", "RandomGenerator");

        this.properties = {
            seed: 0,
        };

        this.addWidget("slider", "Seed", this.properties.seed, undefined, { property: "seed", min: 0, max: 1000, resolution: 1 });

    }

    hexland_rng.title = "RNG";
    hexland_rng.desc = "TODO";


    LiteGraph.registerNodeType("hexland/rng", hexland_rng);

    //////////////////////////////////////////////////////////////////////////

    function hexland_perlin_noise() {
        this.addInput("rng", "RandomGenerator");
        this.addInput("width", "number");
        this.addInput("height", "number");
        this.addOutput("map", "numpy.ndarray");

        this.properties = {
            width: 40,
            height: 25,
            offset: 0,
            scale: 1,
            wavelength: 8,
            numOctaves: 1,
        };

        this.addWidget("number", "Offset", this.properties.offset, undefined, { property: "offset", step: 1 });
        this.addWidget("number", "Amplitude", this.properties.scale, undefined, { property: "scale", step: 1 });
        this.addWidget("number", "Wavelength", this.properties.wavelength, undefined, { property: "wavelength", step: 1 });
        this.addWidget("number", "Number of octaves", this.properties.numOctaves, undefined, { property: "numOctaves", step: 1 });

        this.size = this.computeSize();
        this.size[1] *= 2;
    }

    hexland_perlin_noise.title = "Perlin noise";
    hexland_perlin_noise.desc = "TODO";

    hexland_perlin_noise.prototype.onDrawBackground = NodeWithPreview_onDrawBackground;
    hexland_perlin_noise.prototype.onProcessingResults = NodeWithPreview_onProcessingResults;

    LiteGraph.registerNodeType("hexland/perlin_noise", hexland_perlin_noise);

    //////////////////////////////////////////////////////////////////////////

    function hexland_diamond_square() {
        this.addInput("rng", "RandomGenerator");
        this.addOutput("map", "numpy.ndarray");

        this.properties = {
            square_size: 32,
            num_squares_x: 4,
            num_squares_y: 1,
            primary_scale: 1,
            roughness: 1,
        };


        this.size = this.computeSize();
        this.size[1] *= 2;
    }

    hexland_diamond_square.title = "Diamond-square";
    hexland_diamond_square.desc = "TODO";

    hexland_diamond_square.prototype.onDrawBackground = NodeWithPreview_onDrawBackground;
    hexland_diamond_square.prototype.onProcessingResults = NodeWithPreview_onProcessingResults;

    LiteGraph.registerNodeType("hexland/diamond_square", hexland_diamond_square);

    //////////////////////////////////////////////////////////////////////////

    function hexland_normalize_range() {
        this.addInput("array", "numpy.ndarray");
        this.addOutput("array", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_normalize_range.title = "Normalize to 0-1";
    hexland_normalize_range.desc = "TODO";


    LiteGraph.registerNodeType("hexland/normalize_range", hexland_normalize_range);
})(this);
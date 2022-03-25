//////////////////////////////////////////////////////////////////////////
// FILE GENERATED FROM MODULE hexland_ops. DO NOT EDIT BY HAND.
//////////////////////////////////////////////////////////////////////////

(function(global) {
    const LiteGraph = global.LiteGraph;


    //////////////////////////////////////////////////////////////////////////

    function hexland_assign_biome() {
        this.addInput("temperature", "numpy.ndarray");
        this.addInput("precipitation", "numpy.ndarray");
        this.addOutput("biomeId", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_assign_biome.title = "Assign biome";
    hexland_assign_biome.desc = "TODO";


    LiteGraph.registerNodeType("hexland/assign_biome", hexland_assign_biome);

    //////////////////////////////////////////////////////////////////////////

    function hexland_biome_to_rgb() {
        this.addInput("biomeId", "numpy.ndarray");
        this.addInput("elevation", "numpy.ndarray");
        this.addOutput("rgb", "numpy.ndarray");
        this.addOutput("legend", "dict");

        this.properties = {
        };


    }

    hexland_biome_to_rgb.title = "Colorize biomes";
    hexland_biome_to_rgb.desc = "TODO";


    LiteGraph.registerNodeType("hexland/biome_to_rgb", hexland_biome_to_rgb);

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

    function hexland_flora_grass() {
        this.addInput("temperature", "numpy.ndarray");
        this.addInput("precipitation", "numpy.ndarray");
        this.addOutput("density", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_flora_grass.title = "Flora - grass";
    hexland_flora_grass.desc = "TODO";


    LiteGraph.registerNodeType("hexland/flora_grass", hexland_flora_grass);

    //////////////////////////////////////////////////////////////////////////

    function hexland_flora_tree_c() {
        this.addInput("temperature", "numpy.ndarray");
        this.addInput("precipitation", "numpy.ndarray");
        this.addOutput("density", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_flora_tree_c.title = "Flora - tree, conifer";
    hexland_flora_tree_c.desc = "TODO";


    LiteGraph.registerNodeType("hexland/flora_tree_c", hexland_flora_tree_c);

    //////////////////////////////////////////////////////////////////////////

    function hexland_ground_color() {
        this.addInput("temperature", "numpy.ndarray");
        this.addInput("precipitation", "numpy.ndarray");
        this.addOutput("rgb", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_ground_color.title = "Ground color";
    hexland_ground_color.desc = "TODO";


    LiteGraph.registerNodeType("hexland/ground_color", hexland_ground_color);

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
            variant: 0,
        };

        this.addWidget("number", "Offset", this.properties.offset, undefined, { property: "offset", step: 1 });
        this.addWidget("number", "Amplitude", this.properties.scale, undefined, { property: "scale", step: 1 });
        this.addWidget("number", "Wavelength", this.properties.wavelength, undefined, { property: "wavelength", step: 1 });
        this.addWidget("number", "Number of octaves", this.properties.numOctaves, undefined, { property: "numOctaves", min: -10, step: 1, integerStep: true });
        this.addWidget("number", "Variant", this.properties.variant, undefined, { property: "variant", min: 0, step: 1, integerStep: true });

        this.size = this.computeSize();
        this.size[1] *= 2;
    }

    hexland_perlin_noise.title = "Perlin noise";
    hexland_perlin_noise.desc = "TODO";

    hexland_perlin_noise.prototype.onDrawBackground = NodeWithPreview_onDrawBackground;
    hexland_perlin_noise.prototype.onProcessingResults = NodeWithPreview_onProcessingResults;

    LiteGraph.registerNodeType("hexland/perlin_noise", hexland_perlin_noise);

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

    function hexland_suitability_wheat() {
        this.addInput("temperature", "numpy.ndarray");
        this.addInput("precipitation", "numpy.ndarray");
        this.addOutput("map", "numpy.ndarray");

        this.properties = {
        };


    }

    hexland_suitability_wheat.title = "Crop suitability: wheat";
    hexland_suitability_wheat.desc = "TODO";


    LiteGraph.registerNodeType("hexland/suitability_wheat", hexland_suitability_wheat);

    //////////////////////////////////////////////////////////////////////////

    function hexland_view_hex_map() {
        this.addInput("map", "numpy.ndarray");
        this.addInput("legend", "dict");

        this.properties = {
        };


        this.size = this.computeSize();
        this.size[1] *= 2;
    }

    hexland_view_hex_map.title = "View hex map";
    hexland_view_hex_map.desc = "TODO";

    hexland_view_hex_map.prototype.onDrawBackground = NodeWithPreview_onDrawBackground;
    hexland_view_hex_map.prototype.onProcessingResults = NodeWithPreview_onProcessingResults;

    LiteGraph.registerNodeType("hexland/view_hex_map", hexland_view_hex_map);

    //////////////////////////////////////////////////////////////////////////

    function hexland_view_3d_map() {
        this.addInput("elevation", "numpy.ndarray");
        this.addInput("color", "numpy.ndarray");

        this.properties = {
        };


        this.size = this.computeSize();
        this.size[1] *= 2;
    }

    hexland_view_3d_map.title = "View 3D surface map";
    hexland_view_3d_map.desc = "TODO";

    hexland_view_3d_map.prototype.onDrawBackground = NodeWithPreview_onDrawBackground;
    hexland_view_3d_map.prototype.onProcessingResults = NodeWithPreview_onProcessingResults;

    LiteGraph.registerNodeType("hexland/view_3d_map", hexland_view_3d_map);

    //////////////////////////////////////////////////////////////////////////

    function hexland_write_mesh() {
        this.addInput("elevation", "numpy.ndarray");
        this.addInput("rgb", "numpy.ndarray");
        this.addInput("density_grass", "numpy.ndarray");
        this.addInput("density_tree_c", "numpy.ndarray");

        this.properties = {
            filename: "mesh.glb",
        };


    }

    hexland_write_mesh.title = "Generate \u0026 write mesh to file";
    hexland_write_mesh.desc = "TODO";


    LiteGraph.registerNodeType("hexland/write_mesh", hexland_write_mesh);
})(this);
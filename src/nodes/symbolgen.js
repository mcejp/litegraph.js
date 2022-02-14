/**
 * @param {number[][][]} images
 * @param {CanvasRenderingContext2D} ctx
 * @param {number[]} size
 */
function drawToCanvas(images, ctx, size) {
    const image = images[0];
    const count = images.length;

    if (count === 0) {
        return;
    }

    const h = images[0].length;
    const w = images[0][0].length;

    const pixelSize = Math.max(Math.floor(Math.min(size[0] / image[0].length, size[1] / image.length)), 1);

    let min = 9999;
    let max = -9999;

    for (let i = 0; i < count; i++) {
        for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
                if (min > images[i][y][x]) {
                    min = images[i][y][x];
                }
                if (max < images[i][y][x]) {
                    max = images[i][y][x];
                }
            }
        }
    }

    if (max - min < 0.001) {
        min = -9999;
    }

    for (let y = 0; y < h; y++) {
        for (let x = 0; x < w; x++) {
            const intensity = Math.round((image[y][x] - min) / (max - min) * 255);
            ctx.fillStyle = `rgb(${intensity}, ${intensity}, ${intensity})`
            ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
        }
    }
}

(function(global) {
    var LiteGraph = global.LiteGraph;

    function BinaryNoise() {
        this.addOutput("images", "ListOfFloatArray2D");
        this.properties = {
            seed: 0,
            width: 5,
            height: 6,
            count: 1,
            minThreshold: 0.5,
            maxThreshold: 0.8,
        };

        this.addWidget("number", "Seed", this.properties.seed, undefined, { property: "seed", min: 0, max: 1000, step: 1} );
        this.addWidget("number", "Width", this.properties.width, undefined, { property: "width", min: 2, max: 10, step: 1} );
        this.addWidget("number", "Height", this.properties.height, undefined, { property: "height", min: 2, max: 10, step: 1} );
        this.addWidget("number", "Min threshold", this.properties.minThreshold, undefined, { property: "minThreshold" } );
        this.addWidget("number", "Max threshold", this.properties.maxThreshold, undefined, { property: "maxThreshold" } );
    }

    BinaryNoise.title = "Binary noise";
    BinaryNoise.desc = "TODO";

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    BinaryNoise.prototype.onDrawBackground = function(ctx) {
        if (this.flags.collapsed) {
            return;
        }
        if (this.uiReturns && this.uiReturns.images && this.size[0] > 5 && this.size[1] > 5) {
            drawToCanvas(this.uiReturns.images, ctx, this.size);
        }
    };

    LiteGraph.registerNodeType("symbolgen/binary_noise", BinaryNoise);

    function Convolution() {
        this.addInput("images", "ListOfFloatArray2D");
        this.addOutput("images", "ListOfFloatArray2D");

        this.properties = {
            omega: 1.5,
        };

        this.addWidget("number", "Omega", this.properties.omega, undefined, { property: "omega", min: 0, max: 10 } );
    }

    Convolution.title = "Convolution";
    Convolution.desc = "TODO";

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    Convolution.prototype.onDrawBackground = function(ctx) {
        if (this.flags.collapsed) {
            return;
        }
        if (this.uiReturns && this.uiReturns.images && this.size[0] > 5 && this.size[1] > 5) {
            drawToCanvas(this.uiReturns.images, ctx, this.size);
        }
    };

    LiteGraph.registerNodeType("symbolgen/convolution", Convolution);

    function Scale() {
        this.addInput("images", "ListOfFloatArray2D");
        this.addOutput("images", "ListOfFloatArray2D");

        this.properties = {
            cellSize: 16,
            order: 1,
        };

        this.addWidget("number", "Cell size", this.properties.cellSize, undefined, { property: "cellSize", min: 2, max: 40 } );
    }

    Scale.title = "Scale";
    Scale.desc = "TODO";

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    Scale.prototype.onDrawBackground = function(ctx) {
        if (this.flags.collapsed) {
            return;
        }
        if (this.uiReturns && this.uiReturns.images && this.size[0] > 5 && this.size[1] > 5) {
            drawToCanvas(this.uiReturns.images, ctx, this.size);
        }
    };

    LiteGraph.registerNodeType("symbolgen/scale", Scale);

    function Threshold() {
        this.addInput("images", "ListOfFloatArray2D");
        this.addOutput("images", "ListOfFloatArray2D");

        this.properties = {
            percentile: 50,
        };

        this.addWidget("number", "Percentile", this.properties.percentile, undefined, { property: "percentile", min: 1, max: 99 } );
    }

    Threshold.title = "Threshold";
    Threshold.desc = "TODO";

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    Threshold.prototype.onDrawBackground = function(ctx) {
        if (this.flags.collapsed) {
            return;
        }
        if (this.uiReturns && this.uiReturns.images && this.size[0] > 5 && this.size[1] > 5) {
            drawToCanvas(this.uiReturns.images, ctx, this.size);
        }
    };

    LiteGraph.registerNodeType("symbolgen/threshold", Threshold);
})(this);

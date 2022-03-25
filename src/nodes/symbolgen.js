/**
 * @param {GraphNode} node
 * @param {CanvasRenderingContext2D} ctx
 * @param {number[][][]} images
 */
function drawToCanvas(node, ctx, images) {
    const image = images[0];
    const count = images.length;

    if (count === 0) {
        return;
    }

    const h = images[0].length;
    const w = images[0][0].length;

    const y = node.computeSize()[1];

    const availableWidth = node.size[0];
    const availableHeight = node.size[1] - y;

    const pixelSize = Math.max(Math.floor(Math.min(availableWidth / w, availableHeight / h)), 1);

    const x_off = Math.floor((availableWidth - w * pixelSize) / 2);
    const y_off = Math.floor((availableHeight - h * pixelSize) / 2);

    ctx.save();
    ctx.translate(x_off, y + y_off);

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

    ctx.restore();
}

function symbolgen_imshow1(ctx) {
    if (this.flags.collapsed) {
        return;
    }
    if (this.processingResults && this.processingResults.images && this.size[0] > 5 && this.size[1] > 5) {
        drawToCanvas(this, ctx, this.processingResults.images);
    }
};

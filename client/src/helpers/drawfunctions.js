export const drawInitialFunction = (texture, textureCanvas, setTextureCanvas, color) => {
    var ctx = document.createElement("canvas").getContext('2d');
    ctx.canvas.width = 4096;
    ctx.canvas.height = 4096;
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    var tempCanvas = textureCanvas;
    tempCanvas.drawImage(ctx.canvas, 0, 0, ctx.canvas.width, ctx.canvas.height)
    setTextureCanvas(tempCanvas);
    texture.needsUpdate = true;
}

export const drawColorFunction = (texture, textureCanvas, setTextureCanvas, color, part) => {
    return new Promise((resolve, reject) => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.id = 'temp-canvas';
        tempCanvas.width = 4096;
        tempCanvas.height = 4096;
        const ctxtemp = tempCanvas.getContext('2d');
        const mask = new Image()
        mask.src = part.mask;
        mask.onload = function () {
            ctxtemp.drawImage(mask, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
            ctxtemp.globalCompositeOperation = "source-in";
            ctxtemp.fillStyle = color;
            ctxtemp.fillRect(0, 0, 4096, 4096);
            const finalCanvas = textureCanvas;
            finalCanvas.drawImage(tempCanvas, part.x, part.y, part.width, part.height);
            finalCanvas.canvas.id = "new-canvas";
            setTextureCanvas(finalCanvas);
            texture.needsUpdate = true;
            resolve('done');
        }
    })
}

export const drawGraphicFunction = (texture, textureCanvas, setTextureCanvas, part, layerDetails) => {
    const { link, x, y, scale, rotation } = layerDetails

    return new Promise((resolve, reject) => {
        var graphicImg = new Image();
        graphicImg.src = link;
        graphicImg.onload = function () {
            // Variables
            var graphicWidth = graphicImg.width;
            var graphicHeight = graphicImg.height;
            var graphicPythagorean = Math.sqrt(Math.pow(graphicWidth, 2) + Math.pow(graphicHeight, 2));

            // Create Pythagorean Canvas
            var pythagoreanCanvas = document.createElement('canvas');
            pythagoreanCanvas.id = 'pythagorean-canvas';
            pythagoreanCanvas.width = graphicPythagorean;
            pythagoreanCanvas.height = graphicPythagorean;
            var pythagoreanTemp = pythagoreanCanvas.getContext('2d');
            pythagoreanTemp.translate(pythagoreanCanvas.width / 2, pythagoreanCanvas.height / 2);
            pythagoreanTemp.rotate(rotation * Math.PI / 180);
            pythagoreanTemp.drawImage(graphicImg, (-graphicImg.width / 2), (-graphicImg.height / 2), graphicImg.width, graphicImg.height);

            // Load the mask
            const tempCanvas = document.createElement('canvas');
            tempCanvas.id = 'temp-canvas';
            tempCanvas.width = 4096;
            tempCanvas.height = 4096;
            const ctxtemp = tempCanvas.getContext('2d');
            const mask = new Image()
            mask.src = part.mask;
            mask.onload = function () {
                ctxtemp.drawImage(mask, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
                ctxtemp.globalCompositeOperation = "source-in";
                ctxtemp.globalCompositeOperation = "source-in";
                ctxtemp.translate(ctxtemp.canvas.width / 2, ctxtemp.canvas.width / 2);
                ctxtemp.drawImage(pythagoreanCanvas, (-ctxtemp.canvas.width / 2) + x - scale, (-ctxtemp.canvas.height / 2) + y - scale, ctxtemp.canvas.width + (2 * scale), ctxtemp.canvas.width + (2 * scale));
                ctxtemp.resetTransform();
                // // Final step
                const finalCanvas = textureCanvas;
                finalCanvas.drawImage(tempCanvas, part.x, part.y, part.width, part.height);
                setTextureCanvas(finalCanvas);
                texture.needsUpdate = true;

                resolve('done');
            }
        }
    })
}

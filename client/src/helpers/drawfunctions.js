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

export const drawPartFunction = (texture, textureCanvas, setTextureCanvas, color, part) => {
    return new Promise((resolve, reject) => {
        const tempCanvas = document.createElement('canvas');
        tempCanvas.id = 'temp-canvas';
        tempCanvas.width = 4096;
        tempCanvas.height = 4096;
        const ctxtemp = tempCanvas.getContext('2d');
        const mask = new Image()
        mask.src = part.mask;
        console.log('outside')
        mask.onload = function () {
            console.log('inside')
            ctxtemp.drawImage(mask, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);
            ctxtemp.globalCompositeOperation = "source-in";
            ctxtemp.fillStyle = color;
            ctxtemp.fillRect(0, 0, 4096, 4096);
            const finalCanvas = textureCanvas;
            finalCanvas.drawImage(tempCanvas, part.x, part.y, part.width, part.height);
            finalCanvas.canvas.id = "new-canvas";
            setTextureCanvas(finalCanvas);
            texture.needsUpdate = true;
            console.log(color)
            resolve('done');
        }
    })

}
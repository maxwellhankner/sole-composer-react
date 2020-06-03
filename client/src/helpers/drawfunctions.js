export const drawSwooshFunction = (texture, textureCanvas, setTextureCanvas) => {
    const color = '#33aa99'

    // const newCanvas = drawSwooshFunction(textureCanvas);

    const tempCanvas = document.createElement('canvas');
    tempCanvas.id = 'tempcanvas';
    tempCanvas.width = 4096;
    tempCanvas.height = 4096;
    const ctxtemp = tempCanvas.getContext('2d');

    const mask = new Image()
    mask.src = "/assets/images/outerSwooshMask.png"
    mask.onload = function () {
        ctxtemp.drawImage(mask, 0, 0, ctxtemp.canvas.width, ctxtemp.canvas.height);

        ctxtemp.globalCompositeOperation = "source-in";
        ctxtemp.fillStyle = color;
        ctxtemp.fillRect(0, 0, 4096, 4096);

        const finalCanvas = textureCanvas;

        finalCanvas.drawImage(tempCanvas, 2015, -359, 1500, 1500);

        finalCanvas.canvas.id = "new-canvas";
        // console.log(finalCanvas.canvas)
        document.body.appendChild(finalCanvas.canvas)
        setTextureCanvas(finalCanvas);
        texture.needsUpdate = true;
    }

}
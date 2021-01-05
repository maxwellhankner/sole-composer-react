export const takeScreenshot = (camera, fileName) => {
  return new Promise((resolve) => {
    camera.position.set(0, 0, 8.5);
    setTimeout(() => {
      const threeCanvas = document.getElementById('scene-container-id')
        .firstElementChild;
      const newCanvas = document.createElement('canvas');
      newCanvas.width = 1024;
      newCanvas.height = 1024;
      const newCanvasCtx = newCanvas.getContext('2d');
      newCanvasCtx.drawImage(threeCanvas, 0, 0, 1024, 1024);

      const dataUrl = newCanvas.toDataURL('image/png');

      var blobBin = atob(dataUrl.split(',')[1]);
      var array = [];
      for (var i = 0; i < blobBin.length; i++) {
        array.push(blobBin.charCodeAt(i));
      }
      var blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
      blob.name = 'theBlob';
      blob.lastModifiedDate = new Date();
      var file = new File([blob], fileName, { type: 'image/png' });
      resolve(file);
    }, 500);
  });
};

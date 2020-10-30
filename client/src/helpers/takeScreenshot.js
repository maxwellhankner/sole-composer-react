export const takeScreenshot = (camera) => {
  camera.position.set(0, 0, 7.5);
  const threeCanvas = document.getElementById('scene-container-id')
    .firstElementChild;
  const dataUrl = threeCanvas.toDataURL('image/png');

  var blobBin = atob(dataUrl.split(',')[1]);
  var array = [];
  for (var i = 0; i < blobBin.length; i++) {
    array.push(blobBin.charCodeAt(i));
  }
  var blob = new Blob([new Uint8Array(array)], { type: 'image/png' });
  blob.name = 'theBlob';
  blob.lastModifiedDate = new Date();
  var file = new File([blob], 'theImage', { type: 'image/png' });
  return file;
};

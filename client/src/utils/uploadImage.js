export const uploadImage = (file, isNew) => {
  const formData = new FormData();
  if (isNew) {
    formData.append('image', file, 'newImage');
  } else {
    formData.append('image', file);
  }

  return fetch('/api/assets/uploadimage', {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};

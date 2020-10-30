export const uploadImage = (file) => {
  const formData = new FormData();
  formData.append('image', file, file.name);

  return fetch('/api/assets/uploadimage', {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};

export const uploadImage = (file) => {
  console.log(file);
  const formData = new FormData();
  formData.append('image', file);

  return fetch('/api/assets/uploadimage', {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
};

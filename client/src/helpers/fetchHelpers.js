export const simpleFetch = (link, method) => {
  return fetch(link, { method: method });
};

export const designFetch = (link, method, body) => {
  return fetch(link, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
};

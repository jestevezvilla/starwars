const api = url => fetch(url).then(response => response.json());
export default api;

// const encode = btoa('token')
const encodeToBase64 =
  'Z2hwXzY5ZG9iOGtCazAxbGRqOVhkSzhBODVHOEpMY0NwVzRBSlN3bw==';
const GITHUB_API_KEY = atob(encodeToBase64);

export default GITHUB_API_KEY;

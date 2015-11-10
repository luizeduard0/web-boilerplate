import fetch from 'node-fetch';
import Promise from 'promise';

fetch.Promise = Promise;

export function callAPI(type, path, params) {
  if (['get', 'post', 'put', 'delete'].indexOf(type) === -1) {
    throw new Error('Invalid type');
  }
  if (!path) {
    throw new Error('Invalid path');
  }
  const { protocol, hostname } = location;
  return fetch(`${protocol}//${hostname}/api${path}`, {
    method: type.toUpperCase(),
    body: params ? JSON.stringify(params) : null
  })
  .then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}

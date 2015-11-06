import fetch from 'node-fetch';
import Promise from 'promise';

fetch.Promise = Promise;

export function callAPI(type, path, params) {
  if (['get', 'post', 'put', 'delete'].indexOf(type) === -1) {
    throw 'Invalid type';
  }
  if (!path) {
    throw 'Invalid path';
  }
  const { protocol, hostname } = location;
  return fetch(`${protocol}//${hostname}/api${path}`, {
    method: type.toUpperCase(),
    body: params ? JSON.stringify(params) : null
  })
  .then(res => {
    if (!res.ok) {
      throw res.status;
    }
    return res.json();
  });
}

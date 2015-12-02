import Promise from 'promise';
import request from 'superagent';

export const callAPI = (type, path, params) => {
  if (['get', 'post', 'put', 'delete'].indexOf(type) === -1) {
    throw new Error('Invalid type');
  }
  if (!path) {
    throw new Error('Invalid path');
  }
  return new Promise((resolve, reject) => {
    return request[type](`/api/${path}`)[type === 'get' ? 'query' : 'send'](params).end((error, response) => {
      if (error) {
        return reject(error);
      }
      return resolve(response);
    });
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.body;
  });
};

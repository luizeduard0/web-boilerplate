import assign from 'lodash/object/assign';

export function async() {
  return next => action => {
    const { type, promise } = action;
    if (!promise) {
      return next(action);
    }
    next(assign({}, action, { type: `${type}_REQUEST` }));
    return promise.then(data => {
      return next(assign({}, action, { type: `${type}_SUCCESS`, payload: data }));
    }).catch(error => {
      return next(assign({}, action, { type: `${type}_FAILURE`, payload: error, error: true }));
    });
  };
}

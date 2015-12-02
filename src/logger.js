import createLogger from 'redux-logger';

const logger = createLogger({
  predicate: () => true
});

export default logger;

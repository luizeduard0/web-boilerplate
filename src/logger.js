import createLogger from 'redux-logger';

const logger = createLogger({
  duration: true,
  predicate: () => __DEV__
});

export default logger;

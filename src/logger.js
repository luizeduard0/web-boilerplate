import createLogger from 'redux-logger';

const logger = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});

export default logger;

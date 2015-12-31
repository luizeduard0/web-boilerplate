import App from './app/components/App.js';
import Projects from './projects/containers/Projects.js';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: Projects
    },
    childRoutes: [
      {
        path: 'projects',
        component: Projects
      }
    ]
  }
];

export default routes;

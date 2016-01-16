import App from './app/App.js';
import ProjectsContainer from './projects/ProjectsContainer.js';
import NotFound from './app/NotFound.js';

const routes = [
  {
    path: '/',
    component: App,
    indexRoute: {
      component: ProjectsContainer
    },
    childRoutes: [
      {
        path: 'projects',
        component: ProjectsContainer
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;

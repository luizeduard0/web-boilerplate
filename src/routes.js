import AppContainer from './containers/AppContainer';
import ProjectsContainer from './containers/ProjectsContainer';

const routes = [
  {
    path: '/',
    component: AppContainer,
    indexRoute: { component: ProjectsContainer },
    childRoutes: [
      { path: 'projects', component: ProjectsContainer }
    ]
  }
];

export default routes;

import React from 'react';
import { connect } from 'react-redux';
import { loadProjects } from '../modules/projects';
import Projects from '../components/Projects';

const mapStateToProps = state => ({
  data: state.projects.data,
  isLoading: state.projects.isLoading,
  errorMessage: state.projects.errorMessage
});

class ProjectsContainer extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProjects());
  }
  render() {
    return <Projects {...this.props} />;
  }
}

export default connect(mapStateToProps)(ProjectsContainer);

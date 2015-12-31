import React from 'react';
import { connect } from 'react-redux';
import loadProjects from '../actions/loadProjects.js';
import Spinner from '@hnordt/reax-spinner';
import Alert from '@hnordt/reax-alert';
import ProjectPanel from '../components/ProjectPanel.js';

class Projects extends React.Component {
  componentDidMount() {
    this.props.dispatch(loadProjects());
  }
  render() {
    const {
      projects,
      isLoading,
      errorMessage
    } = this.props;
    if (isLoading) {
      return <Spinner />;
    }
    if (errorMessage) {
      return <Alert type="danger">{errorMessage}</Alert>;
    }
    return <ProjectPanel projects={projects} />;
  }
}

const mapStateToProps = state => ({
  projects: state.projects.data,
  isLoading: state.projects.isLoading,
  errorMessage: state.projects.errorMessage
});

export default connect(mapStateToProps)(Projects);

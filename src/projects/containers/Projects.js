import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Async from '@hnordt/reax-async';
import Row from '@hnordt/reax-row';
import Col from '@hnordt/reax-col';
import { callAPI } from '@hnordt/reax-api';
import ProjectPanel from '../components/ProjectPanel.js';
import ProjectForm from './ProjectForm.js';

const AsyncProjectPanel = Async(ProjectPanel);

class Projects extends Component {
  componentDidMount() {
    const { loadProjects } = this.props;
    loadProjects();
  }
  render() {
    const {
      projects,
      isLoading,
      error,
      loadProjects
    } = this.props;
    return (
      <Row>
        <Col md={8}>
          <AsyncProjectPanel
            projects={projects}
            isLoading={isLoading}
            error={error && (
              <span>
                Failed to load projects.
                {' '}
                <a href="#" onClick={event => {
                  event.preventDefault();
                  loadProjects();
                }}>Try Again</a>
              </span>
            )}
          />
        </Col>
        <Col md={4}>
          <ProjectForm />
        </Col>
      </Row>
    );
  }
}

Projects.propTypes = {
  data: PropTypes.any,
  isLoading: PropTypes.bool,
  error: PropTypes.bool
};

const mapStateToProps = state => {
  const {
    data: projects,
    isLoading = true,
    error
  } = state.api.projects || {};
  return {
    projects,
    isLoading,
    error
  };
};

const mapDispatchToProps = dispatch => ({
  loadProjects: () => dispatch(callAPI('projects', 'GET', '/api/projects.json'))
});

export default connect(mapStateToProps, mapDispatchToProps)(Projects);

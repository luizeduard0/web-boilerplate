import React from 'react';
import { connect, PromiseState } from 'react-refetch';
import Async from '@hnordt/reax-async';
import Row from '@hnordt/reax-row';
import Col from '@hnordt/reax-col';
import ProjectPanel from '../components/ProjectPanel.js';
import ProjectForm from './ProjectForm.js';

const AsyncProjectPanel = Async(ProjectPanel);

const Projects = ({ projectsFetch }) => (
  <Row>
    <Col md={8}>
      <AsyncProjectPanel
        projects={projectsFetch.value}
        isLoading={projectsFetch.pending}
        error={projectsFetch.reason}
      />
    </Col>
    <Col md={4}>
      <ProjectForm />
    </Col>
  </Row>
);

export default connect(() => ({
  projectsFetch: '/api/projects.json'
}))(Projects);

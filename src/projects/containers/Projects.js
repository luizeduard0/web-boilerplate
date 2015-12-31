import React from 'react';
import { connect, PromiseState } from 'react-refetch';
import Async from '@hnordt/reax-async';
import ProjectPanel from '../components/ProjectPanel.js';

const AsyncProjectPanel = Async(ProjectPanel);

const Projects = ({
  projectsFetch
}) => (
  <AsyncProjectPanel
    projects={projectsFetch.value}
    isLoading={projectsFetch.pending}
    error={projectsFetch.reason} />
);

export default connect(() => ({
  projectsFetch: '/api/projects.json'
}))(Projects);

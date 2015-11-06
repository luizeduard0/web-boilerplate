import React from 'react';
import Project from './Project';

const Projects = ({
  data,
  isLoading,
  errorMessage
}) => {
  if (isLoading) {
    return <span className="fa fa-spinner fa-spin" />;
  }
  if (errorMessage) {
    return <div className="alert alert-danger">{errorMessage}</div>;
  }
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        Projects
      </div>
      <div className="panel-body">
        <button className="btn btn-success" type="button" onClick={() => alert('Not implemented yet')}>
          <span className="glyphicon glyphicon-plus" />
        </button>
      </div>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Version</th>
          </tr>
        </thead>
        <tbody>
          {data.map(({ name, version }) => <Project key={name} name={name} version={version} />)}
        </tbody>
      </table>
    </div>
  );
};

Projects.propTypes = {
  data: React.PropTypes.array.isRequired,
  isLoading: React.PropTypes.bool.isRequired,
  errorMessage: React.PropTypes.string
};

export default Projects;

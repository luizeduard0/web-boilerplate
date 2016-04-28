import React, { PropTypes } from 'react'

export default function App({ children }) {
  return (
    <div className="container" style={styles.container}>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

const styles = {
  container: {
    paddingTop: 20
  }
}

import React, { PropTypes } from 'react'
import Container from '@hnordt/reax-container'

function App({ children }) {
  return <Container>{children}</Container>
}

App.propTypes = {
  children: PropTypes.node.isRequired
}

export default App

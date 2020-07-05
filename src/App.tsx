import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Page from './components/Page'
import Header from './components/Header'
import Homepage from './components/Homepage'

function App() {
  return (
    <Router>
      <Header />
      <Route path="/" exact component={Homepage} />
      <Route path="/pages/:id" component={Page} />
    </Router>
  )
}

export default App

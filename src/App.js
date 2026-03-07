import React from 'react'
import { Switch, Route, BrowserRouter as Router, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { GlobalStyles } from './theme/GlobalStyles'
import Home from './pages/Home'
import Photos from './pages/Photos'
import PageTransition from './components/PageTransition'
import CustomCursor from './components/CustomCursor'

const AppContent = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/photos">
          <PageTransition><Photos /></PageTransition>
        </Route>
        <Route path="/">
          <PageTransition><Home /></PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  )
}

function App() {
  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <Router>
        <AppContent />
      </Router>
    </>
  )
}

export default App

import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Photos from './pages/Photos'

function App() {
 function handleUpdate() {
   console.log("handle update")
   window.scrollTo(0,0)
 }

 return (
   <Router onUpdate={handleUpdate} >
     <Switch>
       <Route path="/photos">
          <Photos />
       </Route>
       <Route path="/">
          <Home />
       </Route>
     </Switch>
   </Router>
 )
}

export default App
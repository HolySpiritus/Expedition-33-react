import { useState } from 'react'
import './App.css'
import DigitalClock from './DigitalClock'
import Navigation from './navigation'
import About from './About'
import Characters from './Characters'

function App() {
return(
  <>
  <Navigation />
  <DigitalClock />
  <About />
  <Characters />
  </>
)
}

export default App

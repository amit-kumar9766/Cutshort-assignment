import React, { useState } from 'react'
import './App.css'
import OnboardingName from './pages/OnboardingName'
import OnboardingHome from './pages/OnboardingHome'
import OnboardingPlanning from './pages/OnboardingPlanning'
import OnboardingCompletion from './pages/OnboardingCompletion'

function App() {
  const [state, setState] = useState('thirdPage')

  return (
    <div className="App">
      {!!(state === 'firstPage') && <OnboardingName change={setState} />}
      {!!(state === 'secondPage') && <OnboardingHome change={setState} />}
      {!!(state === 'thirdPage') && <OnboardingPlanning change={setState} />}
      {!!(state === 'fourthPage') && <OnboardingCompletion />}
    </div>
  )
}

export default App

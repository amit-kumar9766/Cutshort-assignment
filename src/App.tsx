import React, { useState } from 'react'
import './App.css'
import OnboardingName from './pages/OnboardingName'
import OnboardingHome from './pages/OnboardingHome'
import OnboardingPlanning from './pages/OnboardingPlanning'
import OnboardingCompletion from './pages/OnboardingCompletion'
import { Title } from './components/Title'

function App() {
  const [state, setState] = useState('firstPage')

  return (
    <div className="App">
      <Title />
      {!!(state === 'firstPage') && <OnboardingName change={setState} />}
      {!!(state === 'secondPage') && <OnboardingHome change={setState} />}
      {!!(state === 'thirdPage') && <OnboardingPlanning change={setState} />}
      {!!(state === 'fourthPage') && <OnboardingCompletion />}
    </div>
  )
}

export default App
